import React from 'react';
import PropTypes from 'prop-types';
import { reportError } from '../src/lib/errors';
import Link from 'next/link';

const Index = props => {
  return (
    <div>
      <h1>this is an example page</h1>
      <button
        onClick={() => reportError('testing error', {
            metaData: {
                operation: 'error test',
            },
            user: {
                username: 'testing user',
            }
        })}
      >report test error</button>
      <Link href={'/post/123'} >To Post Page</Link>
    </div>
  );
};

Index.propTypes = {};

export default Index;
