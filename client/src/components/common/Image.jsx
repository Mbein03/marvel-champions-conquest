import classNames from 'classnames';
export const Image = ({ src, alt, storeCard }) => {
  const imageClass = classNames({
    'py-3': true,
    'my-2': true,
    'h-[27.5rem]': storeCard,
  });

  return <img className={imageClass} src={src} alt={alt}></img>;
};
