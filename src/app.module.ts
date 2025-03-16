import { Module } from '@nestjs/common';
import { WasteRecognitionModule } from './waste_recognition/waste_recognition.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    WasteRecognitionModule,

  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
