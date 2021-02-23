import axios from "axios";

export const getBars = (rating) => {
  const config = {
    headers: {
      Authorization: "Token " + localStorage.getItem("token"),
    },
    params: {
      rating: rating,
    },
  };

  return axios
    .get("/api/bars", config)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};
