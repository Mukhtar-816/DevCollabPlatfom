import React from "react";
import AppRouter from "./routes/AppRouter";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <ToastContainer
        toastClassName={() =>
          "backdrop-blur-md bg-white/40 text-white border border-white/20 shadow-lg rounded-md px-8 mt-2 flex-row flex py-5 min-w-60"
        }
        bodyClassName="text-sm font-medium"
        position="top-right"
        autoClose={3000}
      />

      <AppRouter />
    </>
  );
};

export default App;
