import { useQuery } from '@tanstack/react-query';

import { getConversion } from '@/components/app/panel/services';

import { useCurrencyStore } from '@/store/currency.store';

import { GET_CONVERSION } from '@/constants/query-key';
import ConversionModel from '@/models/conversion.model';

export const useGetConversion = () => {
  const { dollar } = useCurrencyStore();
  return useQuery<ConversionModel>({
    queryKey: [GET_CONVERSION],
    refetchInterval: 2000,
    enabled: dollar > 0,
    queryFn: ({ signal }: { signal: AbortSignal }) => getConversion({ signal })
  });
};
