import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { reportError } from '../../src/lib/errors';
import Link from 'next/link';

const Post = props => {
    const router = useRouter();
    const { id } = router.query;
  return (
      <div>
  <h2>Post {id}</h2>
  <button
        onClick={() => reportError('testing post error', {
            metaData: {
                operation: 'post error test',
            },
            user: {
                username: 'testing user',
            }
        })}
      >report test error</button>
      <Link href={'/'} >Back to home</Link>
  </div>
  );
};

Post.propTypes = {};

export default Post;
