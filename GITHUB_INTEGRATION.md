# GitHub Integration for Portfolio Projects

This document explains how the portfolio automatically syncs with your GitHub repositories to display your latest projects.

## How It Works

### 1. Automatic Project Detection
The system automatically detects project repositories from your GitHub account by:
- Matching repository names against predefined keywords
- Checking repository descriptions for project-related terms
- Using a mapping system for known projects

### 2. Project Mapping
The system includes a mapping for your existing projects:
- `real-time-trading-platform` → Real‑time Trading Platform
- `bayesian-optimization-synthesis` → Python‑based Bayesian Optimization
- `snake-game-cpp` → Snake Game (C++/SFML)
- `car-shop-java` → Car Shop Application (Java)

### 3. Data Synchronization
- **Caching**: Projects are cached in localStorage for 24 hours to improve performance
- **Background Updates**: Fresh data is fetched in the background when cached data is available
- **Fallback**: If GitHub API fails, the system falls back to static project data

### 4. Automatic Updates
- **GitHub Actions**: A workflow runs daily to sync projects
- **Manual Refresh**: Users can click the "Refresh" button to update projects immediately
- **Real-time**: New repositories are automatically detected and added

## Features

### Project Cards Display
Each project card shows:
- Project name and description
- Development period (based on creation/update dates)
- Technology tags (from repository language and topics)
- GitHub repository link
- Live demo link (if homepage is set)
- GitHub stats (stars, forks, last updated)

### GitHub Stats
- ⭐ Star count
- 🍴 Fork count
- 🕒 Last updated date
- Primary programming language

## Configuration

### Adding New Projects
1. Create a new repository on GitHub
2. Add a descriptive README with project details
3. Set repository topics for better categorization
4. Optionally set a homepage URL for live demos
5. The system will automatically detect and include it

### Customizing Project Display
Edit `src/services/githubService.ts`:
- Update `REPO_MAPPING` to add custom project names/descriptions
- Modify `PROJECT_KEYWORDS` to change detection criteria
- Adjust `CACHE_DURATION` to change caching behavior

### GitHub Action Configuration
The workflow in `.github/workflows/update-projects.yml`:
- Runs daily at 2 AM UTC
- Can be triggered manually
- Automatically commits updates to the repository

## API Usage

### GitHubService
```typescript
// Fetch all project repositories
const projects = await GitHubService.fetchProjectRepos();

// Get projects with caching
const projects = await GitHubService.getProjectsWithCache();

// Clear cache and fetch fresh data
const projects = await ProjectUpdater.refreshProjects();
```

### Project Data Structure
```typescript
interface ProjectData {
  name: string;
  period: string;
  desc: string;
  links: Array<{ label: string; href: string }>;
  tags: string[];
  githubUrl?: string;
  stars?: number;
  forks?: number;
  lastUpdated?: string;
  language?: string;
}
```

## Troubleshooting

### Projects Not Showing
1. Check if the repository is public
2. Verify the repository name contains project keywords
3. Ensure the repository has a description
4. Check browser console for API errors

### API Rate Limits
- GitHub API has rate limits (60 requests/hour for unauthenticated requests)
- The system uses caching to minimize API calls
- Consider using a GitHub token for higher limits

### Manual Refresh
If projects don't update automatically:
1. Click the "Refresh" button in the projects section
2. Check the browser console for errors
3. Verify your internet connection

## Security Notes

- No GitHub tokens are stored in the code
- All API calls are made from the client-side
- Repository data is cached locally in the browser
- No sensitive information is exposed

## Future Enhancements

- Add GitHub authentication for higher API limits
- Implement project filtering and sorting
- Add project search functionality
- Include commit activity graphs
- Add project contribution statistics
