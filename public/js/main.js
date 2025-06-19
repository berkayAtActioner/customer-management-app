// Main JavaScript file for Customer Management App

document.addEventListener('DOMContentLoaded', function() {
    // Column resize functionality
    initColumnResize();
    
    // Initialize expandable sections
    initExpandableSections();
    
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
            const x = e.clientX - rect.left;
            const width = rect.width;
            
            // Calculate which data point we're hovering over
            const dataPoints = container.classList.contains('mau-sparkline') ? 12 : 12; // Both have 12 months
            const pointIndex = Math.floor((x / width) * dataPoints);
            
            // Position tooltip
            tooltip.style.left = e.clientX - rect.left + 'px';
            tooltip.style.top = '-30px';
            
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