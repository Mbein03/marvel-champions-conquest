const Image = ({ additionalClasses, src, alt }) => {
  const defaultClasses =
    'w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out';
  const classes = additionalClasses
    ? additionalClasses + ' ' + defaultClasses
    : defaultClasses;
  return <img className='py-3 my-3' src={src} alt={alt}></img>;
};

export default Image;
