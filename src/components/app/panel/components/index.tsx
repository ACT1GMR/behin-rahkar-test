import Container from '@/components/@base/container';
import Chart from '@/components/app/panel/components/chart';
import Output from '@/components/app/panel/components/output';
import UnitForm from '@/components/app/panel/components/unit-form';

export default function Panel() {
  return (
    <Container center className='h-full flex flex-col gap-2'>
      <UnitForm />
      <Output />
      <Chart />
    </Container>
  );
}
