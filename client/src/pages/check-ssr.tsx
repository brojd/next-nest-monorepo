import { API_URL } from '../../config/api';
import CheckSSR from '../sections/CheckSSR/CheckSSR';

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}`);
  const { data: fetchedWithSSR } = await res.json();

  return {
    props: {
      fetchedWithSSR
    }
  };
}

export default CheckSSR;
