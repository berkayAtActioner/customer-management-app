// Side Panel JavaScript

document.addEventListener('DOMContentLoaded', function() {
    console.log('Customer Management Assistant: Side panel loaded');
    
    // State management
    let currentContactData = null;
    let currentTabId = null;
    
    // Get current tab ID
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs[0]) {
            currentTabId = tabs[0].id;
            loadContactData();
        }
    });
    
    // Load contact data for current tab
    async function loadContactData() {
        try {
            console.log('Customer Management Assistant: Loading contact data for tab:', currentTabId);
            showLoadingState();
            
            // Get contact data from background script
            chrome.runtime.sendMessage(
                { type: 'GET_CONTACT_DATA', tabId: currentTabId },
                (response) => {
                    console.log('Customer Management Assistant: Received response:', response);
                    
                    if (response && response.success && response.data.contacts.length > 0) {
                        console.log('Customer Management Assistant: Found contacts:', response.data.contacts);
                        currentContactData = response.data.contacts[0]; // Show first contact
                        showContactFoundState(currentContactData);
                    } else {
                        console.log('Customer Management Assistant: No contacts found');
                        showNoContactState();
                    }
                }
            );
        } catch (error) {
            console.error('Error loading contact data:', error);
            showNoContactState();
        }
    }
    
    // Show loading state
    function showLoadingState() {
        hideAllStates();
        document.getElementById('loading-state').classList.remove('hidden');
    }
    
    // Show no contact found state
    function showNoContactState() {
        hideAllStates();
        document.getElementById('no-contact-state').classList.remove('hidden');
    }
    
    // Show contact found state
    function showContactFoundState(data) {
        hideAllStates();
        document.getElementById('contact-found-state').classList.remove('hidden');
        
        populateContactInfo(data.contact);
        populateAccountInfo(data.account);
        populateRecentActivity(data.recentActivity || []);
    }
    
    // Show manual search form
    function showManualSearchForm() {
        hideAllStates();
        document.getElementById('manual-search-form').classList.remove('hidden');
        document.getElementById('search-email').focus();
    }
    
    // Hide all state containers
    function hideAllStates() {
        const states = [
            'loading-state',
            'no-contact-state', 
            'contact-found-state',
            'manual-search-form'
        ];
        
        states.forEach(stateId => {
            document.getElementById(stateId).classList.add('hidden');
        });
    }
    
    // Populate contact information
    function populateContactInfo(contact) {
        if (!contact) return;
        
        // Contact initials
        const initials = contact.name.split(' ').map(n => n[0]).join('').substring(0, 2);
        document.getElementById('contact-initials').textContent = initials;
        
        // Contact details
        document.getElementById('contact-name').textContent = contact.name;
        document.getElementById('contact-title').textContent = contact.title;
        document.getElementById('contact-email').textContent = contact.email;
        document.getElementById('contact-phone').textContent = contact.phone || 'N/A';
        
        // LinkedIn link
        const linkedinElement = document.getElementById('contact-linkedin');
        if (contact.linkedin) {
            linkedinElement.href = `https://linkedin.com/in/${contact.linkedin}`;
            linkedinElement.textContent = 'View Profile';
        } else {
            linkedinElement.textContent = 'N/A';
            linkedinElement.removeAttribute('href');
        }
        
        document.getElementById('contact-last-interaction').textContent = contact.lastInteraction || 'N/A';
        document.getElementById('contact-status').textContent = contact.status || 'Unknown';
    }
    
    // Populate account information
    function populateAccountInfo(account) {
        if (!account) {
            document.querySelector('.account-card').style.display = 'none';
            return;
        }
        
        document.getElementById('account-name').textContent = account.name;
        
        // Update metrics
        const metrics = document.querySelectorAll('.summary-item');
        if (metrics[0]) {
            metrics[0].querySelector('.metric').textContent = account.activeTickets || '0';
        }
        if (metrics[1]) {
            metrics[1].querySelector('.metric').textContent = account.teamMembers || '0';
        }
        if (metrics[2]) {
            metrics[2].querySelector('.metric').textContent = account.monthlyUsage || '$0';
        }
    }
    
    // Populate recent activity
    function populateRecentActivity(activities) {
        const activityList = document.getElementById('activity-list');
        
        if (!activities || activities.length === 0) {
            activityList.innerHTML = '<p style="color: #64748b; text-align: center;">No recent activity</p>';
            return;
        }
        
        activityList.innerHTML = activities.map(activity => `
            <div class="activity-item">
                <div class="activity-icon">${activity.icon || '📝'}</div>
                <div class="activity-content">
                    <p>${activity.message}</p>
                    <span class="activity-time">${activity.time}</span>
                </div>
            </div>
        `).join('');
    }
    
    // Event Handlers
    
    // Manual search button
    document.getElementById('manual-search-btn').addEventListener('click', () => {
        showManualSearchForm();
    });
    
    // Cancel search button
    document.getElementById('cancel-search-btn').addEventListener('click', () => {
        showNoContactState();
    });
    
    // Search form submission
    document.getElementById('search-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('search-email').value.trim();
        
        if (email) {
            performManualSearch(email);
        }
    });
    
    // View account button
    document.getElementById('view-account-btn').addEventListener('click', () => {
        if (currentContactData && currentContactData.account) {
            chrome.runtime.sendMessage({
                type: 'OPEN_ACCOUNT',
                accountId: currentContactData.account.id
            });
        }
    });
    
    // Quick action buttons
    document.getElementById('create-ticket-btn').addEventListener('click', () => {
        if (currentContactData) {
            showCreateTicketForm();
        }
    });
    
    document.getElementById('add-note-btn').addEventListener('click', () => {
        if (currentContactData) {
            showAddNoteForm();
        }
    });
    
    document.getElementById('create-task-btn').addEventListener('click', () => {
        if (currentContactData) {
            showCreateTaskForm();
        }
    });
    
    document.getElementById('view-usage-btn').addEventListener('click', () => {
        if (currentContactData && currentContactData.account) {
            const accountId = currentContactData.account.id;
            const usageUrl = `http://localhost:3000/accounts/${accountId}#usage`;
            chrome.tabs.create({ url: usageUrl });
        }
    });
    
    // Footer buttons
    document.getElementById('open-app-btn').addEventListener('click', () => {
        chrome.tabs.create({ url: 'http://localhost:3000' });
    });
    
    document.getElementById('settings-btn').addEventListener('click', () => {
        chrome.runtime.openOptionsPage();
    });
    
    // Manual search function
    function performManualSearch(email) {
        console.log('Customer Management Assistant: Performing manual search for:', email);
        showLoadingState();
        
        chrome.runtime.sendMessage(
            { type: 'SEARCH_CONTACT', email: email },
            (response) => {
                console.log('Customer Management Assistant: Manual search response:', response);
                
                if (response && response.success && response.data) {
                    console.log('Customer Management Assistant: Found contact via manual search:', response.data);
                    currentContactData = response.data;
                    showContactFoundState(currentContactData);
                } else {
                    console.log('Customer Management Assistant: No contact found via manual search for:', email);
                    showNoContactState();
                }
            }
        );
    }
    
    // Quick action form functions
    function showCreateTicketForm() {
        const title = prompt('Enter ticket title:');
        const priority = prompt('Enter priority (Low/Medium/High):', 'Medium');
        
        if (title) {
            chrome.runtime.sendMessage({
                type: 'CREATE_TICKET',
                data: {
                    title: title,
                    priority: priority,
                    contactId: currentContactData.contact.id,
                    accountId: currentContactData.account?.id
                }
            }, (response) => {
                if (response && response.success) {
                    alert('Ticket created successfully!');
                    // Refresh activity
                    loadContactData();
                } else {
                    alert('Failed to create ticket. Please try again.');
                }
            });
        }
    }
    
    function showAddNoteForm() {
        const content = prompt('Enter note content:');
        const category = prompt('Enter category (General/Meeting/Follow-up):', 'General');
        
        if (content) {
            chrome.runtime.sendMessage({
                type: 'ADD_NOTE',
                data: {
                    content: content,
                    category: category,
                    contactId: currentContactData.contact.id,
                    accountId: currentContactData.account?.id
                }
            }, (response) => {
                if (response && response.success) {
                    alert('Note added successfully!');
                    // Refresh activity
                    loadContactData();
                } else {
                    alert('Failed to add note. Please try again.');
                }
            });
        }
    }
    
    function showCreateTaskForm() {
        const title = prompt('Enter task title:');
        const dueDate = prompt('Enter due date (YYYY-MM-DD):');
        
        if (title) {
            // In a real implementation, this would call the API
            alert('Task creation feature coming soon!');
        }
    }
    
    // Listen for tab updates
    chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
        if (tabId === currentTabId && changeInfo.status === 'complete') {
            // Reload contact data when page changes
            setTimeout(loadContactData, 2000);
        }
    });
    
    // Listen for contact data updates from background script
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        if (message.type === 'CONTACT_DATA_UPDATED') {
            loadContactData();
        }
    });
});