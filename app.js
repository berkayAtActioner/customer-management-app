const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Import mock data
const mockData = require('./data/mockData');

// Set up EJS as view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
    res.redirect('/home');
});

app.get('/home', (req, res) => {
    res.render('pages/home', { 
        title: 'Home',
        activeTab: 'home',
        scheduleData: mockData.scheduleData,
        chatData: mockData.chatData
    });
});

app.get('/try', (req, res) => {
    res.render('pages/landing', { 
        title: 'Try Actioner - AI-Powered Customer Insights'
    });
});

app.get('/accounts', (req, res) => {
    res.render('pages/accounts', { 
        title: 'Accounts',
        activeTab: 'accounts',
        accounts: mockData.accounts
    });
});

app.get('/accounts/:id', (req, res) => {
    const accountId = req.params.id;
    // For now, we'll pass any ID through - in a real app this would lookup from a database
    res.render('pages/account-details', { 
        title: 'Account Details',
        activeTab: 'accounts',
        accountId: accountId,
        allContacts: mockData.allContacts,
        accountData: mockData.accountData
    });
});

app.get('/chat', (req, res) => {
    res.render('pages/chat', { 
        title: 'Chat',
        activeTab: 'chat'
    });
});

app.get('/contacts', (req, res) => {
    res.render('pages/contacts', { 
        title: 'Contacts',
        activeTab: 'contacts',
        contacts: mockData.allContacts.filter(c => c.type === 'contact')
    });
});

app.get('/contacts/:id', (req, res) => {
    const contactId = req.params.id;
    res.render('pages/contact-details', { 
        title: 'Contact Details',
        activeTab: 'contacts',
        contactId: contactId,
        contactsData: mockData.contactsData
    });
});

app.get('/tasks', (req, res) => {
    res.render('pages/tasks', { 
        title: 'Tasks',
        activeTab: 'tasks'
    });
});

app.get('/dashboards', (req, res) => {
    res.render('pages/dashboards', { 
        title: 'Dashboards',
        activeTab: 'dashboards'
    });
});

app.get('/usage', (req, res) => {
    res.render('pages/usage', { 
        title: 'Usage',
        activeTab: 'usage'
    });
});

app.get('/tickets', (req, res) => {
    res.render('pages/tickets', { 
        title: 'Tickets',
        activeTab: 'tickets'
    });
});

app.get('/settings', (req, res) => {
    res.render('pages/settings', { 
        title: 'Settings',
        activeTab: 'settings',
        settingsSection: 'team'
    });
});

app.get('/settings/:section', (req, res) => {
    const section = req.params.section;
    res.render('pages/settings', { 
        title: 'Settings',
        activeTab: 'settings',
        settingsSection: section
    });
});

// Start server
app.listen(port, () => {
    console.log(`Customer Management App listening at http://localhost:${port}`);
});