
const submitRegistration =(formDetails)=> {
//write a submission to the backend server here.
fetch('http://localhost:3050/v1/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },
  body: JSON.stringify({
    user: {
      username: formDetails.username,
      password: formDetails.password,
      address: formDetails.address,
      state: formDetails.state,
      city: formDetails.city,
      email:formDetails.email,
      zip: formDetails.zip,
    }
  })
})
  .then(res => {
                
                if (!res.ok) {
                    const error = new Error(res);
                    error.message = res.statusText;
                    error.name = res.status;
                    throw error;
                }
                return res.json()
                }).then(userData => {
                    localStorage.setItem("myJWT", userData.jwt)
                                       
                }).then(() => alert("Success, User auto logged in"))
                    .catch(err => {
                        alert(err);
                    })
}

export default submitRegistration;