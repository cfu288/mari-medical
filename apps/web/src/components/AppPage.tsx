import React, { PropsWithChildren } from 'react';

export function AppPage(props: PropsWithChildren<{ banner: React.ReactNode }>) {
  return (
    <div className="flex h-full flex-col">
      {props.banner}
      <div className="flex-1 flex-grow overflow-x-hidden overflow-y-scroll pb-20 md:pb-0">
        {props.children}
      </div>
    </div>
  );
}
