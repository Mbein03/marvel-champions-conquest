import classNames from 'classnames';

export const CardContainer = ({ fullScreen, spanColumns, lessPadding, children }) => {
  const outerDivClass = classNames({
    flex: true,
    'h-screen': fullScreen,
    'col-span-3': spanColumns,
  });

  const innerDivClass = classNames({
    block: true,
    'm-auto': fullScreen || spanColumns,
    'py-5': !lessPadding,
    'py-2': lessPadding,
    'px-6': true,
    'rounded-lg': true,
    'shadow-lg': true,
    'bg-white': true,
    'w-96': !spanColumns,
  });

  return (
    <div className={outerDivClass}>
      <div className={innerDivClass}>{children}</div>
    </div>
  );
};
