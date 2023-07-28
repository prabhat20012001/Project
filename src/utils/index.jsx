// Colourize text with theme color
export const textColorize = (strings) => {
  const text = strings.map((value, index) => {
    return (
      <span key={index} className={value.color ? "heading-primary" : ""}>
        {value.text}
      </span>
    );
  });
  return text;
};
