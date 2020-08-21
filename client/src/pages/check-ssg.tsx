import CheckSSG from '../sections/CheckSSG/CheckSSG';
import { getHello } from '@client/services/hello';

export async function getStaticProps() {
  const {
    data: { data: fetchedAsStaticInBuildTime }
  } = await getHello();

  return {
    props: {
      fetchedAsStaticInBuildTime
    }
  };
}

export default CheckSSG;
