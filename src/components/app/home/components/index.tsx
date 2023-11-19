import Container from '@/components/@base/container';
import Panel from '@/components/app/home/components/panel';
import SignUp from '@/components/app/home/components/sign-up';

export default function Home() {
  return (
    <Container center className='h-full'>
      <SignUp />
      <Panel />
    </Container>
  );
}