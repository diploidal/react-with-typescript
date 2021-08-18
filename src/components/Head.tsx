import React from 'react';

type HeadPropTypes = {
  title: string,
  isActive: boolean
}

export const Head = ({ title, isActive }: HeadPropTypes) => {
  return (
    <div>
      <h1>{title}</h1>
      {isActive && <h3>Active</h3>}
    </div>
  );
};