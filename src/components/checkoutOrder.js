
const checkoutOrder =(orderData, userId)=> {

//write a submission to the backend server here.
fetch('http://localhost:3050/v1/orders/newOrder', {
            method: "POST",
                headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${localStorage.myJWT}`
                },
                body: JSON.stringify({
              	 "order": orderData,
              	 "userId": userId.id
              	
           		}) 
            }).then(res => res.json() ).then(data => console.log(data)) 
}

export default checkoutOrder;

