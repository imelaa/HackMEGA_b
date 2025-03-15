import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { WasteRecognitionModule } from './waste_recognition/waste_recognition.module';
import { WasteTrackingModule } from './waste_tracking/waste_tracking.module';
import { UserRewardModule } from './user_reward/user_reward.module';
import { FirebaseModule } from './firebase/firebase.module';

@Module({
  imports: [UserModule, WasteRecognitionModule, WasteTrackingModule, UserRewardModule, FirebaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
