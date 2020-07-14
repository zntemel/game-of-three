import { notification } from "antd";
export default (message) =>
  notification.info({
    message,
    duration: 1.2,
  });
