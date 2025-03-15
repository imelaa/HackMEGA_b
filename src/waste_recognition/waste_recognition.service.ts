import { Injectable } from '@nestjs/common';

@Injectable()
export class WasteRecognitionService {
    
    assignWasteCategory(description: string): string {
        const lowerDescription = description.toLowerCase();
      
        if (
          lowerDescription.includes('plastic') || 
          lowerDescription.includes('bottle') || 
          lowerDescription.includes('can') ||    
          lowerDescription.includes('glass') ||  
          lowerDescription.includes('paper') ||  
          lowerDescription.includes('cardboard')
        ) {
          return 'Recyclable';
        }
      
        if (
          lowerDescription.includes('food') ||      
          lowerDescription.includes('fruit') ||
          lowerDescription.includes('vegetable') || 
          lowerDescription.includes('coffee') ||    
          lowerDescription.includes('organic')     
        ) {
          return 'Compostable';
        }
      
        if (
          lowerDescription.includes('battery') || 
          lowerDescription.includes('chemical') ||
          lowerDescription.includes('paint') ||   
          lowerDescription.includes('medicine') ||
          lowerDescription.includes('electronic') 
        ) {
          return 'Hazardous';
        }
      
        if (
          lowerDescription.includes('broken glass') || 
          lowerDescription.includes('styrofoam') ||   
          lowerDescription.includes('plastic bag') || 
          lowerDescription.includes('cigarette') ||   
          lowerDescription.includes('trash') ||       
          lowerDescription.includes('garbage')
        ) {
          return 'Landfill';
        }
      
        return 'Unknown';
      }
}


// {
//     "labels": [
//         {
//             "description": "Bottle",
//             "category": "Recyclable"
//         },
//         {
//             "description": "Plastic bottle",
//             "category": "Recyclable"
//         }
//     ]
// }