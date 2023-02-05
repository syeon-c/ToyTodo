import axios from "axios";

export const getTodoList = async () => {

  const res =  await axios.get(`http://localhost:80/todos`)

  console.log("=====AXIOS GETLIST====")

  return res.data

}
