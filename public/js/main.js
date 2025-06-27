// Main JavaScript file for Customer Management App

document.addEventListener('DOMContentLoaded', function() {
    // Sidebar toggle functionality
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const appContainer = document.getElementById('appContainer');
    
    // Remove init class now that JS is loaded
    document.documentElement.classList.remove('sidebar-collapsed-init');
    
    // Load sidebar state from localStorage
    const sidebarCollapsed = localStorage.getItem('sidebarCollapsed') === 'true';
    if (sidebarCollapsed && sidebar) {
        sidebar.classList.add('collapsed');
    }
    
    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            sidebar.classList.toggle('collapsed');
            
            // Save state to localStorage
            const isCollapsed = sidebar.classList.contains('collapsed');
            localStorage.setItem('sidebarCollapsed', isCollapsed.toString());
        });
    }
    
    // Prevent accidental sidebar expansion
    if (sidebar) {
        // Capture phase to catch events early
        sidebar.addEventListener('click', function(e) {
            // If clicking anywhere on the sidebar when it's collapsed
            // (except the toggle button), prevent any default behavior
            if (sidebar.classList.contains('collapsed') && !e.target.closest('#sidebarToggle')) {
                e.stopPropagation();
                e.stopImmediatePropagation();
            }
        }, true); // Use capture phase
        
        // Also handle mousedown to prevent any early triggers
        sidebar.addEventListener('mousedown', function(e) {
            if (sidebar.classList.contains('collapsed') && !e.target.closest('#sidebarToggle')) {
                e.stopPropagation();
            }
        }, true);
    }
    
    // Add tooltips to nav items for collapsed state
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        const text = item.querySelector('.nav-text');
        if (text) {
            item.setAttribute('data-tooltip', text.textContent);
        }
        
        // Prevent sidebar expansion on nav item clicks
        item.addEventListener('click', function(e) {
            if (sidebar && sidebar.classList.contains('collapsed')) {
                e.stopPropagation();
                e.stopImmediatePropagation();
            }
        }, true);
    });
    
    // Prevent clicks on sidebar header/logo when collapsed
    const sidebarHeader = document.querySelector('.sidebar-header');
    if (sidebarHeader) {
        sidebarHeader.addEventListener('click', function(e) {
            if (sidebar && sidebar.classList.contains('collapsed') && !e.target.closest('#sidebarToggle')) {
                e.stopPropagation();
                e.stopImmediatePropagation();
            }
        }, true);
    }
    
    // Prevent clicks on any SVG elements in the sidebar
    const sidebarSvgs = document.querySelectorAll('.sidebar svg');
    sidebarSvgs.forEach(svg => {
        svg.addEventListener('click', function(e) {
            if (sidebar && sidebar.classList.contains('collapsed') && !e.target.closest('#sidebarToggle')) {
                e.stopPropagation();
                e.stopImmediatePropagation();
            }
        }, true);
    });
    
    // Column resize functionality
    initColumnResize();
    
    // Initialize expandable sections
    initExpandableSections();
    
    // Initialize drag and drop for home2 page
    if (window.location.pathname === '/home2') {
        initializeDragAndDrop();
    }
    
    // Handle clickable table rows using event delegation
    const accountsTable = document.querySelector('.accounts-table');
    if (accountsTable) {
        accountsTable.addEventListener('click', function(e) {
            // Find the closest tr element
            const row = e.target.closest('tr.clickable-row');
            
            if (!row) return;
            
            // Don't navigate if clicking on a link or button
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a')) {
                return;
            }
            
            const href = row.getAttribute('data-href');
            if (href) {
                window.location.href = href;
            }
        });
    }
    
    // Add hover effect for better UX
    const clickableRows = document.querySelectorAll('.clickable-row');
    clickableRows.forEach(row => {
        row.style.cursor = 'pointer';
    });
    
    // Handle active navigation state
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.parentElement.classList.add('active');
        }
        
        // Prevent sidebar toggle on navigation link clicks
        link.addEventListener('click', function(e) {
            e.stopPropagation();
            e.stopImmediatePropagation();
        }, true); // Capture phase
        
        // Also handle mousedown
        link.addEventListener('mousedown', function(e) {
            if (sidebar && sidebar.classList.contains('collapsed')) {
                e.stopPropagation();
            }
        });
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

    // Table navigation with data-href
    const navigationElements = document.querySelectorAll('[data-href]');
    navigationElements.forEach(element => {
        element.style.cursor = 'pointer';
        element.addEventListener('click', function() {
            window.location.href = this.dataset.href;
        });
    });

    // Tab functionality for account details
    const tabs = document.querySelectorAll('.account-tab');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Show corresponding pane
            const tabName = this.getAttribute('data-tab');
            const targetPane = document.getElementById(tabName + '-tab');
            if (targetPane) {
                targetPane.classList.add('active');
            }
        });
    });

    // Overview expand/collapse functionality
    const overviewExpandBtn = document.getElementById('overviewExpandBtn');
    const overviewContent = document.getElementById('overviewContent');
    
    if (overviewExpandBtn && overviewContent) {
        overviewExpandBtn.addEventListener('click', function(e) {
            e.preventDefault();
            overviewContent.classList.toggle('expanded');
            
            const expandText = this.querySelector('.expand-text');
            if (overviewContent.classList.contains('expanded')) {
                expandText.textContent = 'Show less';
            } else {
                expandText.textContent = 'more...';
            }
        });
    }

    // Tab links within content
    const tabLinks = document.querySelectorAll('.tab-link');
    tabLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetTab = this.getAttribute('data-tab');
            const targetTabBtn = document.querySelector(`.account-tab[data-tab="${targetTab}"]`);
            if (targetTabBtn) {
                targetTabBtn.click();
            }
        });
    });

    // Initialize tooltips for sparkline charts
    const sparklineContainers = document.querySelectorAll('.mau-sparkline, .health-sparkline');
    sparklineContainers.forEach(container => {
        const svg = container.querySelector('svg');
        if (!svg) return;

        // Create tooltip element
        const tooltip = document.createElement('div');
        tooltip.className = 'sparkline-tooltip';
        container.appendChild(tooltip);

        svg.addEventListener('mousemove', function(e) {
            const rect = svg.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const width = rect.width;
            
            // Calculate which data point we're hovering over
            const dataPoints = container.classList.contains('mau-sparkline') ? 12 : 12; // Both have 12 months
            const pointIndex = Math.floor((x / width) * dataPoints);
            
            // Position tooltip relative to the container
            tooltip.style.left = (x + rect.left - containerRect.left) + 'px';
            tooltip.style.top = '-35px';
            
            // Set tooltip content based on the type
            if (container.classList.contains('mau-sparkline')) {
                tooltip.textContent = `Month ${pointIndex + 1}`;
            } else {
                tooltip.textContent = `Month ${pointIndex + 1}`;
            }
            
            tooltip.classList.add('visible');
        });

        svg.addEventListener('mouseleave', function() {
            tooltip.classList.remove('visible');
        });
    });

    // Handle resizing for columns in tables
    let isResizing = false;
    let currentColumn = null;
    let startX = 0;
    let startWidth = 0;

    const resizeHandles = document.querySelectorAll('.resize-handle');
    
    resizeHandles.forEach(handle => {
        handle.addEventListener('mousedown', function(e) {
            isResizing = true;
            currentColumn = this.parentElement;
            startX = e.pageX;
            startWidth = currentColumn.offsetWidth;
            document.body.classList.add('resizing');
        });
    });

    document.addEventListener('mousemove', function(e) {
        if (!isResizing) return;
        
        const width = startWidth + (e.pageX - startX);
        if (width > 50) { // Minimum column width
            currentColumn.style.width = width + 'px';
        }
    });

    document.addEventListener('mouseup', function() {
        if (isResizing) {
            isResizing = false;
            currentColumn = null;
            document.body.classList.remove('resizing');
        }
    });

    // Add hover effect to data cells with gradients
    const dataCells = document.querySelectorAll('td .gradient-bg');
    dataCells.forEach(cell => {
        cell.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
        });
        
        cell.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Initialize chart tooltips in the usage tab
    const chartDots = document.querySelectorAll('.chart-dot');
    chartDots.forEach(dot => {
        dot.addEventListener('mouseenter', function(e) {
            const tooltip = document.createElement('div');
            tooltip.className = 'chart-tooltip visible';
            tooltip.textContent = this.dataset.value || '';
            tooltip.style.left = e.pageX + 'px';
            tooltip.style.top = (e.pageY - 40) + 'px';
            document.body.appendChild(tooltip);
            
            this._tooltip = tooltip;
        });
        
        dot.addEventListener('mouseleave', function() {
            if (this._tooltip) {
                this._tooltip.remove();
                delete this._tooltip;
            }
        });
    });

    // Handle usage trend interactions
    const trendBars = document.querySelectorAll('.trend-bar');
    trendBars.forEach(bar => {
        bar.addEventListener('mouseenter', function() {
            const tooltip = this.querySelector('.trend-tooltip');
            if (tooltip) {
                tooltip.style.opacity = '1';
            }
        });
        
        bar.addEventListener('mouseleave', function() {
            const tooltip = this.querySelector('.trend-tooltip');
            if (tooltip) {
                tooltip.style.opacity = '0';
            }
        });
    });

    // Initialize key metrics animations
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const metricsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    const metricCards = document.querySelectorAll('.metric-card');
    metricCards.forEach(card => {
        metricsObserver.observe(card);
    });

    // Feature breakdown interactions
    const featureRows = document.querySelectorAll('.feature-row');
    featureRows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#f9fafb';
        });
        
        row.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'transparent';
        });
    });

    // Handle chart interactions
    const chartContainers = document.querySelectorAll('.usage-chart, .trend-chart, .activity-chart');
    chartContainers.forEach(chart => {
        const tooltip = chart.querySelector('.chart-tooltip');
        const points = chart.querySelectorAll('.chart-point, .trend-bar');
        
        points.forEach(point => {
            point.addEventListener('mouseenter', function(e) {
                if (tooltip) {
                    const value = this.getAttribute('data-value');
                    const label = this.getAttribute('data-label') || '';
                    tooltip.textContent = `${label}: ${value}`;
                    tooltip.classList.add('visible');
                    
                    const rect = chart.getBoundingClientRect();
                    const pointRect = this.getBoundingClientRect();
                    tooltip.style.left = (pointRect.left - rect.left + pointRect.width / 2) + 'px';
                    tooltip.style.top = (pointRect.top - rect.top - 30) + 'px';
                }
            });
            
            point.addEventListener('mouseleave', function() {
                if (tooltip) {
                    tooltip.classList.remove('visible');
                }
            });
        });
    });

    // Handle trend fills
    const trendFills = document.querySelectorAll('.trend-fill');
    trendFills.forEach(fill => {
        fill.addEventListener('mousemove', function(e) {
            const tooltip = this.querySelector('.trend-tooltip');
            if (tooltip) {
                const rect = this.getBoundingClientRect();
                tooltip.style.left = (e.clientX - rect.left) + 'px';
                tooltip.style.opacity = '1';
            }
        });
        
        fill.addEventListener('mouseleave', function() {
            const tooltip = this.querySelector('.trend-tooltip');
            if (tooltip) {
                tooltip.style.opacity = '0';
            }
        });
    });

    // Initialize activity heatmap interactions
    const heatmapCells = document.querySelectorAll('.heatmap-cell');
    heatmapCells.forEach(cell => {
        cell.addEventListener('mouseenter', function() {
            const tooltip = document.createElement('div');
            tooltip.className = 'chart-tooltip visible';
            tooltip.textContent = this.getAttribute('title') || '';
            
            const rect = this.getBoundingClientRect();
            tooltip.style.left = rect.left + rect.width / 2 + 'px';
            tooltip.style.top = (rect.top - 30) + 'px';
            tooltip.style.position = 'fixed';
            
            document.body.appendChild(tooltip);
            this._tooltip = tooltip;
        });
        
        cell.addEventListener('mouseleave', function() {
            if (this._tooltip) {
                this._tooltip.remove();
                delete this._tooltip;
            }
        });
    });

    // Add smooth scrolling for metric cards
    const metricContainer = document.querySelector('.key-metrics-grid');
    if (metricContainer) {
        let isDown = false;
        let startX;
        let scrollLeft;

        metricContainer.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - metricContainer.offsetLeft;
            scrollLeft = metricContainer.scrollLeft;
        });

        metricContainer.addEventListener('mouseleave', () => {
            isDown = false;
        });

        metricContainer.addEventListener('mouseup', () => {
            isDown = false;
        });

        metricContainer.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - metricContainer.offsetLeft;
            const walk = (x - startX) * 2;
            metricContainer.scrollLeft = scrollLeft - walk;
        });
    }

    // Initialize chart animations on scroll
    const chartObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bars = entry.target.querySelectorAll('.bar-fill, .trend-bar-fill');
                bars.forEach((bar, index) => {
                    setTimeout(() => {
                        bar.style.transform = 'scaleX(1)';
                    }, index * 50);
                });
            }
        });
    }, { threshold: 0.3 });

    const animatedCharts = document.querySelectorAll('.usage-chart, .trend-chart');
    animatedCharts.forEach(chart => {
        chartObserver.observe(chart);
    });

    // Add interactive hover states for feature items
    const featureItems = document.querySelectorAll('.feature-item');
    featureItems.forEach(item => {
        item.addEventListener('click', function() {
            // Toggle expanded state
            this.classList.toggle('expanded');
            
            // You could add more details here when expanded
        });
    });

    // Handle responsive table scrolling
    const tableContainers = document.querySelectorAll('.table-container');
    tableContainers.forEach(container => {
        const table = container.querySelector('table');
        if (table && table.offsetWidth > container.offsetWidth) {
            container.classList.add('scrollable');
        }
    });

    // Initialize number counters animation
    const animateNumbers = (element, start, end, duration) => {
        const range = end - start;
        const increment = range / (duration / 16);
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
                element.textContent = end.toLocaleString();
                clearInterval(timer);
            } else {
                element.textContent = Math.round(current).toLocaleString();
            }
        }, 16);
    };

    // Trigger number animations when visible
    const numberElements = document.querySelectorAll('[data-animate-number]');
    const numberObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.animated) {
                entry.target.animated = true;
                const end = parseInt(entry.target.getAttribute('data-animate-number'));
                animateNumbers(entry.target, 0, end, 1000);
            }
        });
    }, { threshold: 0.5 });

    numberElements.forEach(el => numberObserver.observe(el));

    // Handle loading states
    const loadingElements = document.querySelectorAll('[data-loading]');
    loadingElements.forEach(element => {
        // Simulate loading completion
        setTimeout(() => {
            element.removeAttribute('data-loading');
        }, 1000);
    });

    // Initialize any remaining interactive elements
    const interactiveElements = document.querySelectorAll('[data-interactive]');
    interactiveElements.forEach(element => {
        element.addEventListener('click', function() {
            const action = this.getAttribute('data-interactive');
            console.log('Interactive action:', action);
            // Handle various interactive actions here
        });
    });

    // Description expand functionality
    const descriptionSection = document.getElementById('descriptionSection');
    const descriptionContent = document.getElementById('descriptionContent');
    const descriptionExpandBtn = document.getElementById('descriptionExpandBtn');
    
    if (descriptionSection && descriptionContent && descriptionExpandBtn) {
        // Check if content overflows
        function checkDescriptionOverflow() {
            const contentHeight = descriptionContent.scrollHeight;
            const sectionHeight = 150; // Max height from CSS
            
            if (contentHeight > sectionHeight) {
                descriptionSection.classList.add('needs-expand');
            } else {
                descriptionSection.classList.remove('needs-expand');
                descriptionSection.classList.remove('expanded');
            }
        }
        
        // Initial check
        checkDescriptionOverflow();
        
        // Handle expand/collapse
        descriptionExpandBtn.addEventListener('click', function() {
            descriptionSection.classList.toggle('expanded');
        });
        
        // Recheck on window resize
        window.addEventListener('resize', checkDescriptionOverflow);
    }

    // Initialize interactions when the tab is clicked
    let interactionsInitialized = false;
    
    function initializeInteractions() {
        if (interactionsInitialized) return;
        
        const timelineItems = document.querySelectorAll('.interactions-timeline .timeline-item');
        const detailsPlaceholder = document.querySelector('.details-placeholder');
        const detailsContent = document.getElementById('interactionDetails');
        
        if (!timelineItems.length || !detailsPlaceholder || !detailsContent) {
            console.log('Interactions elements not found');
            return;
        }
        
        console.log('Initializing interactions with', timelineItems.length, 'items');
        
        timelineItems.forEach(item => {
            item.addEventListener('click', function(e) {
                e.stopPropagation();
                
                // Remove selected class from all items
                timelineItems.forEach(i => i.classList.remove('selected'));
                
                // Add selected class to clicked item
                this.classList.add('selected');
                
                // Get interaction data
                const interactionId = this.dataset.interactionId;
                const interaction = window.timelineData ? window.timelineData[interactionId] : null;
                
                if (interaction) {
                    console.log('Updating details for:', interaction.title);
                    
                    // Hide placeholder, show content
                    detailsPlaceholder.style.display = 'none';
                    detailsContent.style.display = 'block';  // Force display
                    detailsContent.classList.add('active');
                    
                    // Build details HTML
                    let html = `
                        <div class="detail-section summary-section">
                            <div class="detail-label">Summary</div>
                            <div class="detail-value">
                                <p>${interaction.description}</p>
                                <p>This interaction involved discussions about ${interaction.title.toLowerCase()} and helped progress the relationship with key stakeholders. The conversation provided valuable insights into the customer's current needs and future plans.</p>
                            </div>
                        </div>
                    `;
                    
                    // Helper functions for participants
                    function getParticipantIcon(type) {
                        switch(type) {
                            case 'contact': return '👤';
                            case 'user': return '🏢';
                            case 'third-party': return '🤝';
                            default: return '👤';
                        }
                    }
                    
                    function formatParticipant(participant) {
                        const icon = getParticipantIcon(participant.type);
                        const typeClass = `participant-${participant.type || 'contact'}`;
                        const id = participant.name.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
                        
                        if (participant.type === 'contact') {
                            return `<span class="participant-item">
                                <span class="participant-icon">${icon}</span>
                                <a href="/contacts/${id}" class="participant-link ${typeClass}">
                                    ${participant.name}
                                </a>
                                <span class="participant-title">${participant.title}</span>
                            </span>`;
                        } else {
                            return `<span class="participant-item">
                                <span class="participant-icon">${icon}</span>
                                <span class="participant-link ${typeClass}">
                                    ${participant.name}
                                </span>
                                <span class="participant-title">${participant.title}</span>
                            </span>`;
                        }
                    }
                    
                    // Add participants if available
                    if (interaction.participants) {
                        html += `<div class="detail-section participants-section">`;
                        
                        if (interaction.type === 'email') {
                            if (interaction.participants.from) {
                                html += `
                                    <div class="participant-group">
                                        <div class="participant-label">From</div>
                                        <div class="participant-list">
                                            ${formatParticipant(interaction.participants.from)}
                                        </div>
                                    </div>
                                `;
                            }
                            if (interaction.participants.to && interaction.participants.to.length > 0) {
                                html += `
                                    <div class="participant-group">
                                        <div class="participant-label">To</div>
                                        <div class="participant-list">
                                            ${interaction.participants.to.map(p => formatParticipant(p)).join('')}
                                        </div>
                                    </div>
                                `;
                            }
                            if (interaction.participants.cc && interaction.participants.cc.length > 0) {
                                html += `
                                    <div class="participant-group">
                                        <div class="participant-label">CC</div>
                                        <div class="participant-list">
                                            ${interaction.participants.cc.map(p => formatParticipant(p)).join('')}
                                        </div>
                                    </div>
                                `;
                            }
                        } else if (interaction.type === 'meeting' || interaction.type === 'call') {
                            const allParticipants = [];
                            if (interaction.participants.organizer) {
                                allParticipants.push({...interaction.participants.organizer, role: 'Organizer'});
                            }
                            if (interaction.participants.attendees) {
                                interaction.participants.attendees.forEach(p => {
                                    allParticipants.push({...p, role: 'Attendee'});
                                });
                            }
                            
                            html += `
                                <div class="participant-group">
                                    <div class="participant-label">Participants</div>
                                    <div class="participant-list">
                                        ${allParticipants.map(p => formatParticipant(p)).join('')}
                                    </div>
                                </div>
                            `;
                        } else if (interaction.type === 'ticket') {
                            if (interaction.participants.reporter) {
                                html += `
                                    <div class="participant-group">
                                        <div class="participant-label">Reporter</div>
                                        <div class="participant-list">
                                            ${formatParticipant(interaction.participants.reporter)}
                                        </div>
                                    </div>
                                `;
                            }
                            if (interaction.participants.assignee) {
                                html += `
                                    <div class="participant-group">
                                        <div class="participant-label">Assignee</div>
                                        <div class="participant-list">
                                            ${formatParticipant(interaction.participants.assignee)}
                                        </div>
                                    </div>
                                `;
                            }
                            if (interaction.participants.watchers && interaction.participants.watchers.length > 0) {
                                html += `
                                    <div class="participant-group">
                                        <div class="participant-label">Watchers</div>
                                        <div class="participant-list">
                                            ${interaction.participants.watchers.map(p => formatParticipant(p)).join('')}
                                        </div>
                                    </div>
                                `;
                            }
                        }
                        
                        html += `</div>`;
                    }
                    
                    detailsContent.innerHTML = html;
                }
            });
        });
        
        
        interactionsInitialized = true;
        
        // Select first item by default
        if (timelineItems.length > 0) {
            timelineItems[0].click();
        }
    }
    
    // Initialize interactions when the interactions tab is clicked
    const interactionsTabBtn = document.querySelector('.account-tab[data-tab="interactions"]');
    if (interactionsTabBtn) {
        interactionsTabBtn.addEventListener('click', function() {
            // Wait a bit for the tab content to be visible
            setTimeout(initializeInteractions, 50);
        });
    }

    // Journey Tab Functionality
    initializeJourneyTab();
    initializeChat();
    initializeHome2();
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

