import React, { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <h1>layout</h1>
      {children}
    </div>
  );
}
