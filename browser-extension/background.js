// Background Service Worker for Customer Management Extension

// Extension installation and setup
chrome.runtime.onInstalled.addListener(() => {
    console.log('Customer Management Assistant extension installed');
    
    // Initialize default settings
    chrome.storage.sync.set({
        apiBaseUrl: 'http://localhost:3000',
        autoDetect: true,
        notifications: true
    });
});

// Handle extension icon click to open side panel
chrome.action.onClicked.addListener((tab) => {
    chrome.sidePanel.open({ tabId: tab.id });
});

// Listen for messages from content scripts and side panel
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    switch (message.type) {
        case 'EMAIL_DETECTED':
            handleEmailDetected(message.data, sender.tab);
            break;
            
        case 'SEARCH_CONTACT':
            searchContact(message.email)
                .then(result => sendResponse({ success: true, data: result }))
                .catch(error => sendResponse({ success: false, error: error.message }));
            return true; // Keep message channel open for async response
            
        case 'GET_CONTACT_DATA':
            getStoredContactData(sender.tab.id)
                .then(data => sendResponse({ success: true, data }))
                .catch(error => sendResponse({ success: false, error: error.message }));
            return true;
            
        case 'OPEN_ACCOUNT':
            openAccountPage(message.accountId);
            break;
            
        case 'CREATE_TICKET':
            createTicket(message.data)
                .then(result => sendResponse({ success: true, data: result }))
                .catch(error => sendResponse({ success: false, error: error.message }));
            return true;
            
        case 'ADD_NOTE':
            addNote(message.data)
                .then(result => sendResponse({ success: true, data: result }))
                .catch(error => sendResponse({ success: false, error: error.message }));
            return true;
            
        default:
            console.log('Unknown message type:', message.type);
    }
});

// Handle email detection from content script
async function handleEmailDetected(emails, tab) {
    try {
        console.log('Emails detected on page:', emails);
        
        // Store detected emails for this tab
        await chrome.storage.local.set({
            [`tab_${tab.id}_emails`]: emails,
            [`tab_${tab.id}_url`]: tab.url,
            [`tab_${tab.id}_title`]: tab.title
        });
        
        // Search for contact information
        const contactData = await searchMultipleContacts(emails);
        
        if (contactData && contactData.length > 0) {
            // Store contact data for this tab
            await chrome.storage.local.set({
                [`tab_${tab.id}_contacts`]: contactData
            });
            
            // Update extension badge
            chrome.action.setBadgeText({
                text: contactData.length.toString(),
                tabId: tab.id
            });
            chrome.action.setBadgeBackgroundColor({
                color: '#3b82f6',
                tabId: tab.id
            });
            
            // Send notification if enabled
            const settings = await chrome.storage.sync.get(['notifications']);
            if (settings.notifications) {
                chrome.notifications.create({
                    type: 'basic',
                    iconUrl: 'icons/icon48.png',
                    title: 'Contact Information Found',
                    message: `Found ${contactData.length} contact(s) on this page`
                });
            }
        } else {
            // Clear badge if no contacts found
            chrome.action.setBadgeText({
                text: '',
                tabId: tab.id
            });
        }
    } catch (error) {
        console.error('Error handling email detection:', error);
    }
}

// Search for a single contact by email
async function searchContact(email) {
    try {
        console.log('Customer Management Assistant: Searching for email:', email);
        
        const settings = await chrome.storage.sync.get(['apiBaseUrl']);
        const baseUrl = settings.apiBaseUrl || 'http://localhost:3000';
        
        // In a real implementation, this would call your API
        // For now, we'll use mock data based on the main app
        const mockContacts = await getMockContactData();
        console.log('Customer Management Assistant: Available contacts:', mockContacts.map(c => c.email));
        
        const contact = mockContacts.find(c => 
            c.email.toLowerCase() === email.toLowerCase()
        );
        
        if (contact) {
            console.log('Customer Management Assistant: Found contact:', contact.name);
            // Get account information
            const account = await getAccountByCompany(contact.company);
            return {
                contact,
                account,
                recentActivity: await getRecentActivity(contact.id)
            };
        }
        
        console.log('Customer Management Assistant: No contact found for email:', email);
        return null;
    } catch (error) {
        console.error('Error searching contact:', error);
        throw error;
    }
}

// Search for multiple contacts
async function searchMultipleContacts(emails) {
    try {
        const results = [];
        for (const email of emails) {
            const contactData = await searchContact(email);
            if (contactData) {
                results.push(contactData);
            }
        }
        return results;
    } catch (error) {
        console.error('Error searching multiple contacts:', error);
        return [];
    }
}

// Get stored contact data for a tab
async function getStoredContactData(tabId) {
    try {
        const result = await chrome.storage.local.get([
            `tab_${tabId}_contacts`,
            `tab_${tabId}_emails`,
            `tab_${tabId}_url`
        ]);
        
        return {
            contacts: result[`tab_${tabId}_contacts`] || [],
            emails: result[`tab_${tabId}_emails`] || [],
            url: result[`tab_${tabId}_url`] || ''
        };
    } catch (error) {
        console.error('Error getting stored contact data:', error);
        throw error;
    }
}

