'use client';
import Link from 'next/link';

import { getUser } from '@/lib/helper';

import Button from '@/components/@base/button';
import Container from '@/components/@base/container';

import localization from '@/constants/localization';
import { SIGN_UP } from '@/constants/routes';

export default function SignUp() {
  if (getUser()) {
    return null;
  }
  return (
    <Container className='flex flex-col gap-5'>
      <h3 className='text-white'>{localization.youDidntRegisteredPleaseSignUp}</h3>

      <Link href={SIGN_UP}>
        <Button>
          {localization.signUp}
        </Button>
      </Link>
    </Container>
  );
}