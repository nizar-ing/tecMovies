import axios from "axios";
import logger from "./logService";
import { toast } from "react-toastify";

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

function setJwt(jwt) {
  axios.defaults.headers.common["x-auth-token"] = jwt;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt,
};
