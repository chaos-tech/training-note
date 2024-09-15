'use client';
import liff from '@line/liff';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import config from '@/configs';

const SignInComplete = () => {
  const { LIFF_ID } = config;

  const getProfile = async () => {
    localStorage.removeItem(`LIFF_STORE:${LIFF_ID}:accessToken`);
    localStorage.removeItem(`LIFF_STORE:${LIFF_ID}:clientId`);
    localStorage.removeItem(`LIFF_STORE:${LIFF_ID}:context`);
    localStorage.removeItem(`LIFF_STORE:${LIFF_ID}:accessToken`);

    try {
      await liff.init({ liffId: '2006306110-dVP1PYQQ' });
      const profile = await liff.getProfile();
      return profile;
    } catch (e) {
      console.error(e);
    }
  };

  const { isPending, data } = useQuery({
    queryKey: ['todos'],
    queryFn: getProfile,
  });

  if (isPending) {
    return <span>Loading...</span>;
  }

  return (
    <>
      <h1>サインインが完了しました！</h1>
      <div>{data?.displayName}</div>
      {data?.pictureUrl && (
        <Image
          src={data?.pictureUrl}
          width={100}
          height={24}
          priority
          alt="profile"
        />
      )}
      <div>{data?.statusMessage}</div>
      <div>{data?.statusMessage}</div>
      <div>{data?.userId}</div>
    </>
  );
};

export default SignInComplete;
