import CheckSSG from '../sections/CheckSSG/CheckSSG';
import { getHello } from '@client/services/hello';

export async function getStaticProps() {
  const {
    data: { data: fetchedAsStaticInBuildTime }
  } = await getHello();

  return {
    props: {
      fetchedAsStaticInBuildTime
    },
    revalidate: 30
  };
}

export default CheckSSG;
