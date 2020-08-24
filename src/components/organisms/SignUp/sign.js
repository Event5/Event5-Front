// import axios from 'axios'

// axios.post('/user', {
//   firstName: 'Fred',
//   lastName: 'Flintstone'
// })
// .then(function (response) {
//   console.log(response);
// })
// .catch(function (error) {
//   console.log(error);
// });

// async function Register(){

//

// function Register (e) {
//   e.preventSubmit()
//   console.log()
// }

// export default Register

export const handleInput = (event) => {
  setValues({
    ...form,
    [event.target.name]: event.target.name,
  });
};

export const handleSubmit = (event) => {
  event.preventDefault();
  console.log(form);
};
