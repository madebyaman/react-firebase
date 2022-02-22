import { getAuth, onAuthStateChanged } from 'firebase/auth';

export const addAuthListener = (callback) => {
  const onChange = (user) => {
    if (user) {
      // Only send the relevant pieces of data to the callback
      callback({});
    } else {
      callback(null);
    }
  };

  return onAuthStateChanged(getAuth(), onChange);
};
