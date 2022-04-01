import classNames from 'classnames';
export const Image = ({ src, alt }) => {
  const imageClass = classNames({
    'py-3': true,
    'my-2': true,
  });

  return <img className={imageClass} src={src} alt={alt}></img>;
};
