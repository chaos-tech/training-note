'use client';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import SignInComplete from './_complete';

const queryClient = new QueryClient();

const SignIn = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SignInComplete />
    </QueryClientProvider>
  );
};

export default SignIn;
