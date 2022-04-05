import classNames from 'classnames';

export const Subheader = ({ title, text, block, spanUnderline }) => {
  const wrapperClass = classNames({
    'inline-block': !block,
    block: block,
    'mb-3': true,
  });

  const spanClass = classNames({
    'font-bold': true,
    italic: true,
    underline: spanUnderline,
  });

  return (
    <p className={wrapperClass}>
      <span className={spanClass}>{title}</span>: {text}
    </p>
  );
};
