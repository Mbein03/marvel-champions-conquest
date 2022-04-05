import classNames from 'classnames';

export const InputLabel = ({ htmlFor, children }) => {
  const labelClass = classNames({
    'text-lg': true,
    'font-bold': true,
    'inline-block': true,
    'mb-3': true,
  });

  return (
    <label htmlFor={htmlFor} className={labelClass}>
      {children}
    </label>
  );
};
