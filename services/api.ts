
import { MartechTool } from '../types';
import { MOCK_TOOLS } from '../constants';

// For production, you would set this to your Vercel API endpoint
const API_URL = '/api/tools';

export const martechService = {
  /**
   * Fetches all tools from the database.
   * Currently uses mock data with a simulated delay.
   */
  async getAllTools(): Promise<MartechTool[]> {
    // In production:
    // const response = await fetch(API_URL);
    // return await response.json();
    
    return new Promise((resolve) => {
      setTimeout(() => resolve(MOCK_TOOLS), 800);
    });
  },

  /**
   * Fetches a single tool by ID.
   */
  async getToolById(id: number): Promise<MartechTool | null> {
    // In production:
    // const response = await fetch(`${API_URL}/${id}`);
    // return await response.json();
    
    return new Promise((resolve) => {
      const tool = MOCK_TOOLS.find(t => t.id === id) || null;
      setTimeout(() => resolve(tool), 400);
    });
  },

  /**
   * Submits a new tool to the database.
   */
  async submitTool(toolData: Partial<MartechTool>): Promise<{ success: boolean; id?: number }> {
    // In production:
    // const response = await fetch(API_URL, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(toolData)
    // });
    // return await response.json();

    console.log('Submitting tool to Neon:', toolData);
    return new Promise((resolve) => {
      setTimeout(() => resolve({ success: true, id: Math.floor(Math.random() * 1000) }), 1500);
    });
  }
};
