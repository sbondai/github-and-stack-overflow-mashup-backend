import { Controller, Get, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { GithubService } from './github.service';

@Controller('github')
export class GithubController {
  constructor(private readonly githubService: GithubService) {}

  @Get('search')
  async searchRepositories(@Query('q') query: string, @Res() res: Response) {
    try {
      const response = await this.githubService.searchRepositories(query);
      return res.json(response.data.items);
    } catch (error) {
      console.error('Handled Error:', error.message);
      return res.status(500).json({
        error: 'An error occurred while fetching data. Please try again later.',
      });
    }
  }
}
