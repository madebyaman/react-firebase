import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export const signIn = async (email, password) => {
  try {
    const result = await signInWithEmailAndPassword(getAuth(), email, password);
    // You should return what data you want. For example, if firebase return `isVerified` property and you want to use it in your app, you need to return it. Otherwise you might be reliant on one service.
    return {};
  } catch (error) {
    throw new Error('Error signing in');
  }
};
