import classNames from 'classnames';

export const Header = ({ textCenter, children }) => {
  const headerClass = classNames({
    'mb-3': true,
    'font-bold': true,
    'text-xl': true,
    'text-left': !textCenter,
    'text-center': textCenter,
  });

  return <h1 className={headerClass}>{children}</h1>;
};
