// Content Script for Email Detection

(function() {
    'use strict';
    
    // Email regex pattern
    const EMAIL_REGEX = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
    
    // Domains to ignore (common non-business domains)
    const IGNORED_DOMAINS = [
        'gmail.com',
        'yahoo.com',
        'hotmail.com',
        'outlook.com',
        'live.com',
        'aol.com',
        'icloud.com',
        'protonmail.com',
        'mail.com',
        'yandex.com',
        'zoho.com'
    ];
    
    // Track processed emails to avoid duplicates
    let processedEmails = new Set();
    let lastScanTime = 0;
    const SCAN_THROTTLE = 2000; // 2 seconds
    
    // Initialize content script
    function initialize() {
        console.log('Customer Management Assistant: Content script loaded');
        
        // Initial scan
        scanForEmails();
        
        // Set up observers for dynamic content
        setupObservers();
        
        // Scan periodically for SPAs and dynamic content
        setInterval(() => {
            const now = Date.now();
            if (now - lastScanTime > SCAN_THROTTLE) {
                scanForEmails();
                lastScanTime = now;
            }
        }, 5000);
    }
    
    // Scan the page for email addresses
    function scanForEmails() {
        try {
            const emails = extractEmails();
            console.log('Customer Management Assistant: All extracted emails:', emails);
            
            const businessEmails = filterBusinessEmails(emails);
            console.log('Customer Management Assistant: Business emails after filtering:', businessEmails);
            
            if (businessEmails.length > 0) {
                // Send detected emails to background script
                chrome.runtime.sendMessage({
                    type: 'EMAIL_DETECTED',
                    data: businessEmails
                });
                
                console.log('Customer Management Assistant: Sent business emails to background:', businessEmails);
            } else {
                console.log('Customer Management Assistant: No business emails found on this page');
            }
        } catch (error) {
            console.error('Error scanning for emails:', error);
        }
    }
    
    // Extract email addresses from page content
    function extractEmails() {
        const emails = new Set();
        
        // Get all text content from the page
        const textContent = document.body.innerText || document.body.textContent || '';
        
        // Find emails in text content
        const textEmails = textContent.match(EMAIL_REGEX) || [];
        textEmails.forEach(email => emails.add(email.toLowerCase()));
        
        // Find emails in href attributes
        const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
        emailLinks.forEach(link => {
            const href = link.getAttribute('href');
            const email = href.replace('mailto:', '').split('?')[0]; // Remove query params
            if (EMAIL_REGEX.test(email)) {
                emails.add(email.toLowerCase());
            }
        });
        
        // Find emails in input fields (for form detection)
        const inputs = document.querySelectorAll('input[type="email"], input[name*="email"], input[id*="email"]');
        inputs.forEach(input => {
            if (input.value && EMAIL_REGEX.test(input.value)) {
                emails.add(input.value.toLowerCase());
            }
        });
        
        // Special handling for Gmail interface
        if (window.location.hostname.includes('mail.google.com')) {
            extractGmailEmails(emails);
        }
        
        // Special handling for Outlook/Hotmail
        if (window.location.hostname.includes('outlook.') || window.location.hostname.includes('hotmail.')) {
            extractOutlookEmails(emails);
        }
        
        return Array.from(emails);
    }
    
    // Extract emails from Gmail interface
    function extractGmailEmails(emails) {
        try {
            // Gmail email containers
            const emailContainers = document.querySelectorAll('[email], [data-address], .go span[email]');
            emailContainers.forEach(container => {
                const email = container.getAttribute('email') || container.getAttribute('data-address');
                if (email && EMAIL_REGEX.test(email)) {
                    emails.add(email.toLowerCase());
                }
            });
            
            // Gmail sender info
            const senderElements = document.querySelectorAll('.gD[email], .gb[email]');
            senderElements.forEach(element => {
                const email = element.getAttribute('email');
                if (email && EMAIL_REGEX.test(email)) {
                    emails.add(email.toLowerCase());
                }
            });
        } catch (error) {
            console.error('Error extracting Gmail emails:', error);
        }
    }
    
    // Extract emails from Outlook interface
    function extractOutlookEmails(emails) {
        try {
            // Outlook email attributes
            const outlookElements = document.querySelectorAll('[title*="@"], [aria-label*="@"]');
            outlookElements.forEach(element => {
                const title = element.getAttribute('title') || element.getAttribute('aria-label');
                if (title) {
                    const emailMatches = title.match(EMAIL_REGEX);
                    if (emailMatches) {
                        emailMatches.forEach(email => emails.add(email.toLowerCase()));
                    }
                }
            });
        } catch (error) {
            console.error('Error extracting Outlook emails:', error);
        }
    }
    
    // Filter out personal email domains and keep only business emails
    function filterBusinessEmails(emails) {
        return emails.filter(email => {
            const domain = email.split('@')[1];
            return !IGNORED_DOMAINS.includes(domain.toLowerCase());
        }).filter(email => {
            // Avoid duplicates
            if (processedEmails.has(email)) {
                return false;
            }
            processedEmails.add(email);
            return true;
        });
    }
    
    // Set up mutation observers for dynamic content
    function setupObservers() {
        // Observer for DOM changes
        const observer = new MutationObserver((mutations) => {
            let shouldScan = false;
            
            mutations.forEach((mutation) => {
                if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                    // Check if added nodes contain text or email-related elements
                    mutation.addedNodes.forEach(node => {
                        if (node.nodeType === Node.ELEMENT_NODE) {
                            const element = node;
                            if (element.textContent && 
                                (element.textContent.includes('@') || 
                                 element.querySelector && 
                                 element.querySelector('a[href^="mailto:"]'))) {
                                shouldScan = true;
                            }
                        }
                    });
                }
            });
            
            if (shouldScan) {
                // Throttle scanning to avoid excessive processing
                const now = Date.now();
                if (now - lastScanTime > SCAN_THROTTLE) {
                    setTimeout(scanForEmails, 500); // Small delay to let DOM settle
                    lastScanTime = now;
                }
            }
        });
        
        // Start observing
        observer.observe(document.body, {
            childList: true,
            subtree: true,
            characterData: true
        });
    }
    
    // Listen for messages from background script
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        switch (message.type) {
            case 'SCAN_EMAILS':
                scanForEmails();
                sendResponse({ success: true });
                break;
                
            case 'GET_PAGE_EMAILS':
                const emails = extractEmails();
                const businessEmails = filterBusinessEmails(emails);
                sendResponse({ emails: businessEmails });
                break;
                
            default:
                console.log('Unknown message type:', message.type);
        }
    });
    
    // Handle page focus to rescan (useful for SPAs)
    window.addEventListener('focus', () => {
        setTimeout(scanForEmails, 1000);
    });
    
    // Handle navigation changes (for SPAs)
    let currentUrl = window.location.href;
    setInterval(() => {
        if (window.location.href !== currentUrl) {
            currentUrl = window.location.href;
            processedEmails.clear(); // Clear processed emails for new page
            setTimeout(scanForEmails, 2000); // Delay to let page load
        }
    }, 1000);
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initialize);
    } else {
        initialize();
    }
    
})();