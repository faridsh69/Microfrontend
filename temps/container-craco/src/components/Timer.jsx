import { useHistory } from "react-router-dom";
import TimetrackingApp from "timetracking/TimetrackingApp";

const Timer = () => {
  const history = useHistory();

  return (
    <div>
      {/* 4 Container Timer */}
      <TimetrackingApp
        appProps={{
          initialPath: history.location.pathname,
          onNavigate: ({ pathname: nextPathname }) => {
            const { pathname } = history.location;

            if (pathname !== nextPathname) {
              history.push(nextPathname);
            }
          },
        }}
      />
    </div>
  );
};

export default Timer;
