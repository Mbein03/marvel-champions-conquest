import classNames from 'classnames';

export const Subheader = ({ title, text, spanUnderline }) => {
  const spanClass = classNames({
    'font-bold': true,
    italic: true,
    underline: spanUnderline,
  });

  return (
    <p className='inline-block text-lg mb-3'>
      <span className={spanClass}>{title}</span>: {text}
    </p>
  );
};
