<<<<<<< HEAD
import { useMediaQuery } from "react-responsive";
const App = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 599px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 600px) and (max-width: 1199px)",
  });
  const isDesktop = useMediaQuery({ query: "(min-width: 1200px)" });
  const getBackgroundColor = () => {
    if (isMobile) {
      return "lightblue";
    } else if (isTablet) {
      return "lightgreen";
    } else if (isDesktop) {
      return "lightcoral";
    }
  };
  return (
    <div style={{ padding: "20px", backgroundColor: getBackgroundColor() }}>
      <h1>Responsive Design with react-responsive</h1>
    </div>
=======
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
const App = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
>>>>>>> 87d1c9baf5f2ed790d0d45ff246d216223186cc4
  );
};
export default App;
