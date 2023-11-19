import axios from 'axios';

import { QUERY_ROUTES } from '@/constants/routes';
import ConversionModel from '@/models/conversion.model';

export async function getConversion({ signal }: { signal: AbortSignal }): Promise<ConversionModel> {
  const { data } = await axios.get(
    QUERY_ROUTES.GET_CONVERSION, { signal }
  );
  return data;

}