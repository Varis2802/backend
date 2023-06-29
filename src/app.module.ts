import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConnectReactController } from './connect-react/connect-react.controller';

@Module({
  imports: [],
  controllers: [AppController, ConnectReactController],
  providers: [AppService],
})
export class AppModule {}
