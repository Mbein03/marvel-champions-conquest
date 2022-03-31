export const MainContainer = ({ children }) => {
  return (
    <main role='main' className='w-full flex-grow overflow-auto h-screen bg-slate-300'>
      {children}
    </main>
  );
};
