import classNames from 'classnames';

export const Button = ({
  onClick,
  color,
  marginBottom,
  disabled,
  children,
}) => {
  const btnClass = classNames({
    transition: true,
    uppercase: true,
    rounded: true,
    'w-full': true,
    'px-6': true,
    'py-2.5': true,
    'text-white': true,
    'font-medium': true,
    'text-xs': true,
    'leading-tight': true,
    'shadow-md': true,
    'hover:shadow-lg': true,
    'focus:shadow-lg': true,
    'focus:outline-none': true,
    'focus:ring-0': true,
    'active:shadow-lg': true,
    'duration-150': true,
    'ease-in-out': true,
    'bg-blue-600 hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-800':
      !disabled && !color,
    'bg-gray-600 hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-800':
      disabled,
    'bg-green-600 hover:bg-green-700 focus:bg-green-700 active:bg-green-800':
      !disabled && color === 'green',
    'mb-3': marginBottom,
  });

  return (
    <button
      type='button'
      className={btnClass}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};