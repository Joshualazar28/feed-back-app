function Header({ text , bgColor, textColor }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };

  return (
    <header style={headerStyles}>
      <div className="container">{text}</div>
    </header>
  );
}

export default Header;
