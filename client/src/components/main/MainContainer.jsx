export const MainContainer = ({ children }) => {
  return (
    <main role='main' className='w-full h-full flex-grow overflow-auto'>
      <div className='bg-slate-300'>{children}</div>
    </main>
  );
};
