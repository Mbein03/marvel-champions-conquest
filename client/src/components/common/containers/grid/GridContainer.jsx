import classNames from 'classnames';

export const GridContainer = ({ columnNumber, children }) => {
  const gridClass = classNames({
    grid: true,
    'grid-cols-4': !columnNumber,
    'grid-cols-3': columnNumber === 3,
    'gap-6': true,
  });

  return (
    <div className='flex items-center justify-center'>
      <div className='container mx-12 my-4'>
        <div className={gridClass}>{children}</div>
      </div>
    </div>
  );
};
