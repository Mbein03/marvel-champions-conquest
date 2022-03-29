export const Grid = ({ children }) => {
  return (
    <div className='flex items-center justify-center'>
      <div className='container mx-12 my-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>{children}</div>
      </div>
    </div>
  );
};
