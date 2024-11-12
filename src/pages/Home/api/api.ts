import axios from "axios";

export const getRequest = () => {
  axios.get("/api/v1/test").then((response) => {
    console.log(response.data);
  });
};