// 3-State Expandable Component Functionality
function initExpandableSections() {
    const expandableSections = document.querySelectorAll('.expandable-section');
    console.log('Initializing expandable sections:', expandableSections.length);
    
    expandableSections.forEach(section => {
        const header = section.querySelector('.expandable-header');
        const controls = section.querySelector('.expandable-controls');
        const toggle = section.querySelector('.expandable-toggle');
        const toggleText = toggle ? toggle.querySelector('.toggle-text') : null;
        const toggleIcon = toggle ? toggle.querySelector('.toggle-icon') : null;
        const content = section.querySelector('.expandable-content-inner');
        const charCount = section.querySelector('.expandable-character-count');
        
        console.log('Section elements:', { header, controls, toggle, content });
        
        if (!content) {
            console.error('No content found for expandable section');
            return;
        }
        
        // Identify section type
        const isTimeline = section.classList.contains('timeline-expandable');
        
        // State management
        let currentState = 'preview'; // States: minimized, preview, expanded
        if (section.classList.contains('minimized')) currentState = 'minimized';
        if (section.classList.contains('expanded')) currentState = 'expanded';
        
        function updateState(newState) {
            console.log('Updating state from', currentState, 'to', newState);
            
            // Remove all state classes
            section.classList.remove('minimized', 'preview', 'expanded');
            
            // Add new state class
            section.classList.add(newState);
            currentState = newState;
            
            // Move controls to appropriate position
            if (controls) {
                if (newState === 'preview') {
                    // Controls stay outside header in preview
                    if (header.contains(controls)) {
                        header.removeChild(controls);
                        section.insertBefore(controls, section.querySelector('.expandable-content'));
                    }
                } else {
                    // Move controls into header for minimized/expanded
                    if (!header.contains(controls)) {
                        header.appendChild(controls);
                    }
                }
            }
            
            // Update toggle button text and icon
            if (toggleText && toggleIcon) {
                switch(newState) {
                    case 'minimized':
                        toggleText.textContent = 'Show';
                        toggleIcon.innerHTML = '<path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"/>';
                        break;
                    case 'preview':
                        toggleText.textContent = 'Show All';
                        toggleIcon.innerHTML = '<path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>';
                        break;
                    case 'expanded':
                        toggleText.textContent = 'Minimize';
                        toggleIcon.innerHTML = '<path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd"/>';
                        break;
                }
            }
        }
        
        // Handle click events
        function handleToggle(e) {
            e.preventDefault();
            e.stopPropagation();
            
            console.log('Toggle clicked, current state:', currentState);
            
            // Cycle through states
            switch(currentState) {
                case 'minimized':
                    updateState('preview');
                    break;
                case 'preview':
                    updateState('expanded');
                    break;
                case 'expanded':
                    updateState('minimized');
                    break;
            }
        }
        
        // Add event listeners
        if (toggle) {
            toggle.addEventListener('click', handleToggle);
            console.log('Added click listener to toggle button');
        }
        
        // For minimized state, clicking the header should also expand
        if (header) {
            header.addEventListener('click', function(e) {
                if (currentState === 'minimized' && !e.target.closest('.expandable-toggle')) {
                    updateState('preview');
                }
            });
        }
        
        // Initialize with current state
        updateState(currentState);
    });
}

