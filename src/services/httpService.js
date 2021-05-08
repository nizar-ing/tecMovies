import axios from "axios";
import logger from "./logService";
import { toast } from "react-toastify";
import Auth from "./authService";

axios.defaults.headers.common["x-auth-token"] = Auth.getJwt();

axios.defaults.axios.interceptors.response.use(null, (error) => {
  const hasExpectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!hasExpectedError) {
    logger.log(error);
    toast.error("An unexpected error occured.");
  }
  return Promise.reject(error);
});

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
