import { Test, TestingModule } from '@nestjs/testing';
import { dbService } from './db-service.service';

describe('DbServiceService', () => {
  let service: dbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [dbService],
    }).compile();

    service = module.get<dbService>(dbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
