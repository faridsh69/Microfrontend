import TimetrackingApp from "timetracking/TimetrackingApp";
import { useLocation, useNavigate } from "react-router-dom";

const Timer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div>
      3 container Timer
      <TimetrackingApp
        appProps={{
          initialPath: location.pathname,
          onNavigate: ({ pathname: nextPathname }) => {
            const { pathname } = location;

            if (pathname !== nextPathname) {
              navigate(nextPathname);
            }
          },
        }}
      />
    </div>
  );
};

export default Timer;
