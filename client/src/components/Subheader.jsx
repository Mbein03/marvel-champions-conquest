export const Subheader = ({ title, text }) => {
  return (
    <h4 className='mb-3'>
      <span className='font-bold'>{title}:</span> {text}
    </h4>
  );
};
