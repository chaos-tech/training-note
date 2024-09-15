'use client';
import liff from '@line/liff';
import { useEffect } from 'react';

export const useLine = () => {
  useEffect(() => {
    try {
      liff.init({ liffId: '2006306110-dVP1PYQQ' });
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
