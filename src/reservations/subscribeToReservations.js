import { db } from '../index';
import { mapAsync } from '../util';
import { getRestaurant } from '../restaurants';
import { collection, onSnapshot, query, where } from 'firebase/firestore';

export const subscribeToReservations = (userId, callback) => {
  const cb = async (querySnapshot) => {
    const reservations = [];
    querySnapshot.forEach((doc) => {
      reservations.push({
        ...doc.data(),
        id: doc.id,
      });
    });
    console.log(reservations);

    // Appending restaurant info to each reservation
    const populatedReservations = await mapAsync(
      reservations,
      async (reservation) => {
        const restaurant = await getRestaurant(reservation.restaurantId);
        return {
          ...reservation,
          restaurant,
        };
      }
    );

    callback(populatedReservations);
  };

  const q = query(
    collection(db, 'reservations'),
    where('userId', '==', userId)
  );
  return onSnapshot(q, cb);
};
