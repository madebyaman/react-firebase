import { useState, useEffect } from 'react';
import { getCurrentUser } from './getCurrentUser';
import { addAuthListener } from './addAuthListener';

export const useAuth = () => {
  const [authInfo, setAuthInfo] = useState(() => {
    const user = getCurrentUser();
    const isLoading = !user;
    return { user, isLoading };
  });

  useEffect(() => {
    const unsub = addAuthListener((user) =>
      setAuthInfo({ user, isLoading: false })
    );

    return unsub;
  }, []);

  return authInfo;
};
