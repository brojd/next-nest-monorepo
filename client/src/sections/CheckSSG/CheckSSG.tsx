import React, { FC, useState, useEffect } from 'react';
import { API_URL } from '../../../config/api';

type CheckSSGProps = {
  fetchedAsStaticInBuildTime: string;
  fetchedWithSSR: string;
};

const CheckSSG: FC<CheckSSGProps> = ({ fetchedAsStaticInBuildTime }) => {
  const [clientSideLoadedData, setClientSideLoadedData] = useState();

  useEffect(() => {
    fetch(`${API_URL}`)
      .then(res => res.json())
      .then(res => {
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

export default CheckSSG;
