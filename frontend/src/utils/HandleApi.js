// this file will help to handle API from frontend to backend
import axios from "axios";
const baseUrl = "https://localhost:5000";
const getAllToDo = (setToDo) => {
  axios.get(baseUrl).then(({ data }) => {
    console.log("data------->", data);
    setToDo(data);
  });
};
export { getAllToDo };
