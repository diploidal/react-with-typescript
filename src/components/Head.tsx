import React from 'react';

type HeadPropTypes = {
  title: string, // Required type
  isActive?: boolean // Optional type
}

export const Head = ({ title, isActive = true }: HeadPropTypes) => {
  return (
    <div>
      <h1>{title}</h1>
      {isActive && <h3>Active</h3>}
    </div>
  );
};