'use client';
import { LineButton } from '@/components/LineButton';
import { useLine } from '@/hooks/useLine';

const SignIn = () => {
  const { signIn } = useLine();

  const handleClick = () => {
    signIn();
  };

  return (
    <>
      <h1>会員登録ORログイン</h1>
      <LineButton handleClick={handleClick}></LineButton>
    </>
  );
};

export default SignIn;
