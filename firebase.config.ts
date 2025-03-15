import * as admin from 'firebase-admin';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FirebaseService {
  private app: admin.app.App;

  constructor() {
    this.app = admin.initializeApp({
      credential: admin.credential.applicationDefault(), 
      databaseURL:process.env.DATA_BASE_URL,
    });
  }

  getFirestore() {
    return this.app.firestore();
  }

  getDatabase() {
    return this.app.database();
  }
}