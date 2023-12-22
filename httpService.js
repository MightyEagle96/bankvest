import axios from "axios";

// export const aguilaClient = process.env.REACT_APP_PROJECT_USER;

// export const loggedInUser =
//   JSON.parse(localStorage.getItem(aguilaClient)) || null;

const httpService = axios.create({
  //baseURL: process.env.REACT_APP_BACKEND_URL,
  baseURL: "https://jsonplaceholder.typicode.com/",
  timeout: 15000,
  withCredentials: "include",
  headers: {
    "Content-Type": "application/json",
  },
});

httpService.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    // if (error.response && error.response.status === 401) {
    //   await httpService.post("auth/refreshtoken", {
    //     id: loggedInUser._id,
    //   });
    //   return httpService(error.config);
    // }

    if (error.response)
      return { error: error.response.data, status: error.response.status };
    return { error: "Lost connection to the server" };
  }
);
const logout = async () => {
  const res = await httpService.get("auth/logout");
  if (res) {
    localStorage.removeItem(aguilaClient);
    window.location.assign("/");
  }
};
export { httpService, logout };
