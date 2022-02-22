import { db } from '../index';
import { doc, getDoc } from 'firebase/firestore';

export const getRestaurant = async (id) => {
  const docRef = doc(db, 'restaurants', id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return {
      ...docSnap.data(),
      id: docSnap.id,
    };
  }

  return null;
};
