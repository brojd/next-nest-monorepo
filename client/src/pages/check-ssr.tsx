import CheckSSR from '../sections/CheckSSR/CheckSSR';
import { getHello } from '@client/services/hello';

export async function getServerSideProps() {
  const {
    data: { data: fetchedWithSSR }
  } = await getHello();

  return {
    props: {
      fetchedWithSSR
    }
  };
}

export default CheckSSR;
