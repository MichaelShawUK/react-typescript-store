import { Link } from "react-router-dom";
import StyledError from "../css/StyledError";

const Error = () => {
  return (
    <StyledError>
      <h1>Oops! Something went wrong.</h1>
      <p>
        Return to <Link to="/">Home</Link>
      </p>
    </StyledError>
  );
};

export default Error;
