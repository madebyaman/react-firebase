import { getAuth, signOut } from 'firebase/auth';

export const signout = async () => {
  try {
    await signOut(getAuth());
  } catch (e) {
    throw new Error('Error signing out');
  }
};
