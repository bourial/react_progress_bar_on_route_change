import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import TopBarProgress from "react-topbar-progress-indicator";

TopBarProgress.config({
  barColors: {
    "0": "#00B963",
    "1.0": "#00B963",
  },
  shadowBlur: 0,
});

const CustomSwitch = ({ children }: any) => {
  const [progress, setProgress] = useState<boolean>(false);
  const [prevLoc, setPrevLoc] = useState<string>("");
  const location = useLocation();

  useEffect(() => {
    setPrevLoc(location.pathname);
    setProgress(true);
    if (location.pathname === prevLoc) {
      setPrevLoc("");
    }
  }, [location]);

  useEffect(() => {
    setProgress(false);
  }, [prevLoc]);

  return (
    <>
      {progress && <TopBarProgress />}
      {children}
    </>
  );
};

export default CustomSwitch;
