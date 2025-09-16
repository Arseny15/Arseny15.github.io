// Utility functions for updating projects from GitHub
import { GitHubService, ProjectData } from '../services/githubService';

export class ProjectUpdater {
  static async refreshProjects(): Promise<ProjectData[]> {
    try {
      // Clear cache to force fresh fetch
      localStorage.removeItem('github_projects_cache');
      
      // Fetch fresh data
      const projects = await GitHubService.fetchProjectRepos();
      
      // Cache the new data
      GitHubService.cacheProjects(projects);
      
      return projects;
    } catch (error) {
      console.error('Failed to refresh projects:', error);
      throw error;
    }
  }

  static async getProjectStats(): Promise<{
    totalProjects: number;
    totalStars: number;
    totalForks: number;
    lastUpdated: string;
  }> {
    try {
      const projects = await GitHubService.getProjectsWithCache();
      
      const stats = projects.reduce((acc, project) => {
        acc.totalStars += project.stars || 0;
        acc.totalForks += project.forks || 0;
        return acc;
      }, {
        totalProjects: projects.length,
        totalStars: 0,
        totalForks: 0,
        lastUpdated: new Date().toISOString()
      });

      return stats;
    } catch (error) {
      console.error('Failed to get project stats:', error);
      return {
        totalProjects: 0,
        totalStars: 0,
        totalForks: 0,
        lastUpdated: new Date().toISOString()
      };
    }
  }
}
