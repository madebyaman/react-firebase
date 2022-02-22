import { getAuth } from 'firebase/auth';

export const getCurrentUser = () => {
  const user = getAuth().currentUser;
  if (!user) return null;
  return {};
};
