import * as functions from 'firebase-functions';
import { sendEmail } from './sendEmail';
import 'dotenv/config';

export const sendVerificationEmail = functions.firestore
  .document('/temporaryUser/{id}')
  .onCreate((snap, context) => {
    const tempUser = snap.data();
    const { emailAddress, confirmationHash } = tempUser;

    return sendEmail({
      to: emailAddress,
      from: process.env.EMAIL_USER,
      subject: 'Verify your email address',
      message: `Click this link to verify your email: https://us-central1-reservation-fe876.cloudfunctions.net/confirmEmail?conf=${confirmationHash}`,
    });
  });
