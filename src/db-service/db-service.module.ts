import { Module } from '@nestjs/common';
import { dbService } from './db-service.service';

@Module({
  exports: [dbService],
  providers: [dbService]
})
export class DbServiceModule {}
