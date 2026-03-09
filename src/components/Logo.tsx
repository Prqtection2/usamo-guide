import * as React from 'react';
import UsamoLogo from '../assets/usamo-logo.svg';

export default function Logo(): JSX.Element {
  return (
    <div className="flex flex-nowrap items-center space-x-2 whitespace-nowrap">
      <img
        className="h-9 w-9 shrink-0"
        src={UsamoLogo}
        alt="USAMO Guide"
      />
      <span className="text-xl font-bold tracking-tight text-black dark:text-gray-300">
        USAMO Guide
      </span>
    </div>
  );
}
