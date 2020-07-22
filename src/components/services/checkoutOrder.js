
const checkoutOrder =(orderData, userId)=> {
if(orderData.length >= 1){
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
            }).then(res => res.json() ).then(data => console.log("order placed", data)) 
}
else alert("Cart is empty")
}

export default checkoutOrder;

