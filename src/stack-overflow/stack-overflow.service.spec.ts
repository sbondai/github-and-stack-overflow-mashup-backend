import { Test, TestingModule } from '@nestjs/testing';
import { StackOverflowService } from './stack-overflow.service';

describe('StackOverflowService', () => {
  let service: StackOverflowService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StackOverflowService],
    }).compile();

    service = module.get<StackOverflowService>(StackOverflowService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
