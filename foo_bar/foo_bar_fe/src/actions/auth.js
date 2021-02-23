import axios from "axios";

export const logout = () => {
  localStorage.removeItem("token");
  //    localStorage.removeItem('expirationDate');
  return (dispatch) => {
    axios
      .post("/api/logout")
      .then((res) => {
        console.log(res);
        //            window.location.reload();
      })
      .catch((err) => {
        console.log("logout error-> " + err);
        //            dispatch(authFail(err))
      });
  };
};

export const checkAuthTimeout = (expirationTime) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};

export const login = (username, password) => {
  return axios
    .post("/api/login", {
      username: username,
      password: password,
    })
    .then((res) => {
      const token = res.data.token;
      //            const expirationDate = new Date(new Date().getTime() + 3600 * 1000)
      localStorage.setItem("token", token);
      //            return token
      //            localStorage.setItem('expirationDate', expirationDate);
      //            dispatch(authSuccess(token, res.data.user));
      //            dispatch(checkAuthTimeout(3600));
    })
    .catch((err) => {
      return err.response.data["non_field_errors"][0];
    });
};
