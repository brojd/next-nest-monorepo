import { useEffect, useState, FC } from 'react';
import { API_URL } from '../config/api';

type CheckSSGProps = {
  fetchedAsStaticInBuildTime: string;
  fetchedWithSSR: string;
};

const CheckSSG: FC<CheckSSGProps> = ({ fetchedAsStaticInBuildTime }) => {
  const [clientSideLoadedData, setClientSideLoadedData] = useState();

  useEffect(() => {
    fetch(`${API_URL}/app`)
      .then((res) => res.json())
      .then((res) => {
        setClientSideLoadedData(res.data);
      });
  }, []);

  return (
    <>
      <h2>
        I'm loaded with client-side JS:{' '}
        <span style={{ color: 'green' }}> {clientSideLoadedData}</span>
      </h2>
      <h2>
        I'm loaded with as a static data in build time:{' '}
        <span style={{ color: 'red' }}> {fetchedAsStaticInBuildTime}</span>
      </h2>
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/app`);
  const { data: fetchedAsStaticInBuildTime } = await res.json();

  return {
    props: {
      fetchedAsStaticInBuildTime,
    },
  };
}

export default CheckSSG;