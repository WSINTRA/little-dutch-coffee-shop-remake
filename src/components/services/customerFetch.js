

const fetchCustomers=(allCustomers)=> {
//write a submission to the backend server here.
fetch('http://localhost:3050/v1/admin_menu/customers', {
            method: "GET",
                headers: {
                Authorization: `Bearer ${localStorage.myJWT}`
                }
            })
           .then(res => res.json() ).then(data => allCustomers(data)) 
}

export default fetchCustomers;
