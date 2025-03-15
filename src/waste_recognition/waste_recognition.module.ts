import { Module } from '@nestjs/common';
import { WasteRecognitionController } from './waste_recognition.controller';
import { WasteRecognitionService } from './waste_recognition.service';

@Module({
  controllers: [WasteRecognitionController],
  providers: [WasteRecognitionService]
})
export class WasteRecognitionModule {}
