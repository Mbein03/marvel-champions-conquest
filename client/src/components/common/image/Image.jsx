import classNames from 'classnames';
export const Image = ({ src, alt, type }) => {
  const imageClass = classNames({
    'pt-2': true,
    'pb-3': true,
    'my-2': true,
    'w-full': true,
    'h-[27rem]': type === 'StoreCard',
    'h-[20rem]': type === 'PlayerCard',
  });

  return <img className={imageClass} src={src} alt={alt}></img>;
};
