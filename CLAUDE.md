# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Customer Management App - Codebase Overview

This is a **server-side rendered (SSR) CRM application** built with:
- **Express.js** server with **EJS templating** for views
- **Mock data** layer (no database) in `/data/mockData.js`
- **MVC pattern** with routes defined in `app.js`
- **Static assets** served from `/public/`

### Development Commands

```bash
# Development
npm start              # Start production server on port 3000
npm run dev           # Start development server with CSS watch
npm test              # Run all Playwright tests
npm run test:ui       # Run tests with Playwright UI mode
npm run test:headed   # Run tests in headed browser mode

# Testing specific tests
npx playwright test tests/ui.spec.js -g "test name"  # Run specific test by name
npx playwright test --debug                           # Debug mode with inspector
```

### Architecture & Key Files

**Route Structure** - All routes follow RESTful patterns:
- `/accounts` - List view
- `/accounts/:id` - Detail view with tabs (Overview, Contacts, Journey, etc.)
- `/contacts` - Filterable contact directory
- `/tickets` - Support ticket management
- `/tasks` - Task tracking system
- `/chat` - AI chat interface
- `/dashboards` - Analytics views
- `/usage` - Usage metrics

**Data Model** - Mock data includes interconnected entities:
- **Accounts**: Companies with contacts, health scores, objectives
- **Contacts**: People with roles, departments, engagement metrics
- **Tickets**: Support issues with status, priority, assignees
- **Tasks**: Work items with deadlines and assignments
- **Messages**: Chat/communication history
- **Usage Metrics**: Product usage analytics

**View Components** - Pages use EJS partials:
- `layout.ejs`: HTML wrapper with head/body structure
- `sidebar.ejs`: Navigation menu (active state handled client-side)
- Page-specific views in `/views/pages/`

**Client-Side JavaScript** - `/public/js/main.js` handles:
- Sidebar active state management
- Tab switching functionality
- Search/filter implementations
- Table interactions
- Modal/dropdown behaviors

### Development Workflow

When implementing new features:
1. Add mock data to `/data/mockData.js`
2. Create route handler in `app.js`
3. Create EJS view in `/views/pages/`
4. Add client-side interactivity to `main.js`
5. Write Playwright test in `/tests/`

When modifying existing pages:
1. Check mock data structure first
2. Update both server route and client JS
3. Maintain consistent UI patterns
4. Test with `npm run test:headed` to see changes

### Current Limitations
- No authentication/authorization
- No real database (mock data only)
- No API endpoints (SSR only)
- No environment configuration
- Tailwind CSS installed but not configured

## Task Master AI Integration

### Essential Commands

```bash
# Daily Development Workflow
task-master next                                   # Get next available task to work on
task-master show <id>                             # View detailed task information
task-master set-status --id=<id> --status=done    # Mark task complete
task-master list                                   # Show all tasks with status

# Task Management
task-master add-task --prompt="description" --research        # Add new task with AI assistance
task-master expand --id=<id> --research --force              # Break task into subtasks
task-master update-subtask --id=<id> --prompt="notes"        # Add implementation notes to subtask

# Project Setup (if needed)
task-master init                                    # Initialize Task Master in current project
task-master parse-prd .taskmaster/docs/prd.txt      # Generate tasks from PRD document
task-master models --setup                        # Configure AI models interactively
```

### Key Task Master Files

- `.taskmaster/tasks/tasks.json` - Main task data file (auto-managed)
- `.taskmaster/tasks/*.md` - Individual task files (auto-generated)
- `.taskmaster/docs/prd.txt` - Product Requirements Document
- `.taskmaster/config.json` - AI model configuration
- `.env` - API keys for CLI usage

### MCP Server Configuration

Task Master provides an MCP server. Configure in `.mcp.json`:

```json
{
  "mcpServers": {
    "task-master-ai": {
      "command": "npx",
      "args": ["-y", "--package=task-master-ai", "task-master-ai"],
      "env": {
        "ANTHROPIC_API_KEY": "your_key_here",
        "PERPLEXITY_API_KEY": "your_key_here"
      }
    }
  }
}
```

### Task Workflow Best Practices

1. **Start each session**: `task-master next` to find next available task
2. **Review task details**: `task-master show <id>` for full context
3. **Update progress**: `task-master update-subtask --id=<id> --prompt="implementation notes"`
4. **Complete tasks**: `task-master set-status --id=<id> --status=done`

### Task ID Format
- Main tasks: `1`, `2`, `3`, etc.
- Subtasks: `1.1`, `1.2`, `2.1`, etc.
- Sub-subtasks: `1.1.1`, `1.1.2`, etc.

## Browser Extension Integration

The `/browser-extension/` contains a Chrome extension that:
- Detects emails and extracts contact info
- Expects API endpoints at `/api/contacts/check` and `/api/contacts`
- Uses same mock data structure as main app

Note: API endpoints don't exist yet - extension is prepared for future backend implementation.