// Open account page in customer management app
function openAccountPage(accountId) {
    const accountUrl = `http://localhost:3000/accounts/${accountId}`;
    chrome.tabs.create({ url: accountUrl });
}

// Create a new ticket
async function createTicket(ticketData) {
    try {
        const settings = await chrome.storage.sync.get(['apiBaseUrl']);
        const baseUrl = settings.apiBaseUrl || 'http://localhost:3000';
        
        // In a real implementation, this would POST to your API
        console.log('Creating ticket:', ticketData);
        
        // Mock response
        return {
            id: 'ticket-' + Date.now(),
            title: ticketData.title,
            status: 'Open',
            priority: ticketData.priority || 'Medium',
            created: new Date().toISOString()
        };
    } catch (error) {
        console.error('Error creating ticket:', error);
        throw error;
    }
}

// Add a new note
async function addNote(noteData) {
    try {
        const settings = await chrome.storage.sync.get(['apiBaseUrl']);
        const baseUrl = settings.apiBaseUrl || 'http://localhost:3000';
        
        // In a real implementation, this would POST to your API
        console.log('Adding note:', noteData);
        
        // Mock response
        return {
            id: 'note-' + Date.now(),
            content: noteData.content,
            category: noteData.category || 'General',
            author: 'Extension User',
            created: new Date().toISOString()
        };
    } catch (error) {
        console.error('Error adding note:', error);
        throw error;
    }
}

// Mock data functions (in real app, these would be API calls)
async function getMockContactData() {
    return [
        {
            id: "alex-thompson",
            name: "Alex Thompson",
            title: "CEO",
            company: "Flowla",
            email: "alex@flowla.com",
            phone: "+1 415 555 0100",
            linkedin: "alexthompson",
            lastInteraction: "3 days ago",
            status: "Active"
        },
        {
            id: "emma-davis",
            name: "Emma Davis",
            title: "Head of Sales",
            company: "Flowla",
            email: "emma@flowla.com",
            phone: "+1 415 555 0101",
            linkedin: "emmadavis",
            lastInteraction: "5 days ago",
            status: "Active"
        },
        {
            id: "ryan-park",
            name: "Ryan Park",
            title: "CTO",
            company: "Flowla",
            email: "ryan@flowla.com",
            phone: "+1 415 555 0102",
            linkedin: "ryanpark",
            lastInteraction: "1 week ago",
            status: "Active"
        },
        {
            id: "erdem-kaya",
            name: "Erdem Kaya",
            title: "Product Manager",
            company: "Flowla",
            email: "erdem@flowla.com",
            phone: "+1 415 555 0103",
            linkedin: "erdemkaya",
            lastInteraction: "1 day ago",
            status: "Active"
        },
        {
            id: "john-doe",
            name: "John Doe",
            title: "Software Engineer",
            company: "Flowla",
            email: "john@flowla.com",
            phone: "+1 415 555 0104",
            linkedin: "johndoe",
            lastInteraction: "2 weeks ago",
            status: "Active"
        },
        {
            id: "mehmet-ozkan",
            name: "Dr. Mehmet Özkan",
            title: "IT Director",
            company: "Bilkent Universitesi",
            email: "mozkan@bilkent.edu.tr",
            phone: "+90 312 290 1234",
            linkedin: "mehmetozkan",
            lastInteraction: "2 days ago",
            status: "Active"
        }
    ];
}

async function getAccountByCompany(companyName) {
    const accounts = {
        "Flowla": {
            id: "flowla",
            name: "Flowla",
            domain: "flowla.com",
            activeTickets: 12,
            teamMembers: 8,
            monthlyUsage: "$2.4K",
            status: "Active"
        },
        "Bilkent Universitesi": {
            id: "bilkent-universitesi",
            name: "Bilkent Universitesi",
            domain: "bilkent.edu.tr",
            activeTickets: 5,
            teamMembers: 15,
            monthlyUsage: "$1.8K",
            status: "Active"
        }
    };
    
    return accounts[companyName] || null;
}

async function getRecentActivity(contactId) {
    return [
        {
            type: "ticket",
            icon: "🎫",
            message: "Ticket #123 updated",
            time: "2 hours ago"
        },
        {
            type: "email",
            icon: "📧",
            message: "Email sent to team",
            time: "1 day ago"
        }
    ];
}

// Clean up storage when tabs are closed
chrome.tabs.onRemoved.addListener((tabId) => {
    chrome.storage.local.remove([
        `tab_${tabId}_emails`,
        `tab_${tabId}_contacts`,
        `tab_${tabId}_url`,
        `tab_${tabId}_title`
    ]);
});

// Handle tab updates to re-scan for emails
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url) {
        // Clear previous data
        chrome.storage.local.remove([
            `tab_${tabId}_emails`,
            `tab_${tabId}_contacts`
        ]);
        
        // Clear badge
        chrome.action.setBadgeText({
            text: '',
            tabId: tabId
        });
        
        // Inject content script to scan for emails
        chrome.scripting.executeScript({
            target: { tabId: tabId },
            files: ['content.js']
        }).catch(error => {
            // Ignore errors for pages that don't allow content scripts
            console.log('Could not inject content script:', error.message);
        });
    }
});