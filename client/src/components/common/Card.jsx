import classNames from 'classnames';

export const Card = ({ grid, children }) => {
  const outerDivClass = classNames({
    flex: true,
    'h-screen': !grid,
  });

  const innerDivClass = classNames({
    block: true,
    'm-auto': true,
    'px-6': true,
    'py-6': !grid,
    'py-2': grid,
    'rounded-lg': true,
    'shadow-lg': true,
    'bg-white': true,
    'max-w-sm': true,
    'w-80': true,
  });

  return (
    <div className={outerDivClass}>
      <div className={innerDivClass}>{children}</div>
    </div>
  );
};
