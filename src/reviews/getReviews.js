import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../index';
import { mapAsync } from '../util';
import { getUserInfo } from '../user';

export const getReviews = async (restaurantId) => {
  const collectionRef = collection(db, 'reviews');
  const querySnap = query(
    collectionRef,
    where('restaurantId', '==', restaurantId)
  );
  const reviewsSnap = await getDocs(querySnap);
  const reviews = reviewsSnap.forEach((review) => ({
    ...review.data(),
    id: review.id,
  }));

  const populatedReviews = await mapAsync(reviews, async (review) => {
    const author = await getUserInfo(review.userId);
    return {
      ...review,
      author,
    };
  });

  return populatedReviews;
};
