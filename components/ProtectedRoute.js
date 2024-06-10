import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

function ProtectedRoute({ children }) {
  const { data: session, status } = useSession(); //Its a Context Provider 
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.replace('/login'); // Use replace to avoid keeping the previous state in history
    }
  }, [status, router]);

  if (status === 'loading') {
    return <div>Loading...</div>; // You can render a loading state here
  }

  if (session) {
    return <>{children}</>;
  }

  return null;
}

export default ProtectedRoute;
