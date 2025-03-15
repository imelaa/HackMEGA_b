import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WasteRecognitionModule } from './waste_recognition/waste_recognition.module';
import { ConfigModule } from '@nestjs/config';
import { UserRewardModule } from './user_reward/user_reward.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    WasteRecognitionModule,
    UserRewardModule,


  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
