'use client';
import { useEffect } from 'react';

import Container from '@/components/@base/container';
import { useGetConversion } from '@/components/app/panel/hooks';

import { useCurrencyStore } from '@/store/currency.store';

export default function Chart() {
  const { data: conversion } = useGetConversion();

  const { dollar, chartData, addChartData } = useCurrencyStore();
  const { conversion_rate: conversionRate, time_last_update_utc: updateAt } = conversion || {};

  useEffect(() => {
    if (dollar && conversionRate && updateAt) {
      addChartData({ dollar, updateAt, conversionRate });
    }
  }, [dollar, conversionRate, updateAt]);

  if (!dollar || !conversionRate || !updateAt) {
    return null;
  }

  return (
    <Container className='grid grid-cols-3 border-t  text-white'>
      <h2 className='col-span-3 text-center'>Chart</h2>
      <p>UNIT</p>
      <p>EUR</p>
      <p>UPDATE</p>
      {chartData.map(item => (
        <>
          <p>{item.dollar}</p>
          <p>{item.dollar * conversionRate}</p>
          <p>{item.updateAt}</p>
        </>
      ))}
    </Container>
  );
}
