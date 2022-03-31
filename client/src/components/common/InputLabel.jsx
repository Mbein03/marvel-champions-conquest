export const InputLabel = ({ htmlFor, children }) => {
  return (
    <label htmlFor={htmlFor} className='text-lg font-bold inline-block mb-2'>
      {children}
    </label>
  );
};
