import * as React from 'react';
import { useGetAllQuery } from '../src';

function TestQuery() {
  const all = useGetAllQuery();
  return (
    <pre>
      {JSON.stringify(all, null, 2)}
    </pre>
  );
}
