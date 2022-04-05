import classNames from 'classnames';

export const InputLabel = ({ htmlFor, children, marginTop }) => {
  const labelClass = classNames({
    'text-lg': true,
    'font-bold': true,
    'inline-block': true,
    'mb-3': true,
    'mt-3': marginTop,
  });

  return (
    <label htmlFor={htmlFor} className={labelClass}>
      {children}
    </label>
  );
};
