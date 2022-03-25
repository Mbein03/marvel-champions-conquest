export const Card = ({ children }) => {
  return (
    <div className='flex h-screen'>
      <div className='m-auto block p-6 rounded-lg shadow-lg bg-white max-w-sm w-80'>
        {children}
      </div>
    </div>
  );
};
