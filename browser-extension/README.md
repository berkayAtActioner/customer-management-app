# Customer Management Assistant Browser Extension

A Manifest V3 browser extension that provides contextual customer and contact information while browsing emails and websites. When you're reading an email from a business contact, this extension automatically detects the email address and displays relevant customer information in a convenient side panel.

## 🚀 Features

### 🔍 Automatic Email Detection
- Scans web pages for business email addresses
- Filters out personal email domains (Gmail, Yahoo, etc.)
- Works with popular email clients (Gmail, Outlook)
- Detects emails in various formats (text, mailto links, form fields)

### 📋 Side Panel Interface
- Clean, modern interface with customer information
- Contact details with avatar, title, and company
- Account overview with key metrics
- Recent activity timeline
- Quick action buttons for common tasks

### ⚡ Smart Features
- Real-time email detection using content scripts
- Background processing for minimal performance impact
- Integration with Customer Management App
- Notification system for found contacts
- Manual search capability

### 🛠 Quick Actions
- Create support tickets
- Add notes to customer accounts
- Create tasks
- View usage analytics
- Open full account details in main app

## 📦 Installation

### For Development

1. **Load the extension in Chrome:**
   ```bash
   # Navigate to chrome://extensions/
   # Enable "Developer mode"
   # Click "Load unpacked" and select the browser-extension folder
   ```

2. **Ensure the main Customer Management App is running:**
   ```bash
   cd ../  # Go to main app directory
   npm start  # Start on http://localhost:3000
   ```

### For Production
Package the extension and upload to Chrome Web Store following Google's guidelines.

## 🎯 How It Works

### 1. Email Detection
The content script (`content.js`) scans web pages for email addresses using:
- Regular expression pattern matching
- DOM observation for dynamic content
- Special handling for Gmail and Outlook interfaces
- Business domain filtering

### 2. Data Retrieval
The background service worker (`background.js`) manages:
- API communication with the Customer Management App
- Contact data caching and storage
- Cross-tab communication
- Notification handling

### 3. Side Panel Display
The side panel (`sidepanel.html`) provides:
- Customer contact information
- Account metrics and summary
- Recent activity timeline
- Quick action buttons
- Manual search functionality

## 📁 File Structure

```
browser-extension/
├── manifest.json          # Extension configuration (Manifest V3)
├── background.js          # Service worker for background processing
├── content.js            # Content script for email detection
├── sidepanel.html        # Side panel interface
├── sidepanel.css         # Side panel styling
├── sidepanel.js          # Side panel functionality
├── icons/                # Extension icons (16, 32, 48, 128px)
│   ├── icon16.png
│   ├── icon32.png
│   ├── icon48.png
│   ├── icon128.png
│   ├── icon.svg          # Source SVG icon
│   └── generate-icons.html
└── README.md
```

## 🔧 Configuration

### API Endpoint
The extension connects to the Customer Management App running on `http://localhost:3000`. To change this:

1. Open the extension options (right-click extension icon → Options)
2. Update the API Base URL
3. Save settings

### Settings
Available settings include:
- **API Base URL**: Customer Management App endpoint
- **Auto Detect**: Enable/disable automatic email detection
- **Notifications**: Enable/disable notification alerts

## 🎨 Technical Details

### Manifest V3 Features
- **Service Worker**: Background processing without persistent background pages
- **Side Panel API**: Native browser side panel integration
- **Content Scripts**: Secure page content analysis
- **Action API**: Extension icon and badge management

### Permissions
- `activeTab`: Access current tab content
- `sidePanel`: Use browser side panel
- `storage`: Store extension data
- `scripting`: Inject content scripts
- `host_permissions`: Access all websites for email detection

### Email Detection Algorithm
1. **Text Content Scanning**: Extract emails from visible page text
2. **Link Analysis**: Parse mailto: links
3. **Form Field Detection**: Check email input fields
4. **Domain Filtering**: Remove personal email providers
5. **Deduplication**: Avoid processing same emails multiple times

### Integration Points
- **Customer Management App API**: RESTful endpoints for contact data
- **Chrome Extension APIs**: Side panel, storage, notifications
- **Web Standards**: Content Security Policy, CORS handling

## 🔄 Data Flow

1. **Page Load**: Content script scans for email addresses
2. **Email Detection**: Business emails sent to background script
3. **Data Lookup**: Background script queries Customer Management App
4. **Storage**: Contact data cached in extension storage
5. **UI Update**: Side panel displays contact information
6. **User Actions**: Quick actions trigger API calls

## 🛡 Security & Privacy

- **No Personal Data Storage**: Only business contact information
- **Secure Communication**: HTTPS API calls to main application
- **Permission Scope**: Minimal required permissions
- **Content Isolation**: Secure content script sandboxing

## 🚀 Future Enhancements

- **Multi-Contact Support**: Display multiple contacts per page
- **Advanced Filtering**: Customizable domain filtering
- **Offline Mode**: Cache contact data for offline access
- **Custom Actions**: Configurable quick action buttons
- **Integration Webhooks**: Connect with other CRM systems
- **Analytics Dashboard**: Usage metrics and insights

## 🔧 Development

### Testing
1. Load extension in developer mode
2. Navigate to email-containing websites
3. Check console logs for email detection
4. Verify side panel functionality

### Debugging
- **Content Script**: Check browser console on target pages
- **Background Script**: Use `chrome://extensions/` → Extension details → Service worker
- **Side Panel**: Right-click in side panel → Inspect

### API Integration
The extension expects the Customer Management App to provide:
- `GET /api/contacts/search?email=` - Search contacts by email
- `POST /api/tickets` - Create new tickets
- `POST /api/notes` - Add customer notes

## 📄 License

This extension is part of the Customer Management App project and follows the same licensing terms.