export const Header = ({ classStyle, children }) => {
  const defaultclassStyle = 'font-bold text-xl text-left mb-3';
  const classes = classStyle
    ? classStyle + ' ' + defaultclassStyle
    : defaultclassStyle;

  return <h1 className={classes}>{children}</h1>;
};
