import React, { FC } from 'react';
import { Todo } from '@shared/types/todo';
import { multiple } from '@shared/utils/exemplaryUtils';

const todoWithSharedType: Todo = {
  id: 'a',
  text: 'aaa'
};

const CheckSharedFolder: FC = () => {
  return (
    <>
      <h2>
        I am calculated with utils from shared folder:{' '}
        <span style={{ color: 'brown' }}>{multiple(Math.random() * 100)}</span>
      </h2>
      <h2>
        I have a shared type:{' '}
        <span style={{ color: 'blue' }}>
          {JSON.stringify(todoWithSharedType)}
        </span>
      </h2>
    </>
  );
};

export default CheckSharedFolder;
