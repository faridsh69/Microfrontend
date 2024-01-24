import { Link } from "react-router-dom";

export const LinkButton = () => {
  return (
    <div>
      <Link to="/">Go to home</Link> - <Link to="/timer">Go to timer</Link>
    </div>
  );
};
