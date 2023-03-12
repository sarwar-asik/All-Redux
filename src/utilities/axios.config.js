import axios from "axios";

let url;
switch (process.env.REACT_APP_ENVIRNMENT) {
  case "DEVELOPMENT":
    url = "http://localhost:5000";
    break;
  case "PRODUCTION":
    url = "http://localhost:production";
    break;
  default:
    url = "http://localhost:5000";
}

const instance = axios.create({
  baseURL: url,
});

export default instance;
