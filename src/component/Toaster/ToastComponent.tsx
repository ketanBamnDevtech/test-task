//toaster
import "react-toastify/dist/ReactToastify.css";
import toasterModule from "../../styles/toaster.module.css";
import { ToastProps } from "./types";

//component
import Button from "../Ui-component/Button/Button";

const ToastComponent = ({
  onConfirm,
  onCancel,
  title,
  toastBody,
}: ToastProps) => {
  const handleConfirm = () => {
    onConfirm();
  };
  const handleCancel = () => {
    onCancel();
  };
  return (
    <div className={toasterModule.toast}>
      <div className={toasterModule.image_container}>
        <img
          className={toasterModule.image}
          src="assests/icons/Vector (Stroke).png"
        />
      </div>
      <div>
        <div>
          <h3 className={toasterModule.toast_title}>{title}</h3>
          {toastBody()}
        </div>
        <div>
          <Button
            text="Confirm"
            onClick={handleConfirm}
            Class={toasterModule.confirmbtnclass}
          />
          <Button
            text="Cancel"
            onClick={handleCancel}
            Class={toasterModule.cancelbtnclass}
          />
        </div>
      </div>
    </div>
  );
};

export default ToastComponent;
