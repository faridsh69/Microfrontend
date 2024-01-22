import TimetrackingApp from "timetracking/TimetrackingApp";

const Timer = () => {
  return (
    <div>
      4 Container Timer
      <TimetrackingApp
        appProps={
          {
            // initialPath: location.pathname,
            // onNavigate: ({ pathname: nextPathname }) => {
            //   const { pathname } = location;
            //   if (pathname !== nextPathname) {
            //     navigate(nextPathname);
            //   }
            // },
          }
        }
      />
    </div>
  );
};

export default Timer;
