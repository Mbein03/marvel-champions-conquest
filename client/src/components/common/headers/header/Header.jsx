import classNames from 'classnames';

export const Header = ({ textCenter, underline, marginTop, children }) => {
  const headerClass = classNames({
    'mb-3': true,
    'font-bold': true,
    'text-2xl': true,
    'text-left': !textCenter,
    'text-center': textCenter,
    'mt-3': marginTop,
    underline: underline,
  });

  return <h1 className={headerClass}>{children}</h1>;
};