// Home v2 page functionality
function initializeHome2() {
    const home2Page = document.querySelector('.home2-page');
    if (!home2Page) return;
    
    // Initialize date navigation
    const dateNavBtns = document.querySelectorAll('.date-nav-btn');
    dateNavBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const direction = this.textContent.includes('Yesterday') ? 'prev' : 'next';
            navigateDate(direction);
        });
    });
    
    // Initialize priority queue interactions
    const priorityItems = document.querySelectorAll('.priority-item');
    priorityItems.forEach(item => {
        item.addEventListener('click', function() {
            const taskTitle = this.querySelector('.priority-task-title').textContent;
            showNotification(`Opened task: ${taskTitle}`, 'info');
        });
    });
    
    // Initialize timeline event interactions
    const timelineEvents = document.querySelectorAll('.timeline-event');
    timelineEvents.forEach(event => {
        event.addEventListener('click', function() {
            const eventTitle = this.querySelector('.event-title').textContent;
            showNotification(`Opened event: ${eventTitle}`, 'info');
        });
    });
    
    // Animate progress bars
    setTimeout(() => {
        animateProgressBars();
    }, 500);
    
    // Add hover effects for AI suggestions
    const aiCard = document.querySelector('.ai-assistant-card');
    if (aiCard) {
        aiCard.addEventListener('click', function() {
            showNotification('AI Assistant expanded', 'info');
        });
    }
}

