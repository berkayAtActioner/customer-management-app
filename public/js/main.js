// Main JavaScript file for Customer Management App

document.addEventListener('DOMContentLoaded', function() {
    // Column resize functionality
    initColumnResize();
    // Handle active navigation state
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.parentElement.classList.add('active');
        }
    });

    // Search functionality
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                console.log('Searching for:', this.value);
                // Implement search functionality
            }
        });
    }

    // Filter button
    const filterBtn = document.querySelector('.btn-filter');
    if (filterBtn) {
        filterBtn.addEventListener('click', function() {
            console.log('Filter clicked');
            // Implement filter functionality
        });
    }

    // Sort button
    const sortBtn = document.querySelector('.btn-sort');
    if (sortBtn) {
        sortBtn.addEventListener('click', function() {
            console.log('Sort clicked');
            // Implement sort functionality
        });
    }

    // New Company button
    const newCompanyBtn = document.querySelector('.btn-primary');
    if (newCompanyBtn && newCompanyBtn.textContent === 'New Company') {
        newCompanyBtn.addEventListener('click', function() {
            console.log('New Company clicked');
            // Implement new company modal/form
        });
    }

    // Import/Export button
    const importBtn = document.querySelector('.btn-import');
    if (importBtn) {
        importBtn.addEventListener('click', function() {
            console.log('Import/Export clicked');
            // Implement import/export functionality
        });
    }

    // Tab switching
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Make account rows clickable
    const accountRows = document.querySelectorAll('.accounts-table tbody tr');
    accountRows.forEach(row => {
        row.addEventListener('click', function() {
            // Get company name from the first cell
            const companyName = this.querySelector('.company-name').textContent;
            // Convert to URL-friendly ID (in real app, would use actual ID)
            const accountId = companyName.toLowerCase().replace(/\s+/g, '-');
            window.location.href = `/accounts/${accountId}`;
        });
    });

    // Make contact rows clickable
    const contactRows = document.querySelectorAll('.contacts-table tbody tr');
    contactRows.forEach(row => {
        row.addEventListener('click', function(e) {
            // Don't navigate if clicking on a link or checkbox
            if (e.target.tagName === 'A' || e.target.closest('a') || e.target.type === 'checkbox') {
                return;
            }
            // Check for data-href first (used in account details contacts tab)
            const href = this.getAttribute('data-href');
            if (href) {
                window.location.href = href;
                return;
            }
            // Otherwise use contact ID from data attribute
            const contactId = this.getAttribute('data-contact-id');
            if (contactId) {
                window.location.href = `/contacts/${contactId}`;
            }
        });
    });

    // Make ticket rows clickable
    const ticketRows = document.querySelectorAll('.tickets-table tbody tr');
    ticketRows.forEach(row => {
        row.addEventListener('click', function(e) {
            // Don't navigate if clicking on a link or button
            if (e.target.tagName === 'A' || e.target.closest('a') || e.target.tagName === 'BUTTON') {
                return;
            }
            const href = this.getAttribute('data-href');
            if (href) {
                window.location.href = href;
            }
        });
    });

    // Make task rows clickable
    const taskRows = document.querySelectorAll('.tasks-table tbody tr');
    taskRows.forEach(row => {
        row.addEventListener('click', function(e) {
            // Don't navigate if clicking on a link, button, or checkbox
            if (e.target.tagName === 'A' || e.target.closest('a') || e.target.tagName === 'BUTTON' || e.target.type === 'checkbox') {
                return;
            }
            const href = this.getAttribute('data-href');
            if (href) {
                window.location.href = href;
            }
        });
    });

    // Make note cards clickable
    const noteCards = document.querySelectorAll('.note-card');
    noteCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Don't navigate if clicking on buttons
            if (e.target.tagName === 'BUTTON' || e.target.closest('button')) {
                return;
            }
            const noteId = this.getAttribute('data-note-id');
            if (noteId) {
                console.log('Note clicked:', noteId);
                // In a real app, this would navigate to note details
            }
        });
    });

    // Account tab functionality
    const accountTabs = document.querySelectorAll('.account-tab');
    const tabPanes = document.querySelectorAll('.tab-pane');

    accountTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all tabs and panes
            accountTabs.forEach(t => t.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Show corresponding tab pane
            const targetPane = document.getElementById(targetTab + '-tab');
            if (targetPane) {
                targetPane.classList.add('active');
            }
        });
    });

    // Handle tab links in overview section
    const tabLinks = document.querySelectorAll('.tab-link[data-tab]');
    tabLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetTab = this.getAttribute('data-tab');
            
            // Find and click the corresponding tab button
            const tabButton = document.querySelector(`.account-tab[data-tab="${targetTab}"]`);
            if (tabButton) {
                tabButton.click();
            }
        });
    });
});

// Column resize functionality
function initColumnResize() {
    // Find all tables with resizable columns
    const tables = document.querySelectorAll('.accounts-table table, .contacts-table table, .tickets-table table, .tasks-table table');
    
    tables.forEach(table => {
        const resizeHandles = table.querySelectorAll('.resize-handle');
        let currentHandle = null;
        let startX = 0;
        let startWidth = 0;
        let th = null;

        resizeHandles.forEach(handle => {
            handle.addEventListener('mousedown', function(e) {
                currentHandle = handle;
                th = handle.parentElement;
                startX = e.pageX;
                startWidth = th.offsetWidth;
                
                document.body.classList.add('resizing');
                e.preventDefault();
            });
        });

        document.addEventListener('mousemove', function(e) {
            if (!currentHandle) return;

            const diff = e.pageX - startX;
            const newWidth = Math.max(50, startWidth + diff); // Minimum width of 50px
            
            th.style.width = newWidth + 'px';
        });

        document.addEventListener('mouseup', function() {
            if (currentHandle) {
                currentHandle = null;
                document.body.classList.remove('resizing');
            }
        });
    });
}