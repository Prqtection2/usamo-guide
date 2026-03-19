import classNames from 'classnames';
import React from 'react';

export const Feature = ({
  icon: Icon,
  iconClasses,
  title,
  blobClasses,
  feature,
  featurePosition,
  fade = 'right',
  children,
}: {
  icon: React.ElementType;
  iconClasses: string;
  title: string;
  blobClasses: string;
  feature: JSX.Element;
  featurePosition: 'left' | 'right';
  fade?: 'none' | 'right';
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <div className="ui-card relative overflow-hidden p-5 sm:p-6 md:p-8">
      <div
        className={classNames(
          'relative',
          featurePosition === 'left' ? 'sm:pr-1' : 'sm:pl-1'
        )}
      >
        <div>
          <div
            className={classNames(
              'mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br text-white',
              iconClasses
            )}
          >
            <Icon className="h-6 w-6" />
          </div>
        </div>
        <h3 className="text-xl font-bold text-gray-900 md:text-3xl dark:text-gray-100">
          {title}
        </h3>
        <p className="mt-2 text-gray-600 md:mt-4 md:text-lg dark:text-gray-300">
          {children}
        </p>

        <div className="relative mt-6">
          <div className="relative z-10">{feature}</div>

          <div
            className={classNames(
              'pointer-events-none absolute -bottom-6 h-24 w-48 transform-gpu rounded-full opacity-[35%] blur-2xl',
              featurePosition === 'left' ? '-right-6' : '-left-6',
              blobClasses
            )}
          />
        </div>

        {fade !== 'none' && (
          <div
            className={classNames(
              'pointer-events-none absolute inset-x-0 bottom-0 z-20 h-16 bg-linear-to-t from-white dark:from-gray-900 to-transparent',
              featurePosition === 'left'
                ? 'from-white dark:from-gray-900'
                : 'from-white dark:from-gray-900'
            )}
          />
        )}
      </div>
    </div>
  );
};
