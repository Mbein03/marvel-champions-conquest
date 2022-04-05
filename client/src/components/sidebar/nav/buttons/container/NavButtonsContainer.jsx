export const NavButtonsContainer = ({ children }) => {
  return (
    <ul className='border-t border-black pt-4 px-1 flex sm:flex-col overflow-hidden content-center justify-between'>
      {children}
    </ul>
  );
};
