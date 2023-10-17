import { Module } from '@nestjs/common';
import { GithubController } from './github/github.controller';
import { GithubService } from './github/github.service';
import { HttpModule } from '@nestjs/axios';
import { StackOverflowService } from './stack-overflow/stack-overflow.service';
import { StackOverflowController } from './stack-overflow/stack-overflow.controller';

@Module({
  imports: [HttpModule],
  controllers: [GithubController, StackOverflowController],
  providers: [GithubService, StackOverflowService],
})
export class AppModule {}
