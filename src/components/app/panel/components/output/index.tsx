'use client';

import Container from '@/components/@base/container';
import { useGetConversion } from '@/components/app/panel/hooks';

import { useCurrencyStore } from '@/store/currency.store';

export default function Output() {
  const { data: conversion } = useGetConversion();

  const { dollar } = useCurrencyStore();
  const { conversion_rate: conversionRate } = conversion || {};

  if (!dollar || !conversionRate) {
    return null;
  }

  return (
    <Container><p className='text-white'>{Number(dollar * conversionRate).toFixed(2)} EUR</p></Container>
  );
}
