import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbServiceModule } from './db-service/db-service.module';
import { MobileModule } from './mobile/mobile.module';
import { WebModule } from './web/web.module';

@Module({
  imports: [DbServiceModule, MobileModule, WebModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
