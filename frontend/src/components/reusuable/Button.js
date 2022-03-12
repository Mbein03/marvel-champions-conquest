const Button = ({ onClick, additionalClasses, confirm, children }) => {
  const color = confirm
    ? 'bg-green-600 hover:bg-green-700 focus:bg-green-700 active:bg-green-800'
    : 'bg-blue-600 hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-800';

  const defaultClasses =
    'w-full px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out ';

  const classes = additionalClasses
    ? additionalClasses + ' ' + defaultClasses + color
    : defaultClasses + color;
  return (
    <button type='button' className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
