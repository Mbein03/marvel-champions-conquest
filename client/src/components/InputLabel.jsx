export const InputLabel = ({ htmlFor, children }) => {
  return (
    <>
      <label htmlFor={htmlFor} className='form-label font-bold inline-block mb-2'>
        {children}
      </label>
    </>
  );
};
