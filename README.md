# Customer Management App

A comprehensive customer relationship management (CRM) application built with Node.js, Express, and EJS. This application provides a complete interface for managing customer accounts, contacts, support tickets, tasks, and usage analytics.

## 🚀 Features

### 📊 Account Management
- **Account Overview**: Comprehensive account details with timeline and highlights
- **Contact Management**: Domain-filtered contact lists for each account
- **Support Tickets**: Track and manage customer support requests
- **Usage Analytics**: Visual metrics dashboard with charts and usage data
- **Internal Notes**: Team collaboration with categorized notes
- **Task Management**: Assign and track account-related tasks

### 🎨 User Interface
- **Responsive Design**: Mobile-friendly interface
- **Interactive Tables**: Resizable columns, sortable data, and clickable rows
- **Rich Data Visualization**: Progress bars, charts, and metric cards
- **Tab-Based Navigation**: Organized information architecture
- **Status Indicators**: Color-coded badges for priorities, statuses, and categories

### ⚡ Technical Features
- **Server-Side Rendering**: Fast page loads with EJS templates
- **Modular Architecture**: Reusable components and consistent styling
- **Interactive Elements**: Hover effects, tooltips, and smooth transitions
- **Column Resizing**: Customizable table layouts
- **Search & Filter**: UI elements for data discovery

## 🛠 Technology Stack

- **Backend**: Node.js with Express.js
- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **Template Engine**: EJS (Embedded JavaScript)
- **Styling**: Custom CSS with CSS Grid and Flexbox
- **Icons**: SVG icons for scalable graphics

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd customer-management-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the application**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🏗 Project Structure

```
customer-management-app/
├── app.js                 # Main Express server
├── package.json           # Dependencies and scripts
├── CLAUDE.md             # Development documentation
├── public/
│   ├── css/
│   │   └── styles.css    # Application styles
│   └── js/
│       └── main.js       # Client-side JavaScript
└── views/
    ├── pages/            # Page templates
    │   ├── accounts.ejs
    │   ├── account-details.ejs
    │   ├── contacts.ejs
    │   ├── contact-details.ejs
    │   ├── tickets.ejs
    │   ├── tasks.ejs
    │   ├── usage.ejs
    │   ├── chat.ejs
    │   ├── dashboards.ejs
    │   └── settings.ejs
    └── partials/         # Reusable components
        ├── layout.ejs
        └── sidebar.ejs
```

## 🧭 Navigation

- **Accounts**: View and manage customer accounts
- **Contacts**: Contact directory with filtering
- **Chat**: Communication interface
- **Tasks**: Task management system
- **Dashboards**: Analytics and reporting
- **Usage**: Usage metrics and analytics
- **Tickets**: Support ticket system
- **Settings**: Application configuration

## 📱 Account Details Tabs

Each account includes comprehensive information organized in tabs:

1. **Overview**: Account summary, highlights, and interaction timeline
2. **Contacts**: Domain-filtered contact list for the account
3. **Tickets**: Support tickets specific to the account
4. **Usage**: Usage analytics and metrics dashboard
5. **Notes**: Internal notes and observations
6. **Tasks**: Account-related tasks and action items

## 🎯 Key Features by Tab

### 🔍 Overview Tab
- Account summary with key metrics
- Interaction timeline with detailed participant information
- Key highlights including feature requests, pain points, and competitive mentions
- Visual activity feed with icons and timestamps

### 👥 Contacts Tab
- Automatic domain-based filtering
- Contact avatars and LinkedIn integration
- Clickable rows for detailed contact views
- Search and filter capabilities

### 🎫 Tickets Tab
- Comprehensive ticket tracking
- Priority and status indicators
- Assignee management with avatars
- Category organization

### 📊 Usage Tab
- Interactive metrics dashboard
- Feature usage charts with hover tooltips
- Monthly trend visualization
- API usage and storage monitoring
- Circular progress indicators

### 📝 Notes Tab
- Card-based note layout
- Category badges and tagging system
- Author attribution with timestamps
- Rich text content support

### ✅ Tasks Tab
- Task completion tracking with checkboxes
- Due date monitoring with overdue highlighting
- Priority and status management
- Task summary statistics

## 🎨 Design System

- **Colors**: Blue primary (#3b82f6), with semantic colors for status indicators
- **Typography**: Clean, readable font hierarchy
- **Spacing**: Consistent 8px grid system
- **Components**: Reusable buttons, badges, and form elements
- **Icons**: SVG icons for crisp display at all sizes

## 🔧 Development

### Available Scripts

- `npm start` - Start the development server
- `npm run dev` - Start the development server (alias)

### Development Guidelines

See `CLAUDE.md` for detailed development documentation including:
- Code architecture patterns
- Data structure guidelines
- UI component conventions
- Styling approaches

## 📄 Sample Data

The application includes comprehensive sample data for demonstration:
- Multiple company accounts (Bilkent University, Flowla, Yahoo, Microsoft)
- Realistic contact information
- Sample tickets, tasks, and notes
- Usage metrics and analytics data

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🚀 Future Enhancements

- Database integration for persistent data
- User authentication and authorization
- Real-time notifications
- Advanced filtering and search
- Data export functionality
- Email integration
- Calendar integration
- Advanced analytics and reporting