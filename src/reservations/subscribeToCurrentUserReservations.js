import { getCurrentUser } from '../auth';
import { subscribeToReservations } from './subscribeToReservations';

/**
 * Wrapper function to fetch current user's reservations
 */
export const subscribeToCurrentUserReservations = (cb) => {
  const currentUser = getCurrentUser();

  if (!currentUser) return cb([]);
  return subscribeToReservations(currentUser.id, cb);
};
