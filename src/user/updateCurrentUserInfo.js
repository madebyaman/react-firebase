import { db } from '../index';
import { getCurrentUser } from '../auth';
import { doc, updateDoc } from 'firebase/firestore';

export const updateCurrentUserInfo = async (updates) => {
  const currentUser = getCurrentUser();

  if (!currentUser) return;
  const userRef = doc(db, 'users', currentUser.id);
  await updateDoc(userRef, updates);
};
