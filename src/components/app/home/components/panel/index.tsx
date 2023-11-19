'use client';
import Link from 'next/link';

import { getUser } from '@/lib/helper';

import Button from '@/components/@base/button';
import Container from '@/components/@base/container';

import localization from '@/constants/localization';
import { PANEL } from '@/constants/routes';

export default function Panel() {
  if (!getUser()) {
    return null;
  }
  return (
    <Container className='flex flex-col gap-5'>
      <h3 className='text-white'>{localization.enterThePanel}</h3>

      <Link href={PANEL}>
        <Button>
          {localization.panel}
        </Button>
      </Link>
    </Container>
  );
}