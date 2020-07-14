import { Modal } from "antd";

export default (message, redirectURL) =>
  Modal.info({
    title: message,
    icon: false,
    okText: "Play Again",
    onOk: () => redirectURL()
  });
