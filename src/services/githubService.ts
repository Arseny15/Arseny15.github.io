// GitHub API service for fetching repository data
export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  clone_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  created_at: string;
  updated_at: string;
  topics: string[];
  homepage: string | null;
}

export interface ProjectData {
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

// Repository name mapping to match your existing projects
const REPO_MAPPING: Record<string, Partial<ProjectData>> = {
  'real-time-trading-platform': {
    name: 'Real‑time Trading Platform',
    period: 'Oct 2024 – Dec 2024',
    desc: 'Node.js REST API on OracleDB with pooling; complex SQL aggregation; web UI for CRUD over market data.',
    tags: ['Node.js', 'OracleDB', 'SQL', 'HTML/JS']
  },
  'bayesian-optimization-synthesis': {
    name: 'Python‑based Bayesian Optimization in Organic Synthesis',
    period: 'Sep 2024 – Jan 2025',
    desc: 'Compared BO vs. MLR to maximize reaction yield; EI acquisition cut experiments while raising accuracy.',
    tags: ['Python', 'Bayesian Opt', 'ChemInformatics']
  },
  'snake-game-cpp': {
    name: 'Snake Game (C++/SFML)',
    period: 'Nov 2024 – Dec 2024',
    desc: 'Responsive loop, collision & scoring logic; polished remake of classic Nokia Snake.',
    tags: ['C++17', 'SFML']
  },
  'car-shop-java': {
    name: 'Car Shop Application (Java)',
    period: 'Jan 2022 – Apr 2022',
    desc: 'JSON‑backed GUI to search/compare cars; Singleton pattern for resource mgmt & logging.',
    tags: ['Java', 'Swing/FX', 'Design Patterns']
  },
  'driverguard-ai': {
    name: 'DriverGuard AI',
    period: 'Dec 2024 – Present',
    desc: 'AI-powered driver safety monitoring system using computer vision and machine learning to detect drowsiness and distracted driving.',
    tags: ['Python', 'Computer Vision', 'Machine Learning', 'OpenCV', 'TensorFlow']
  }
};

// Keywords to identify project repositories
const PROJECT_KEYWORDS = [
  'trading', 'platform', 'bayesian', 'optimization', 'synthesis',
  'snake', 'game', 'car', 'shop', 'application', 'java', 'cpp',
  'node', 'react', 'portfolio', 'website', 'driverguard', 'ai',
  'driver', 'safety', 'monitoring', 'computer', 'vision'
];

export class GitHubService {
  private static readonly GITHUB_API_BASE = 'https://api.github.com';
  private static readonly USERNAME = 'Arseny15';
  private static readonly CACHE_KEY = 'github_projects_cache';
  private static readonly CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

  static async fetchUserRepos(): Promise<GitHubRepo[]> {
    try {
      const response = await fetch(`${this.GITHUB_API_BASE}/users/${this.USERNAME}/repos?sort=updated&per_page=100`);
      
      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`);
      }
      
      const repos: GitHubRepo[] = await response.json();
      return repos.filter(repo => !repo.name.includes('Arseny15.github.io')); // Exclude this website repo
    } catch (error) {
      console.error('Error fetching GitHub repositories:', error);
      throw error;
    }
  }

  static async fetchProjectRepos(): Promise<ProjectData[]> {
    try {
      const repos = await this.fetchUserRepos();
      const projects: ProjectData[] = [];

      // Process each repository - use all public repos as projects
      for (const repo of repos) {
        // Skip this website repository
        if (repo.name.includes('Arseny15.github.io')) {
          continue;
        }

        const projectData = this.convertRepoToProject(repo);
        projects.push(projectData);
      }

      // Sort by last updated date
      projects.sort((a, b) => {
        const dateA = new Date(a.lastUpdated || 0).getTime();
        const dateB = new Date(b.lastUpdated || 0).getTime();
        return dateB - dateA;
      });

      return projects;
    } catch (error) {
      console.error('Error fetching project repositories:', error);
      // Return cached data if available
      return this.getCachedProjects();
    }
  }

  private static isProjectRepository(repo: GitHubRepo): boolean {
    // Check if repository name matches known project names
    const repoName = repo.name.toLowerCase();
    
    // Check against mapping
    if (Object.keys(REPO_MAPPING).some(key => repoName.includes(key))) {
      return true;
    }

    // Check against keywords
    return PROJECT_KEYWORDS.some(keyword => 
      repoName.includes(keyword) || 
      (repo.description && repo.description.toLowerCase().includes(keyword))
    );
  }

  private static convertRepoToProject(repo: GitHubRepo): ProjectData {
    // Extract period from creation and update dates
    const createdDate = new Date(repo.created_at);
    const updatedDate = new Date(repo.updated_at);
    const period = `${createdDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} – ${updatedDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}`;

    // Generate tags from language and topics
    const tags = [
      ...(repo.language ? [repo.language] : []),
      ...repo.topics.slice(0, 3) // Limit to 3 topics
    ];

    return {
      name: this.formatProjectName(repo.name),
      period: period,
      desc: repo.description || 'A software project showcasing various technologies and best practices.',
      tags: tags,
      links: [
        { label: 'GitHub', href: repo.html_url },
        ...(repo.homepage ? [{ label: 'Live Demo', href: repo.homepage }] : [])
      ],
      githubUrl: repo.html_url,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      lastUpdated: repo.updated_at,
      language: repo.language || undefined
    };
  }

  private static formatProjectName(name: string): string {
    return name
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  private static getCachedProjects(): ProjectData[] {
    try {
      const cached = localStorage.getItem(this.CACHE_KEY);
      if (cached) {
        const { data, timestamp } = JSON.parse(cached);
        const now = Date.now();
        
        if (now - timestamp < this.CACHE_DURATION) {
          return data;
        }
      }
    } catch (error) {
      console.error('Error reading cached projects:', error);
    }
    
    return [];
  }

  static cacheProjects(projects: ProjectData[]): void {
    try {
      const cacheData = {
        data: projects,
        timestamp: Date.now()
      };
      localStorage.setItem(this.CACHE_KEY, JSON.stringify(cacheData));
    } catch (error) {
      console.error('Error caching projects:', error);
    }
  }

  static async getProjectsWithCache(): Promise<ProjectData[]> {
    // Try to get cached data first
    const cachedProjects = this.getCachedProjects();
    
    if (cachedProjects.length > 0) {
      // Return cached data immediately, but also fetch fresh data in background
      this.fetchProjectRepos().then(projects => {
        this.cacheProjects(projects);
      }).catch(error => {
        console.error('Background fetch failed:', error);
      });
      
      return cachedProjects;
    }

    // No cache, fetch fresh data
    try {
      const projects = await this.fetchProjectRepos();
      this.cacheProjects(projects);
      return projects;
    } catch (error) {
      console.error('Failed to fetch projects:', error);
      return [];
    }
  }
}
