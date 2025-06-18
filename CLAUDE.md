# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm start` - Start the application on port 3000
- `npm run dev` - Same as start (runs the application)
- `npm install` - Install dependencies (express and ejs)

### Testing
- No test framework is currently configured. The test script exits with an error.

## Architecture Overview

### Application Type
This is a customer management web application built with:
- **Backend**: Express.js (v5.1.0) with server-side rendering
- **Template Engine**: EJS (v3.1.10)
- **Frontend**: Vanilla JavaScript, HTML, and CSS (no framework)
- **Database**: None (currently uses mock data in templates)

### Project Structure
```
/
├── app.js                 # Main Express server file
├── public/               
│   ├── css/styles.css    # Single CSS file (1341 lines)
│   └── js/main.js        # Single JS file for all client-side logic
└── views/
    ├── pages/            # Page templates (accounts, contacts, chat, etc.)
    └── partials/         # Reusable components (layout.ejs, sidebar.ejs)
```

### Key Architectural Patterns

1. **Server-Side Rendering**: All pages are rendered server-side using EJS templates. The layout partial wraps all pages with consistent navigation and styling.

2. **Routing Pattern**: RESTful-style routes defined in app.js:
   - Resource listing: `/accounts`, `/contacts`, etc.
   - Resource details: `/accounts/:id`, `/contacts/:id`
   - All routes pass `title` and `activeTab` to templates

3. **Frontend Interactivity**: The main.js file handles:
   - Table column resizing
   - Navigation clicks (using data attributes for routing)
   - Search/filter/sort UI (visual only, no backend integration)
   - Tab switching in detail views

4. **Styling Approach**: Single monolithic CSS file with:
   - Custom design system (no CSS framework)
   - Dark sidebar navigation
   - Responsive layouts using CSS Grid and Flexbox
   - Color-coded elements for different companies/entities

5. **Data Handling**: Currently all data is hardcoded in EJS templates. When implementing features, consider that database integration will be needed for real functionality.

### Important Implementation Notes

- **No Build Process**: Assets are served directly from the public folder
- **No API Routes**: All routes render HTML pages, no JSON endpoints
- **Mock Data**: All displayed data is hardcoded in templates
- **Navigation**: Uses `data-href` attributes with JavaScript click handlers for navigation
- **Column Resizing**: Custom implementation in main.js for table columns
- **SVG Icons**: Embedded inline in templates, not as separate files