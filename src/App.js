import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import store from "./app/store";

import routes from "./routes/routes";
function App() {
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={routes} />
        <Toaster/>
      </Provider>
    </div>
  );
}

export default App;