function navigateDate(direction) {
    const dateElement = document.querySelector('.home2-date');
    if (!dateElement) return;
    
    // Simple date navigation simulation
    const currentDate = new Date();
    if (direction === 'prev') {
        currentDate.setDate(currentDate.getDate() - 1);
        showNotification('Navigated to previous day', 'info');
    } else {
        currentDate.setDate(currentDate.getDate() + 1);
        showNotification('Navigated to next day', 'info');
    }
    
    // Update date display (simplified)
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    dateElement.textContent = `Today - ${currentDate.toLocaleDateString('en-US', options)}`;
}

function animateProgressBars() {
    // Animate productivity score
    const scoreBar = document.querySelector('.score-progress-bar');
    if (scoreBar) {
        const targetWidth = scoreBar.style.width;
        scoreBar.style.width = '0%';
        setTimeout(() => {
            scoreBar.style.width = targetWidth;
        }, 100);
    }
    
    // Animate event progress bars
    const progressBars = document.querySelectorAll('.progress-fill');
    progressBars.forEach((bar, index) => {
        const targetWidth = bar.style.width;
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.width = targetWidth;
        }, 200 + (index * 100));
    });
}

// Initialize new overview page features
document.addEventListener('DOMContentLoaded', function() {
    // Fixed section expand/collapse functionality
    document.querySelectorAll('.section-expand-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const section = this.dataset.section;
            const sectionDiv = document.getElementById(section + 'Section');
            if (sectionDiv) {
                sectionDiv.classList.toggle('expanded');
            }
        });
    });
});

// Journey Tab Functionality
function initializeJourneyTab() {
    // Handle milestone completion buttons
    const completeButtons = document.querySelectorAll('.btn-complete');
    completeButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const milestoneId = this.getAttribute('data-milestone-id');
            handleMilestoneComplete(milestoneId, this);
        });
    });

    // Handle goal achievement buttons
    const achieveButtons = document.querySelectorAll('.btn-achieve');
    achieveButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const goalId = this.getAttribute('data-goal-id');
            handleGoalAchieve(goalId, this);
        });
    });

    // Handle add milestone button
    const addMilestoneBtn = document.querySelector('.journey-timeline .btn-primary');
    if (addMilestoneBtn) {
        addMilestoneBtn.addEventListener('click', function(e) {
            e.preventDefault();
            handleAddMilestone();
        });
    }

    // Handle add goal button
    const addGoalBtn = document.querySelector('.business-goals .btn-primary');
    if (addGoalBtn) {
        addGoalBtn.addEventListener('click', function(e) {
            e.preventDefault();
            handleAddGoal();
        });
    }
}

function handleMilestoneComplete(milestoneId, button) {
    // Find the timeline item
    const timelineItem = button.closest('.timeline-item');
    if (!timelineItem) return;

    // Update visual state
    timelineItem.classList.remove('in_progress', 'pending');
    timelineItem.classList.add('completed');

    // Update marker
    const marker = timelineItem.querySelector('.timeline-marker');
    marker.innerHTML = `
        <svg viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
        </svg>
    `;

    // Update status badge
    const statusBadge = timelineItem.querySelector('.milestone-status');
    statusBadge.textContent = 'completed';
    statusBadge.className = 'milestone-status completed';

    // Update meta information
    const metaDiv = timelineItem.querySelector('.milestone-meta');
    const currentDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
    const dateSpan = metaDiv.querySelector('.milestone-date');
    if (dateSpan) {
        dateSpan.textContent = `Completed ${currentDate} • John Smith (CSM)`;
    }

    // Remove the button
    button.remove();

    // Update overall progress
    updateJourneyProgress();

    // Show success message
    showNotification('Milestone marked as complete!', 'success');
}

function handleGoalAchieve(goalId, button) {
    // Find the goal card
    const goalCard = button.closest('.goal-card');
    if (!goalCard) return;

    // Update visual state
    goalCard.classList.remove('in_progress', 'at_risk');
    goalCard.classList.add('achieved');

    // Update icon
    const icon = goalCard.querySelector('.goal-icon');
    icon.innerHTML = `
        <svg viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
        </svg>
    `;

    // Update status badge
    const statusBadge = goalCard.querySelector('.goal-status');
    statusBadge.textContent = 'achieved';
    statusBadge.className = 'goal-status achieved';

    // Update progress bar to 100%
    const progressFill = goalCard.querySelector('.goal-progress-fill');
    progressFill.style.width = '100%';

    // Update footer
    const footer = goalCard.querySelector('.goal-footer');
    const currentDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
    footer.innerHTML = `<span class="goal-date">Achieved ${currentDate} • John Smith (CSM)</span>`;

    // Show success message
    showNotification('Goal marked as achieved!', 'success');
}

function updateJourneyProgress() {
    // This would typically update the overall progress based on completed milestones
    // For now, we'll just log that progress was updated
    console.log('Journey progress updated');
}

function handleAddMilestone() {
    // Show modal or form for adding new milestone
    // For now, show a simple alert
    alert('Add Milestone functionality would open a modal form here.');
    console.log('Add milestone clicked');
}

function handleAddGoal() {
    // Show modal or form for adding new goal
    // For now, show a simple alert
    alert('Add Goal functionality would open a modal form here.');
    console.log('Add goal clicked');
}

function showNotification(message, type = 'info') {
    // Create a simple notification
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 12px 20px;
        background-color: ${type === 'success' ? '#10b981' : '#3b82f6'};
        color: white;
        border-radius: 6px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 1000;
        font-size: 14px;
        font-weight: 500;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
    `;

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 10);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// SQL Query generation helper function
function generateSQLResponse() {
    const sqlQueries = [
        `SELECT * FROM accounts 
WHERE arr > 10000 
  AND renewal_date BETWEEN CURRENT_DATE AND CURRENT_DATE + INTERVAL '90 days'
  AND health_score < 50
ORDER BY renewal_date ASC;`,
        
        `SELECT a.company_name, a.arr, c.name, c.email, i.interaction_date
FROM accounts a
JOIN contacts c ON a.id = c.account_id
JOIN interactions i ON c.id = i.contact_id
WHERE a.arr > 10000
  AND i.interaction_date >= CURRENT_DATE - INTERVAL '30 days'
ORDER BY i.interaction_date DESC;`,
        
        `SELECT 
    company_name,
    arr,
    health_score,
    mau_current,
    renewal_date,
    CASE 
        WHEN renewal_date <= CURRENT_DATE + INTERVAL '30 days' THEN 'Urgent'
        WHEN renewal_date <= CURRENT_DATE + INTERVAL '90 days' THEN 'Warning'
        ELSE 'Normal'
    END as renewal_risk
FROM accounts
WHERE arr > 5000
ORDER BY renewal_date ASC;`
    ];
    
    const randomQuery = sqlQueries[Math.floor(Math.random() * sqlQueries.length)];
    return `Here's a SQL query that might help:\n\n<div class="sql-query">${randomQuery}<button class="sql-copy-btn" onclick="copyToClipboard(this)">Copy</button></div>\n\nThis query will help you find accounts that match similar criteria. Would you like me to explain what this query does or generate a different one?`;
}

// Copy to clipboard helper function
function copyToClipboard(button) {
    const sqlQuery = button.parentElement;
    const text = sqlQuery.textContent.replace('Copy', '').trim();
    navigator.clipboard.writeText(text).then(() => {
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        setTimeout(() => {
            button.textContent = originalText;
        }, 2000);
    });
}

// Column management for accounts table
const COLUMN_INDICES = {
    company: 0,
    lastInteraction: 1,
    mau: 2,
    healthScore: 3,
    arr: 4,
    renewal: 5,
    domain: 6,
    tags: 7
};

const COLUMN_SETS = {
    'default': ['company', 'lastInteraction', 'mau', 'healthScore', 'arr', 'renewal', 'domain', 'tags'],
    'high-value': ['company', 'arr', 'renewal', 'healthScore', 'lastInteraction', 'tags'],
    'at-risk': ['company', 'healthScore', 'mau', 'lastInteraction', 'arr', 'renewal'],
    'renewals-90': ['company', 'renewal', 'arr', 'healthScore', 'lastInteraction', 'domain'],
    'education': ['company', 'tags', 'arr', 'healthScore', 'lastInteraction', 'domain'],
    'enterprise': ['company', 'arr', 'tags', 'healthScore', 'renewal', 'domain']
};

