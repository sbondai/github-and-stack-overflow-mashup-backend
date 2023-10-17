import { Test, TestingModule } from '@nestjs/testing';
import { StackOverflowController } from './stack-overflow.controller';

describe('StackOverflowController', () => {
  let controller: StackOverflowController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StackOverflowController],
    }).compile();

    controller = module.get<StackOverflowController>(StackOverflowController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
