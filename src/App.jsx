import React from "react";
import AppRouter from "./router/AppRouter";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import Store from "./redux/store";
import { AuthProvider } from "./context/authContext";

const App = () => {
  return (
    <>
      <Provider store={Store}>
       <AuthProvider>
         <ToastContainer
          toastClassName={() =>
            "backdrop-blur-md bg-white/40 text-white border border-white/20 shadow-lg rounded-md px-5 mt-2 flex-row flex py-5 min-w-60"
          }
          bodyClassName="text-sm font-medium"
          position="top-right"
          autoClose={3000}
        />
        <AppRouter />
       </AuthProvider>
      </Provider>
    </>
  );
};

export default App;
