import { Meta } from '@/layouts/Meta';
import Home from '@/pages/home';
import { Main } from '@/templates/Main';

const Index = () => {
  // const router = useRouter();

  return (
    <Main
      meta={
        <Meta title="Reharm Music Courses" description="Reharm Music Courses" />
      }
    >
      <Home />
    </Main>
  );
};

export default Index;
