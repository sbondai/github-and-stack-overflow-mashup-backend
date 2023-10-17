import { Controller, Get, Query } from '@nestjs/common';
import { Observable } from 'rxjs';
import { StackOverflowService } from './stack-overflow.service';

@Controller('stackoverflow')
export class StackOverflowController {
  constructor(private readonly stackOverflowService: StackOverflowService) {}

  @Get('questions')
  getQuestions(@Query('tag') tag: string): Observable<any> {
    return this.stackOverflowService.getQuestions(tag);
  }
}
