// src/firebase.config.ts
import * as admin from 'firebase-admin';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FirebaseService {
  private app: admin.app.App;

  constructor() {
    this.app = admin.initializeApp({
      credential: admin.credential.applicationDefault(), // O usa otro método de autenticación
      databaseURL: 'https://<your-database-name>.firebaseio.com',
    });
  }

  getFirestore() {
    return this.app.firestore();
  }

  getDatabase() {
    return this.app.database();
  }
}