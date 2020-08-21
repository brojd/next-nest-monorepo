import { API_URL } from '../../config/api';
import CheckSSG from '../sections/CheckSSG/CheckSSG';

export async function getStaticProps() {
  const res = await fetch(`${API_URL}`);
  const { data: fetchedAsStaticInBuildTime } = await res.json();

  return {
    props: {
      fetchedAsStaticInBuildTime
    }
  };
}

export default CheckSSG;
