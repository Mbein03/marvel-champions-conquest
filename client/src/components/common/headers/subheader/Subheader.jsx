import classNames from 'classnames';

export const Subheader = ({ title, text, block, spanUnderline, marginBottom }) => {
  const wrapperClass = classNames({
    'inline-block': !block,
    block: block,
    'mb-3': marginBottom,
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
