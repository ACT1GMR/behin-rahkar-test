import { create } from 'zustand';

import ChartDataModel from '@/models/chart.data.model';

interface CurrencyStore {
  dollar: number;
  euro: number;
  setDollar: (value: number) => void;
  setEuro: (value: number) => void;
  chartData: ChartDataModel[];
  addChartData: (item: ChartDataModel) => void;
  reset: () => void;
}

export const useCurrencyStore = create<CurrencyStore>((set) => ({
  dollar: 0,
  euro: 0,
  chartData: [],
  setDollar: (dollar) => set({ dollar }),
  setEuro: (euro) => set({ euro }),
  addChartData: (item) => set(state => ({ chartData: [...state.chartData, item] })),
  reset: () => set({ dollar: 0, euro: 0, chartData: [] })
}));