function setColumnVisibility(visibleColumns) {
    const table = document.querySelector('.accounts-table table');
    const headerRow = table.querySelector('thead tr');
    const bodyRows = table.querySelectorAll('tbody tr');
    
    // Reset all columns to visible first
    Object.values(COLUMN_INDICES).forEach(index => {
        const headerCell = headerRow.cells[index];
        if (headerCell) {
            headerCell.classList.remove('hidden');
            headerCell.style.display = '';
        }
        
        bodyRows.forEach(row => {
            const cell = row.cells[index];
            if (cell) {
                cell.classList.remove('hidden');
                cell.style.display = '';
            }
        });
    });
    
    // Hide columns not in the visible set
    Object.entries(COLUMN_INDICES).forEach(([columnName, index]) => {
        if (!visibleColumns.includes(columnName)) {
            const headerCell = headerRow.cells[index];
            if (headerCell) {
                headerCell.classList.add('hidden');
                headerCell.style.display = 'none';
            }
            
            bodyRows.forEach(row => {
                const cell = row.cells[index];
                if (cell) {
                    cell.classList.add('hidden');
                    cell.style.display = 'none';
                }
            });
        }
    });
}

function getColumnSetDescription(filterType) {
    const descriptions = {
        'high-value': 'Showing columns optimized for high-value account analysis: Company, ARR, Renewal, Health Score, Last Interaction, Tags',
        'at-risk': 'Showing columns optimized for at-risk account monitoring: Company, Health Score, MAU, Last Interaction, ARR, Renewal',
        'renewals-90': 'Showing columns optimized for renewal management: Company, Renewal Date, ARR, Health Score, Last Interaction, Domain',
        'education': 'Showing columns optimized for education sector: Company, Tags, ARR, Health Score, Last Interaction, Domain',
        'enterprise': 'Showing columns optimized for enterprise accounts: Company, ARR, Tags, Health Score, Renewal, Domain',
        'default': 'Showing all columns: Company, Last Interaction, MAU, Health Score, ARR, Renewal, Domain, Tags'
    };
    return descriptions[filterType] || descriptions['default'];
}

// Accounts page filtering functions
function processAccountsRequest(message) {
    const messageLower = message.toLowerCase();
    
    if (messageLower.includes('10k') || messageLower.includes('$10') || (messageLower.includes('over') && messageLower.includes('arr'))) {
        applyAccountsFilter('high-value');
        return "I've filtered the accounts to show only companies with ARR over $10K and optimized the view for high-value analysis. " + getColumnSetDescription('high-value');
    } else if (messageLower.includes('at risk') || messageLower.includes('at-risk') || messageLower.includes('health')) {
        applyAccountsFilter('at-risk');
        return "I've filtered to show at-risk accounts with low health scores and optimized the view for risk monitoring. " + getColumnSetDescription('at-risk');
    } else if (messageLower.includes('renewal') || messageLower.includes('90')) {
        applyAccountsFilter('renewals-90');
        return "I've filtered to show accounts with renewals coming up in the next 90 days and optimized the view for renewal management. " + getColumnSetDescription('renewals-90');
    } else if (messageLower.includes('education') || messageLower.includes('university')) {
        applyAccountsFilter('education');
        return "I've filtered to show education sector accounts and optimized the view for education analysis. " + getColumnSetDescription('education');
    } else if (messageLower.includes('enterprise') || messageLower.includes('large')) {
        applyAccountsFilter('enterprise');
        return "I've filtered to show enterprise accounts and optimized the view for enterprise analysis. " + getColumnSetDescription('enterprise');
    } else {
        return "I can help you filter the accounts and adjust the column view. Try asking for 'companies over $10K ARR', 'at-risk accounts', 'renewals in 90 days', or 'education sector'.";
    }
}

function applyAccountsFilter(filterType) {
    const table = document.querySelector('.accounts-table tbody');
    const rows = table.querySelectorAll('tr');
    
    // Remove existing filter summary
    const existingFilter = document.querySelector('.filter-summary');
    if (existingFilter) {
        existingFilter.remove();
    }
    
    // Apply column visibility changes
    const visibleColumns = COLUMN_SETS[filterType] || COLUMN_SETS['default'];
    setColumnVisibility(visibleColumns);
    
    let visibleCount = 0;
    let filterDescription = '';
    
    rows.forEach(row => {
        let shouldShow = false;
        
        // Get account data from the row
        const arrText = row.cells[4].textContent.trim();
        const healthText = row.cells[3].querySelector('.health-value')?.textContent || '0';
        const renewalText = row.cells[5].textContent.trim();
        const tagsText = row.cells[7].textContent.toLowerCase();
        
        const arr = arrText === '-' ? 0 : parseInt(arrText.replace(/[$,]/g, ''));
        const health = parseInt(healthText);
        
        switch(filterType) {
            case 'high-value':
                shouldShow = arr >= 10000;
                filterDescription = 'Companies with ARR ≥ $10K';
                break;
            case 'at-risk':
                shouldShow = health < 50;
                filterDescription = 'At-risk accounts (Health Score < 50)';
                break;
            case 'renewals-90':
                if (renewalText !== '-') {
                    const renewalDate = new Date(renewalText);
                    const today = new Date();
                    const daysToRenewal = Math.ceil((renewalDate - today) / (1000 * 60 * 60 * 24));
                    shouldShow = daysToRenewal <= 90 && daysToRenewal > 0;
                }
                filterDescription = 'Renewals in next 90 days';
                break;
            case 'education':
                shouldShow = tagsText.includes('education');
                filterDescription = 'Education sector accounts';
                break;
            case 'enterprise':
                shouldShow = arr >= 100000 || tagsText.includes('enterprise');
                filterDescription = 'Enterprise accounts';
                break;
        }
        
        if (shouldShow) {
            row.classList.remove('hidden');
            visibleCount++;
        } else {
            row.classList.add('hidden');
        }
    });
    
    // Add filter summary
    const filterSummary = document.createElement('div');
    filterSummary.className = 'filter-summary';
    const columnInfo = getColumnSetDescription(filterType);
    filterSummary.innerHTML = `
        <div>
            <span><strong>Filtered:</strong> ${filterDescription} (${visibleCount} results)</span>
            <br>
            <span style="font-size: 12px; color: #6b7280;">${columnInfo}</span>
        </div>
        <button class="filter-clear-btn" onclick="clearAccountsFilter()">Clear Filter & Reset View</button>
    `;
    
    const accountsTable = document.querySelector('.accounts-table');
    accountsTable.parentNode.insertBefore(filterSummary, accountsTable);
    
    // Update pagination info
    const paginationInfo = document.querySelector('.pagination-info span');
    if (paginationInfo) {
        paginationInfo.textContent = `${visibleCount} count (filtered)`;
    }
}

function clearAccountsFilter() {
    const table = document.querySelector('.accounts-table tbody');
    const rows = table.querySelectorAll('tr');
    
    rows.forEach(row => {
        row.classList.remove('hidden');
    });
    
    // Reset column visibility to default
    setColumnVisibility(COLUMN_SETS['default']);
    
    // Remove filter summary
    const filterSummary = document.querySelector('.filter-summary');
    if (filterSummary) {
        filterSummary.remove();
    }
    
    // Reset pagination info
    const paginationInfo = document.querySelector('.pagination-info span');
    if (paginationInfo) {
        const totalRows = rows.length;
        paginationInfo.textContent = `${totalRows} count`;
    }
}

