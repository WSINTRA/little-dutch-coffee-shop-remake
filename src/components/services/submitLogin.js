import fetchCustomers from './customerFetch'

const submitLogin=(props)=>{
	fetch("http://localhost:3050/v1/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
               user:{
               	username: props.login.username,
                password: props.login.password
            } 
            })
        }).then(res => {
            if (!res.ok) {
                const error = new Error(res)
                error.message = res.statusText
                error.name = res.status
                throw error
            }
            return res.json()

            }).then(userData => {
            localStorage.setItem("myJWT", userData.jwt)
            if(userData.user.staff){
                //Put any specifics for staff login here
                fetchCustomers(props.allCustomers)
            }
            props.createStateFromFetch(userData.user)
        }).catch(err => {
            console.log("Error here",err)
            alert("Incorrect username or password");
        }).then(() => props.history.push("/"));
    
}

export default submitLogin;