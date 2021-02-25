import axios from "axios";

export const logout = () => {
    localStorage.removeItem("token");
    return axios
      .post("/api/logout")
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log("logout error-> " + err);
      });
};

export const checkAuthTimeout = (expirationTime) => {
    setTimeout(() => {
      logout();
    }, expirationTime * 1000);

};

export const login = (username, password) => {
  return axios
    .post("/api/login", {
      username: username,
      password: password,
    })
    .then((res) => {
      const token = res.data.token;
      localStorage.setItem("token", token);
      checkAuthTimeout(3600);
    })
    .catch((err) => {
      return err.response.data["non_field_errors"][0];
    });
};
