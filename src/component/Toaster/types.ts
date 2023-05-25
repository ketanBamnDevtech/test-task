export type ToastProps = {
  onConfirm: () => void;
  onCancel: () => void;
  title: string;
  toastBody: Function;
};
