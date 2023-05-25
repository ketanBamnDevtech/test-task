import React, { FC, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import ToastComponent from "./component/Toaster/ToastComponent";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import toasterModule from "./styles/toaster.module.css";

const App: FC = () => {

  const [clicked, setClicked] = useState<boolean>(false);
  
  const toastBody = () => {
    return (
      <p className={toasterModule.toast_para}>
        Long details go here after the title, long details go here after the
        title
      </p>
    );
  };

  const handleToastOpen = () => {
    setClicked(true);
    toast(
      <ToastComponent
        onConfirm={() => {
          setClicked(false);
          console.log("Toast confirmed!");
        }}
        onCancel={() => setClicked(false)}
        title={"Hello there...!"}
        toastBody={toastBody}
      />,
      {
        position: "top-right",
        autoClose: false,
        closeButton: false,
        draggable: false,
      }
    );
  };

  return (
    <div className="App">
      <h1>Toast</h1>
      <div>
        <button
          className={toasterModule.toastbutton}
          onClick={handleToastOpen}
          disabled={clicked}
        >
          Click me
        </button>
      </div>
      <ToastContainer className="container" />
    </div>
  );
};

export default App;
