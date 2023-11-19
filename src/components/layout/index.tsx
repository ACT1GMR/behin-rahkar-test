import { ReactNode } from 'react';

import Container from '@/components/@base/container';
import { CONTAINER_TAG_TYPE } from '@/components/@base/container/type';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Container type={CONTAINER_TAG_TYPE.SECTION} className='h-[100vh] bg-gray-700'>{children}</Container>
  );
}