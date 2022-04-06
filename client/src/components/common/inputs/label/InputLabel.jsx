import classNames from 'classnames';

export const InputLabel = ({ htmlFor, children }) => {
  const labelClass = classNames({
    'text-lg': true,
    'font-bold': true,
    'mb-3': true,
    block: true,
  });

  return (
    <label htmlFor={htmlFor} className={labelClass}>
      {children}
    </label>
  );
};
