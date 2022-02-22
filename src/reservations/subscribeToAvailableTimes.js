import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '../index';

export const subscribeToAvailableTimes = (restaurantId, date, cb) => {
  const callback = async (results) => {
    const dateAvailabilityDoc = results.docs[0];
    if (dateAvailabilityDoc) {
      cb({
        id: dateAvailabilityDoc.id,
        availableTimes: dateAvailabilityDoc.data().availableTimes,
      });
    } else {
      cb({ id: '', availableTimes: [] });
    }
  };

  const q = query(
    collection(db, 'dateAvailabilities'),
    where('restaurantId', '==', restaurantId),
    where('date', '==', date)
  );
  return onSnapshot(q, callback);
};
