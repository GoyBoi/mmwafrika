# Qwen Configuration and MCP Server Usage Guide

This document provides guidelines for Qwen on when and how to use the available MCP servers for various tasks. Always prefer using these MCP servers over local alternatives when available.

Note: There is also a global QWEN.md configuration file that may contain additional settings. This project-specific configuration takes precedence for project-related tasks.

## Available MCP Servers

### 1. brave-search
Use for all web search and information retrieval tasks.

**Tools:**
- `brave_web_search`: General web searches for information, facts, or current topics
- `brave_local_search`: Location-based queries (restaurants, businesses, points of interest)
- `brave_news_search`: Finding news articles and current events
- `brave_video_search`: Searching for video content
- `brave_image_search`: Finding images and visual content
- `brave_summarizer`: Generating AI summaries of web search results

**When to use:**
- Researching topics, technologies, or best practices
- Finding current news or events
- Searching for images, videos, or local businesses
- Creating summaries of complex topics from multiple sources

**Examples:**
- "Find recent articles about React performance optimization"
- "Search for images of modern e-commerce website designs"
- "What are the latest trends in web development for 2025?"
- "Find local coffee shops in San Francisco"

### 2. playwright
Use for all browser automation and web page interaction tasks.

**Tools:**
- `browser_navigate`: Navigate to URLs
- `browser_click`: Click elements on web pages
- `browser_fill_form`: Fill out forms
- `browser_take_screenshot`: Capture screenshots of pages or elements
- `browser_snapshot`: Capture accessibility snapshots
- `browser_evaluate`: Execute JavaScript in the browser
- `browser_wait_for`: Wait for elements or text to appear/disappear
- `browser_hover`: Hover over elements
- `browser_select_option`: Select options in dropdowns
- `browser_type`: Type text into elements
- `browser_press_key`: Press keyboard keys
- `browser_drag`: Perform drag and drop operations
- `browser_tabs`: Manage browser tabs
- `browser_resize`: Resize the browser window
- `browser_console_messages`: Get console messages
- `browser_network_requests`: Get network requests
- `browser_handle_dialog`: Handle dialogs
- `browser_file_upload`: Upload files
- `browser_close`: Close pages
- `browser_install`: Install browsers if needed
- `browser_navigate_back`: Navigate back to previous page

**When to use:**
- Testing web applications
- Automating web interactions
- Scraping web content
- Taking screenshots of web pages
- Validating UI elements and behavior

**Examples:**
- "Navigate to https://example.com and take a screenshot of the header"
- "Fill out the registration form on this page with test data"
- "Click the 'Submit' button and verify the success message appears"
- "Test the login flow by entering credentials and clicking login"

### 3. context7
Use for retrieving documentation and library information.

**Tools:**
- `resolve-library-id`: Resolve package names to Context7-compatible library IDs
- `get-library-docs`: Fetch documentation for libraries

**When to use:**
- When you need documentation for specific libraries or packages
- When resolving what library ID to use for documentation lookup
- When answering questions about specific technologies or frameworks

**Examples:**
- "Find documentation for React hooks"
- "How do I use the useState hook in React?"
- "Get documentation for Express.js middleware"
- "What are the best practices for using Tailwind CSS?"

### 4. github
Use for all GitHub-related operations.

**Tools:**
- `search_repositories`: Search for GitHub repositories
- `search_code`: Search for code across GitHub repositories
- `search_issues`: Search for issues and pull requests
- `search_users`: Search for GitHub users
- `get_file_contents`: Get contents of files from repositories
- `create_repository`: Create new GitHub repositories
- `fork_repository`: Fork existing repositories
- `create_branch`: Create new branches
- `push_files`: Push multiple files to repositories
- `create_or_update_file`: Create or update single files
- `list_issues`: List issues in repositories
- `create_issue`: Create new issues
- `update_issue`: Update existing issues
- `add_issue_comment`: Add comments to issues
- `get_issue`: Get details of specific issues
- `list_pull_requests`: List pull requests
- `create_pull_request`: Create new pull requests
- `get_pull_request`: Get details of specific pull requests
- `update_pull_request_branch`: Update pull request branches
- `merge_pull_request`: Merge pull requests
- `create_pull_request_review`: Create pull request reviews
- `get_pull_request_reviews`: Get pull request reviews
- `get_pull_request_comments`: Get pull request comments
- `get_pull_request_files`: Get files changed in pull requests
- `get_pull_request_status`: Get status of pull requests
- `list_commits`: Get list of commits

**When to use:**
- Working with GitHub repositories
- Creating or updating files in repositories
- Managing issues and pull requests
- Searching for code examples or repositories
- Collaborating on GitHub projects

**Examples:**
- "Create a new repository named 'my-project'"
- "Search for repositories related to 'machine learning'"
- "Create a pull request with my changes"
- "Find code examples for implementing authentication in Node.js"
- "Add a comment to issue #123 in the repository"

### 5. sequential-thinking
Use for complex problem-solving that requires step-by-step reasoning.

**Tools:**
- `sequentialthinking`: Detailed problem-solving through thoughts

**When to use:**
- Breaking down complex problems into steps
- Planning and design with room for revision
- Analysis that might need course correction
- Problems where the full scope might not be clear initially
- Multi-step solutions that need to maintain context

**Examples:**
- "Plan the architecture for a new web application"
- "Debug this complex issue step by step"
- "Design a database schema for an e-commerce platform"
- "Break down the implementation of a complex feature"

### 6. supabase
Use for all Supabase-related database and backend operations.

**Tools:**
- `search_docs`: Search Supabase documentation
- `list_tables`: List database tables
- `list_extensions`: List database extensions
- `list_migrations`: List database migrations
- `apply_migration`: Apply database migrations
- `execute_sql`: Execute raw SQL queries
- `get_logs`: Get logs for Supabase services
- `get_advisors`: Get advisory notices for security/performance
- `get_project_url`: Get the API URL for a project
- `get_anon_key`: Get the anonymous API key for a project
- `generate_typescript_types`: Generate TypeScript types
- `list_edge_functions`: List Edge Functions
- `deploy_edge_function`: Deploy Edge Functions
- `supabase__create_branch`: Create development branches
- `list_branches`: List development branches
- `delete_branch`: Delete development branches
- `merge_branch`: Merge development branches to production
- `reset_branch`: Reset migrations of a development branch
- `rebase_branch`: Rebase a development branch on production

**When to use:**
- Working with Supabase databases
- Managing database schemas and migrations
- Executing SQL queries
- Deploying and managing Edge Functions
- Managing development branches
- Checking logs and performance/security advisories

**Examples:**
- "Create a new table for user profiles"
- "Apply this migration to add a new column"
- "Execute a query to find all users who signed up this month"
- "Deploy this Edge Function for handling webhooks"
- "Create a development branch for feature work"

### 7. puppeteer
Use for alternative browser automation when Playwright is not suitable.

**Tools:**
- `puppeteer_navigate`: Navigate to URLs
- `puppeteer_click`: Click elements
- `puppeteer_fill`: Fill input fields
- `puppeteer_select`: Select options in dropdowns
- `puppeteer_hover`: Hover over elements
- `puppeteer_evaluate`: Execute JavaScript
- `puppeteer_screenshot`: Take screenshots
- `puppeteer_connect_active_tab`: Connect to existing Chrome instances

**When to use:**
- When Playwright tools are not available or suitable
- For specific Puppeteer features not available in Playwright
- When connecting to existing Chrome instances with remote debugging

**Examples:**
- "Take a screenshot of this page using Puppeteer"
- "Fill this form and submit it using Puppeteer"
- "Connect to an existing Chrome instance for debugging"