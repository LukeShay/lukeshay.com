import React from 'react';

/**
 * @param {object} props
 * @param {React.ReactNode | undefined} props.children
 */
function Group({ children }) {
  return <ul>{children}</ul>;
}

export default Group;