// Chat functionality for home page, account details, and accounts page
function initializeChat() {
    const chatToggleBtn = document.getElementById('chatToggleBtn');
    const chatMinimizeBtn = document.getElementById('chatMinimizeBtn');
    const chatSidebar = document.getElementById('chatSidebar');
    const chatInput = document.getElementById('chatInput');
    const chatSendBtn = document.getElementById('chatSendBtn');
    const chatMessages = document.getElementById('chatMessages');
    const chatResizeHandle = document.getElementById('chatResizeHandle');
    const homePage = document.querySelector('.home-page');
    const accountDetailsPage = document.querySelector('.account-details-page');
    const accountsPage = document.querySelector('.accounts-page');
    
    // Check if we're on a page that supports chat
    const chatContainer = homePage || accountDetailsPage || accountsPage;
    if (!chatToggleBtn || !chatSidebar || !chatContainer) {
        return; // Not on a supported page
    }
    
    // Determine which page type we're on
    const isAccountDetailsPage = !!accountDetailsPage;
    const isAccountsPage = !!accountsPage;
    const pageContainer = chatContainer;
    
    // Load chat state from localStorage - use page-specific key for different pages
    let storageKey = 'chatExpanded';
    if (isAccountDetailsPage) {
        storageKey = `chatExpanded_${window.location.pathname}`;
    } else if (isAccountsPage) {
        storageKey = 'chatExpanded_accounts';
    }
    const chatState = localStorage.getItem(storageKey);
    const isExpanded = chatState === 'true';
    
    // Set initial state
    if (isExpanded) {
        pageContainer.classList.add('chat-expanded');
        pageContainer.classList.remove('chat-collapsed');
        chatSidebar.classList.remove('collapsed');
    } else {
        pageContainer.classList.add('chat-collapsed');
        pageContainer.classList.remove('chat-expanded');
        chatSidebar.classList.add('collapsed');
    }
    
    // Toggle chat function
    function toggleChat() {
        const isCurrentlyExpanded = pageContainer.classList.contains('chat-expanded');
        
        if (isCurrentlyExpanded) {
            // Collapse chat
            pageContainer.classList.remove('chat-expanded');
            pageContainer.classList.add('chat-collapsed');
            chatSidebar.classList.add('collapsed');
            localStorage.setItem(storageKey, 'false');
        } else {
            // Expand chat
            pageContainer.classList.remove('chat-collapsed');
            pageContainer.classList.add('chat-expanded');
            chatSidebar.classList.remove('collapsed');
            localStorage.setItem(storageKey, 'true');
            
            // Scroll to bottom of messages
            setTimeout(() => {
                if (chatMessages) {
                    chatMessages.scrollTop = chatMessages.scrollHeight;
                }
            }, 300);
        }
    }
    
    // Event listeners
    if (chatToggleBtn) {
        chatToggleBtn.addEventListener('click', toggleChat);
    }
    
    if (chatMinimizeBtn) {
        chatMinimizeBtn.addEventListener('click', toggleChat);
    }
    
    // Chat input functionality
    if (chatInput && chatSendBtn && chatMessages) {
        // Auto-resize textarea
        chatInput.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = Math.min(this.scrollHeight, 100) + 'px';
        });
        
        // Send message function
        function sendMessage() {
            const message = chatInput.value.trim();
            if (!message) return;
            
            // Add user message
            addMessage(message, 'user');
            chatInput.value = '';
            chatInput.style.height = 'auto';
            
            // Simulate AI response
            setTimeout(() => {
                addTypingIndicator();
                setTimeout(() => {
                    removeTypingIndicator();
                    
                    let response = '';
                    const messageLower = message.toLowerCase();
                    
                    if (isAccountDetailsPage && (messageLower.includes('sql') || messageLower.includes('query') || messageLower.includes('show me') || messageLower.includes('find'))) {
                        // Generate SQL response for account page
                        response = generateSQLResponse();
                    } else if (isAccountsPage && (messageLower.includes('show') || messageLower.includes('filter') || messageLower.includes('find') || messageLower.includes('$') || messageLower.includes('arr'))) {
                        // Process accounts page filtering requests
                        response = processAccountsRequest(message);
                    } else if (isAccountDetailsPage) {
                        // Account-specific responses
                        const accountResponses = [
                            "I can help you analyze this account's data. Would you like me to generate a SQL query?",
                            "Based on this account's metrics, I can provide insights or generate queries to find similar accounts.",
                            "I can help you understand this account's health score, renewal timeline, or contact information.",
                            "Would you like me to generate a SQL query to find accounts with similar characteristics?",
                            "I can help you analyze this account's usage patterns and engagement metrics."
                        ];
                        response = accountResponses[Math.floor(Math.random() * accountResponses.length)];
                    } else if (isAccountsPage) {
                        // Accounts page responses
                        const accountsResponses = [
                            "I can help you filter and analyze the accounts table. Try asking for specific criteria like 'show high ARR accounts' or 'filter by education sector'.",
                            "I can change the view to show different columns or filter accounts based on ARR, health scores, or renewal dates.",
                            "Would you like me to filter the accounts or modify which columns are displayed?",
                            "I can help you find specific types of accounts or adjust the table view. What would you like to see?",
                            "Ask me to filter by criteria like ARR ranges, health scores, renewal timelines, or industry sectors."
                        ];
                        response = accountsResponses[Math.floor(Math.random() * accountsResponses.length)];
                    } else {
                        // Home page responses
                        const homeResponses = [
                            "I'm here to help! Let me look into that for you.",
                            "Based on your schedule, I'd recommend focusing on the Microsoft QBR preparation first.",
                            "I can help you with that. Would you like me to pull up the relevant account information?",
                            "That's a great question! Let me check your upcoming tasks and priorities.",
                            "I've noted that for you. I'll remind you before your next meeting."
                        ];
                        response = homeResponses[Math.floor(Math.random() * homeResponses.length)];
                    }
                    
                    addMessage(response, 'ai');
                }, 1500);
            }, 500);
        }
        
        // Send on Enter (but allow Shift+Enter for new lines)
        chatInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
            }
        });
        
        // Send button click
        chatSendBtn.addEventListener('click', sendMessage);
        
        // Quick action buttons
        const quickActionBtns = document.querySelectorAll('.quick-action-btn');
        quickActionBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const action = this.dataset.action;
                
                // Different action texts based on page type
                const homeActionTexts = {
                    'prepare-meeting': 'Help me prepare for my next meeting',
                    'show-insights': 'Show me insights about my accounts',
                    'optimize-schedule': 'How can I optimize my schedule today?'
                };
                
                const accountActionTexts = {
                    'generate-sql': 'Generate SQL query for this account',
                    'analyze-account': 'Analyze this account data',
                    'show-contacts': 'Show me all contacts for this account'
                };
                
                const accountsActionTexts = {
                    'high-value': 'Show companies over $10K ARR',
                    'at-risk': 'Show at-risk accounts',
                    'renewals-90': 'Show accounts with renewals in 90 days'
                };
                
                let actionTexts;
                if (isAccountDetailsPage) {
                    actionTexts = accountActionTexts;
                } else if (isAccountsPage) {
                    actionTexts = accountsActionTexts;
                } else {
                    actionTexts = homeActionTexts;
                }
                
                if (actionTexts[action]) {
                    addMessage(actionTexts[action], 'user');
                    
                    // Simulate AI response based on action and page type
                    setTimeout(() => {
                        addTypingIndicator();
                        setTimeout(() => {
                            removeTypingIndicator();
                            let response = '';
                            
                            if (isAccountDetailsPage) {
                                // Account-specific responses
                                switch(action) {
                                    case 'generate-sql':
                                        response = generateSQLResponse();
                                        break;
                                    case 'analyze-account':
                                        response = 'Based on this account\'s data, I can see they have a renewal coming up in 90 days with $26K ARR. Their health score is 42/100 and MAU is trending downward. Would you like me to generate a SQL query to find similar at-risk accounts?';
                                        break;
                                    case 'show-contacts':
                                        response = 'Here are the key contacts for this account. Would you like me to generate a SQL query to show all contacts with their interaction history?';
                                        break;
                                }
                            } else if (isAccountsPage) {
                                // Accounts page responses with filtering
                                switch(action) {
                                    case 'high-value':
                                        applyAccountsFilter('high-value');
                                        response = 'I\'ve filtered the accounts to show only companies with ARR over $10K and optimized the view for high-value analysis. ' + getColumnSetDescription('high-value');
                                        break;
                                    case 'at-risk':
                                        applyAccountsFilter('at-risk');
                                        response = 'I\'ve filtered to show at-risk accounts with health scores below 50 and optimized the view for risk monitoring. ' + getColumnSetDescription('at-risk');
                                        break;
                                    case 'renewals-90':
                                        applyAccountsFilter('renewals-90');
                                        response = 'I\'ve filtered to show accounts with renewals coming up in the next 90 days and optimized the view for renewal management. ' + getColumnSetDescription('renewals-90');
                                        break;
                                }
                            } else {
                                // Home page responses
                                switch(action) {
                                    case 'prepare-meeting':
                                        response = 'For your Microsoft QBR at 10 AM, I suggest reviewing their Q2 metrics, recent milestones, and upcoming renewal discussion. Would you like me to pull up their account details?';
                                        break;
                                    case 'show-insights':
                                        response = 'Here are key insights: Yahoo has a critical escalation ($50K at risk), Microsoft is in expansion phase, and Flowla needs API integration follow-up. Which account would you like to focus on?';
                                        break;
                                    case 'optimize-schedule':
                                        response = 'I recommend using your 9 AM available time for the Yahoo payment issue (high priority), and the 11 AM slot for Flowla API follow-up. This leaves afternoon prep time for tomorrow\'s meetings.';
                                        break;
                                }
                            }
                            
                            addMessage(response, 'ai');
                        }, 1500);
                    }, 500);
                }
            });
        });
    }
    
    // Add message to chat
    function addMessage(text, type) {
        if (!chatMessages) return;
        
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}`;
        
        const now = new Date();
        const timestamp = now.toLocaleTimeString('en-US', { 
            hour: 'numeric', 
            minute: '2-digit' 
        });
        
        if (type === 'ai') {
            messageDiv.innerHTML = `
                <div class="message-avatar">🤖</div>
                <div class="message-content">
                    <div class="message-text">${text}</div>
                    <div class="message-timestamp">${timestamp}</div>
                </div>
            `;
        } else {
            messageDiv.innerHTML = `
                <div class="message-content">
                    <div class="message-text">${text}</div>
                    <div class="message-timestamp">${timestamp}</div>
                </div>
            `;
        }
        
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        // Remove chat badge when user sends message
        if (type === 'user') {
            const chatBadge = document.querySelector('.chat-badge');
            if (chatBadge) {
                chatBadge.style.display = 'none';
            }
        }
    }
    
    // Add typing indicator
    function addTypingIndicator() {
        if (!chatMessages) return;
        
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message ai typing-indicator';
        typingDiv.innerHTML = `
            <div class="message-avatar">🤖</div>
            <div class="message-content">
                <div class="message-text">
                    <span class="typing-dots">
                        <span>•</span>
                        <span>•</span>
                        <span>•</span>
                    </span>
                </div>
            </div>
        `;
        
        // Add typing animation CSS
        const style = document.createElement('style');
        style.textContent = `
            .typing-dots span {
                animation: typing 1.4s infinite;
                opacity: 0.4;
            }
            .typing-dots span:nth-child(2) { animation-delay: 0.2s; }
            .typing-dots span:nth-child(3) { animation-delay: 0.4s; }
            @keyframes typing {
                0%, 60%, 100% { opacity: 0.4; }
                30% { opacity: 1; }
            }
        `;
        document.head.appendChild(style);
        
        chatMessages.appendChild(typingDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    // Remove typing indicator
    function removeTypingIndicator() {
        const typingIndicator = chatMessages?.querySelector('.typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }
    
    // ESC key to close chat
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && homePage.classList.contains('chat-expanded')) {
            toggleChat();
        }
    });
    
    // Chat resize functionality
    if (chatResizeHandle) {
        let isResizing = false;
        let startX = 0;
        let startWidth = 0;
        
        // Load saved width
        const savedWidth = localStorage.getItem('chatWidth');
        if (savedWidth) {
            chatSidebar.style.width = savedWidth + 'px';
        }
        
        chatResizeHandle.addEventListener('mousedown', function(e) {
            isResizing = true;
            startX = e.clientX;
            startWidth = parseInt(document.defaultView.getComputedStyle(chatSidebar).width, 10);
            document.body.style.cursor = 'col-resize';
            document.body.style.userSelect = 'none';
            e.preventDefault();
        });
        
        document.addEventListener('mousemove', function(e) {
            if (!isResizing) return;
            
            const width = startWidth - (e.clientX - startX);
            const minWidth = 280;
            const maxWidth = 500;
            const constrainedWidth = Math.min(Math.max(width, minWidth), maxWidth);
            
            chatSidebar.style.width = constrainedWidth + 'px';
        });
        
        document.addEventListener('mouseup', function() {
            if (isResizing) {
                isResizing = false;
                document.body.style.cursor = '';
                document.body.style.userSelect = '';
                
                // Save width to localStorage
                const currentWidth = parseInt(chatSidebar.style.width, 10);
                localStorage.setItem('chatWidth', currentWidth);
            }
        });
    }
    
    // Initialize with messages scrolled to bottom
    if (isExpanded && chatMessages) {
        setTimeout(() => {
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 100);
    }
}

// Initialize drag and drop functionality for home2 page
function initializeDragAndDrop() {
    const priorityItems = document.querySelectorAll('.priority-item[draggable="true"]');
    const freeTimeBlocks = document.querySelectorAll('.timeline-event.free');
    const priorityQueueContent = document.getElementById('priorityQueueContent');
    
    let draggedTask = null;
    
    // Add drag event listeners to priority items
    priorityItems.forEach(item => {
        item.addEventListener('dragstart', function(e) {
            draggedTask = this;
            this.classList.add('dragging');
            if (priorityQueueContent) {
                priorityQueueContent.classList.add('drag-active');
            }
            
            // Store task data for transfer
            e.dataTransfer.setData('text/plain', JSON.stringify({
                id: this.dataset.taskId,
                title: this.dataset.taskTitle,
                due: this.dataset.taskDue,
                priority: this.dataset.taskPriority
            }));
            
            // Highlight all free time blocks
            freeTimeBlocks.forEach(block => {
                block.parentElement.classList.add('has-drag-target');
            });
        });
        
        item.addEventListener('dragend', function(e) {
            this.classList.remove('dragging');
            if (priorityQueueContent) {
                priorityQueueContent.classList.remove('drag-active');
            }
            
            // Remove highlighting from all blocks
            freeTimeBlocks.forEach(block => {
                block.classList.remove('drag-over');
                block.parentElement.classList.remove('has-drag-target');
            });
            
            draggedTask = null;
        });
    });
    
    // Add drop event listeners to free time blocks
    freeTimeBlocks.forEach(block => {
        block.addEventListener('dragover', function(e) {
            e.preventDefault();
            this.classList.add('drag-over');
        });
        
        block.addEventListener('dragleave', function(e) {
            this.classList.remove('drag-over');
        });
        
        block.addEventListener('drop', function(e) {
            e.preventDefault();
            this.classList.remove('drag-over');
            
            try {
                const taskData = JSON.parse(e.dataTransfer.getData('text/plain'));
                scheduleTaskInFreeTime(this, taskData);
            } catch (error) {
                console.error('Error parsing task data:', error);
            }
        });
    });
}

function scheduleTaskInFreeTime(freeTimeBlock, taskData) {
    // Get the time from the hour label
    const hourLabel = freeTimeBlock.closest('.timeline-hour').querySelector('.hour-label');
    const time = hourLabel ? hourLabel.textContent : 'Unknown time';
    
    // Convert free time block to a scheduled task
    freeTimeBlock.classList.remove('free');
    freeTimeBlock.classList.add('task');
    
    // Update the content
    const titleElement = freeTimeBlock.querySelector('.event-title');
    const metaElement = freeTimeBlock.querySelector('.event-meta');
    const iconElement = freeTimeBlock.querySelector('.event-icon');
    const freeActions = freeTimeBlock.querySelector('.free-actions');
    
    if (titleElement) titleElement.textContent = taskData.title;
    if (metaElement) metaElement.textContent = `${time} • Scheduled from Priority Queue (${taskData.priority} Priority)`;
    if (iconElement) iconElement.textContent = '📋';
    if (freeActions) freeActions.remove();
    
    // Remove the task from priority queue
    if (draggedTask) {
        draggedTask.style.transition = 'all 0.3s ease';
        draggedTask.style.opacity = '0';
        draggedTask.style.transform = 'scale(0.8)';
        setTimeout(() => {
            if (draggedTask.parentElement) {
                draggedTask.remove();
            }
        }, 300);
    }
    
    // Show success notification
    showNotification(`📅 "${taskData.title}" scheduled at ${time}`, 'success');
    
    // Add completion action for the scheduled task
    const completionActions = document.createElement('div');
    completionActions.className = 'task-actions';
    completionActions.innerHTML = `
        <button class="task-action-btn" onclick="completeScheduledTask('${time}', '${taskData.title}')">✓ Complete</button>
        <button class="task-action-btn" onclick="rescheduleTask('${time}', '${taskData.title}')">↻ Reschedule</button>
    `;
    completionActions.style.opacity = '0';
    completionActions.style.transition = 'opacity 0.2s ease';
    freeTimeBlock.appendChild(completionActions);
    
    // Show actions on hover
    freeTimeBlock.addEventListener('mouseenter', () => {
        completionActions.style.opacity = '1';
    });
    
    freeTimeBlock.addEventListener('mouseleave', () => {
        completionActions.style.opacity = '0';
    });
}

// AI Suggestion Interaction Functions
function acceptAISuggestion(time) {
    const event = findEventByTime(time);
    if (event) {
        showNotification(`✓ AI suggestion accepted for ${time}`, 'success');
        // Remove AI-suggested styling and actions
        const eventElement = findEventElement(time);
        if (eventElement) {
            eventElement.classList.remove('ai-suggested');
            const aiActions = eventElement.querySelector('.ai-actions');
            if (aiActions) aiActions.remove();
            const aiBadge = eventElement.querySelector('.ai-badge');
            if (aiBadge) aiBadge.remove();
        }
    }
}

function modifyAISuggestion(time) {
    const event = findEventByTime(time);
    if (event) {
        const newTime = prompt(`Modify time for "${event.title}"`, time);
        if (newTime && newTime !== time) {
            showNotification(`✎ AI suggestion modified: ${time} → ${newTime}`, 'info');
            // In a real app, this would update the backend
        }
    }
}

function declineAISuggestion(time) {
    const event = findEventByTime(time);
    if (event) {
        showNotification(`✗ AI suggestion declined - time is now available`, 'info');
        
        // Convert AI suggestion to free time instead of removing it
        const eventElement = findEventElement(time);
        if (eventElement) {
            // Remove AI-specific classes and styling
            eventElement.classList.remove('ai-suggested');
            eventElement.classList.add('free');
            
            // Update content to show as free time
            const titleElement = eventElement.querySelector('.event-title');
            const metaElement = eventElement.querySelector('.event-meta');
            const iconElement = eventElement.querySelector('.event-icon');
            const aiBadge = eventElement.querySelector('.ai-badge');
            const aiActions = eventElement.querySelector('.ai-actions');
            
            if (titleElement) titleElement.textContent = 'Free Time';
            if (metaElement) {
                // Extract the time duration from the original subtitle
                const originalSubtitle = metaElement.textContent;
                const timeMatch = originalSubtitle.match(/(\d+:\d+\s*[AP]M\s*-\s*\d+:\d+\s*[AP]M)/);
                const timeDuration = timeMatch ? timeMatch[1] : time + ' - Available';
                metaElement.textContent = `${timeDuration} • Available for booking`;
            }
            if (iconElement) iconElement.textContent = '⏰';
            if (aiBadge) aiBadge.remove();
            if (aiActions) aiActions.remove();
            
            // Add free time actions
            const actionsContainer = document.createElement('div');
            actionsContainer.className = 'free-actions';
            actionsContainer.innerHTML = `<button class="free-action-btn" onclick="bookFreeTime('${time}')">📅 Book this time</button>`;
            eventElement.appendChild(actionsContainer);
            
            // Add a subtle transition effect to show the change
            eventElement.style.transition = 'all 0.5s ease';
            eventElement.style.transform = 'scale(0.98)';
            setTimeout(() => {
                eventElement.style.transform = 'scale(1)';
            }, 100);
        }
    }
}

function findEventByTime(time) {
    // This would normally query the data or make an API call
    // For demo purposes, we'll return a mock event
    return {
        time: time,
        title: time === "10:00 AM" ? "Focus Block: Client Presentation" : "Code Review Session"
    };
}

function findEventElement(time) {
    const timeLabels = document.querySelectorAll('.hour-label');
    for (let label of timeLabels) {
        if (label.textContent === time) {
            return label.parentElement.querySelector('.timeline-event');
        }
    }
    return null;
}

// Free Time Booking Function
function bookFreeTime(time) {
    const eventTitle = prompt(`Book time at ${time}`, "New Meeting");
    if (eventTitle && eventTitle.trim()) {
        showNotification(`📅 Time booked at ${time}: ${eventTitle}`, 'success');
        
        // Update the event element to show it's booked
        const eventElement = findEventElement(time);
        if (eventElement) {
            // Change from free time to a meeting
            eventElement.classList.remove('free');
            eventElement.classList.add('meeting');
            
            // Update the content
            const titleElement = eventElement.querySelector('.event-title');
            const metaElement = eventElement.querySelector('.event-meta');
            const iconElement = eventElement.querySelector('.event-icon');
            
            if (titleElement) titleElement.textContent = eventTitle;
            if (metaElement) metaElement.textContent = `${time} • Personal Meeting`;
            if (iconElement) iconElement.textContent = '📞';
            
            // Remove free actions
            const freeActions = eventElement.querySelector('.free-actions');
            if (freeActions) freeActions.remove();
        }
    }
}

// Task completion and rescheduling functions
function completeScheduledTask(time, taskTitle) {
    showNotification(`✅ "${taskTitle}" completed at ${time}`, 'success');
    
    const eventElement = findEventElement(time);
    if (eventElement) {
        // Convert back to free time
        eventElement.classList.remove('task');
        eventElement.classList.add('free');
        
        // Update content
        const titleElement = eventElement.querySelector('.event-title');
        const metaElement = eventElement.querySelector('.event-meta');
        const iconElement = eventElement.querySelector('.event-icon');
        const taskActions = eventElement.querySelector('.task-actions');
        
        if (titleElement) titleElement.textContent = 'Free Time';
        if (metaElement) metaElement.textContent = `${time} • Available for booking`;
        if (iconElement) iconElement.textContent = '⏰';
        if (taskActions) taskActions.remove();
        
        // Add free time actions back
        const actionsContainer = document.createElement('div');
        actionsContainer.className = 'free-actions';
        actionsContainer.innerHTML = `<button class="free-action-btn" onclick="bookFreeTime('${time}')">📅 Book this time</button>`;
        eventElement.appendChild(actionsContainer);
        
        // Add completion animation
        eventElement.style.transition = 'all 0.3s ease';
        eventElement.style.transform = 'scale(1.05)';
        setTimeout(() => {
            eventElement.style.transform = 'scale(1)';
        }, 200);
    }
}

function rescheduleTask(time, taskTitle) {
    showNotification(`📅 "${taskTitle}" moved back to Priority Queue`, 'info');
    
    const eventElement = findEventElement(time);
    if (eventElement) {
        // Convert back to free time
        eventElement.classList.remove('task');
        eventElement.classList.add('free');
        
        // Update content
        const titleElement = eventElement.querySelector('.event-title');
        const metaElement = eventElement.querySelector('.event-meta');
        const iconElement = eventElement.querySelector('.event-icon');
        const taskActions = eventElement.querySelector('.task-actions');
        
        if (titleElement) titleElement.textContent = 'Free Time';
        if (metaElement) metaElement.textContent = `${time} • Available for booking`;
        if (iconElement) iconElement.textContent = '⏰';
        if (taskActions) taskActions.remove();
        
        // Add free time actions back
        const actionsContainer = document.createElement('div');
        actionsContainer.className = 'free-actions';
        actionsContainer.innerHTML = `<button class="free-action-btn" onclick="bookFreeTime('${time}')">📅 Book this time</button>`;
        eventElement.appendChild(actionsContainer);
        
        // Add task back to priority queue
        addTaskToPriorityQueue(taskTitle, 'Medium', 'Rescheduled');
    }
}

function addTaskToPriorityQueue(title, priority, due) {
    const priorityQueueContent = document.getElementById('priorityQueueContent');
    if (priorityQueueContent) {
        const taskElement = document.createElement('div');
        taskElement.className = `priority-item ${priority.toLowerCase()}`;
        taskElement.draggable = true;
        taskElement.dataset.taskId = Date.now();
        taskElement.dataset.taskTitle = title;
        taskElement.dataset.taskDue = due;
        taskElement.dataset.taskPriority = priority;
        
        taskElement.innerHTML = `
            <div class="priority-task-title">${title}</div>
            <div class="priority-task-meta">
                <span class="priority-due">Due: ${due}</span>
                <span class="priority-level">${priority}</span>
            </div>
        `;
        
        taskElement.style.opacity = '0';
        taskElement.style.transform = 'translateY(-10px)';
        priorityQueueContent.appendChild(taskElement);
        
        // Animate in
        setTimeout(() => {
            taskElement.style.transition = 'all 0.3s ease';
            taskElement.style.opacity = '1';
            taskElement.style.transform = 'translateY(0)';
        }, 100);
        
        // Re-initialize drag and drop for the new element
        addDragListeners(taskElement);
    }
}

function addDragListeners(item) {
    const freeTimeBlocks = document.querySelectorAll('.timeline-event.free');
    const priorityQueueContent = document.getElementById('priorityQueueContent');
    
    item.addEventListener('dragstart', function(e) {
        draggedTask = this;
        this.classList.add('dragging');
        if (priorityQueueContent) {
            priorityQueueContent.classList.add('drag-active');
        }
        
        e.dataTransfer.setData('text/plain', JSON.stringify({
            id: this.dataset.taskId,
            title: this.dataset.taskTitle,
            due: this.dataset.taskDue,
            priority: this.dataset.taskPriority
        }));
        
        freeTimeBlocks.forEach(block => {
            block.parentElement.classList.add('has-drag-target');
        });
    });
    
    item.addEventListener('dragend', function(e) {
        this.classList.remove('dragging');
        if (priorityQueueContent) {
            priorityQueueContent.classList.remove('drag-active');
        }
        
        freeTimeBlocks.forEach(block => {
            block.classList.remove('drag-over');
            block.parentElement.classList.remove('has-drag-target');
        });
        
        draggedTask = null;
    });
}