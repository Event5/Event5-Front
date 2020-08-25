import axios from "axios";

// EVENT5 API
// const URL_API = "https://event5.azurewebsites.net/api/auth/sign-up";

// function userRegister(info) {
//   return axios({
//     method: "post",
//     url: URL_API,
//     data: {
//       username: info.username,
//       email: info.email,
//       password: info.password,
//       type_user: info.type_user,
//     },
//   })
//     .then((response) => {
//       return console.log(response);
//     })
//     .catch((error) => {
//       return console.error(error);
//     });
// }

// TESTING API
const URL_API = "https://rickandmortyapi.com/api/characte/";

function userRegister(info) {
  return axios({
    method: "get",
    url: URL_API,
    // data: {
    //   username: info.username,
    //   email: info.email,
    //   password: info.password,
    //   type_user: info.type_user,
    // },
  })
    .then((response) => {
      console.log("ok");
      const res = "Go_ahead";
      return res;
    })
    .catch((error) => {
      console.log("no");
      const res = "Error";
      return;
    });
}

export default userRegister;
