import React, { FC, useState, useEffect } from 'react';
import { API_URL } from '../../../config/api';

type CheckSSRProps = {
  fetchedAsStaticInBuildTime: string;
  fetchedWithSSR: string;
};

const CheckSSR: FC<CheckSSRProps> = ({ fetchedWithSSR }) => {
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
        I'm loaded with SSR on every request:{' '}
        <span style={{ color: 'purple' }}> {fetchedWithSSR}</span>
      </h2>
    </>
  );
};

export default CheckSSR;
