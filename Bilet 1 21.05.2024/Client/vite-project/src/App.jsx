import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./Routes/index";

const routes = createBrowserRouter(ROUTES);
function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
