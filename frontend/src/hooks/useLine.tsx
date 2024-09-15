'use client';
import liff from '@line/liff';
import { useEffect } from 'react';
import config from '@/configs';

export const useLine = () => {
  const { LIFF_ID } = config;

  useEffect(() => {
    try {
      liff.init({ liffId: LIFF_ID });
    } catch (e) {
      console.log(e);
    }
  });

  const signIn = () => {
    try {
      liff.login();
    } catch (e) {
      console.log(e);
    }
  };

  return { signIn };
};
