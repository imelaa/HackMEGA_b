import { WasteRecognitionService } from './waste_recognition.service';
import { Controller, Post, UploadedFile, UseInterceptors, BadRequestException, InternalServerErrorException } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { google } from 'googleapis';
import * as multer from 'multer';

@Controller('waste_recognition')
export class WasteRecognitionController {

  private vision = google.vision('v1');
  private readonly googleApiKey = process.env.GOOGLE_API_KEY;
  constructor(private readonly wasteRecognitionService: WasteRecognitionService) {}


  @Post('recognize')
  @UseInterceptors(FileInterceptor('image', {
    storage: multer.memoryStorage(), 
    limits: {
      fileSize: 5 * 1024 * 1024, 
    },
  }))
  async recognizeWaste(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException('No file uploaded');
    }

    try {
      const request = {
        image: {
          content: file.buffer.toString('base64'), 
        },
        features: [
          {
            type: 'LABEL_DETECTION',
            maxResults: 5,
          },
        ],
      };
      
      const response = await this.vision.images.annotate({
        auth: this.googleApiKey, 
        requestBody: {
          requests: [request],
        },
      });

      const result = response.data;
      const filteredLabels = result.responses[0].labelAnnotations;

        const categorizedLabels = filteredLabels
        .map(label => ({
            description: label.description,
            category: this.wasteRecognitionService.assignWasteCategory(label.description),
        }))
        .filter(label => label.category !== 'Unknown');
        return { labels: categorizedLabels };

        } catch (error) { throw new InternalServerErrorException('Error during image recognition: ' + error.message);}
    }
}