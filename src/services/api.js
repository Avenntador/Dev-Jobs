import axios from "axios";

export const getAllDevs = () => {
  try {
    return axios.get(process.env.REQUEST_DEVS);
  } catch (e) {
    console.log("Error");
  }
};

export const getDevById =  (id) => {
  try {
    return axios.get(`${process.env.REQUEST_DEVS}/${id}`);
  } catch (e) {
    console.log("Error");
  }
};
