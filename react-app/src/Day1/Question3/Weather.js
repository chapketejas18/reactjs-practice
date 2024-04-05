export const Weather = ({ count }) => {
  let message = "";
  if (count > 25) {
    message = "It's sunny today!";
  } else if (count < 10) {
    message = "It's cold today!";
  } else {
    message = "It's neither hot nor cold";
  }
  return (
    <div>
      {message}
    </div>
  );
};
