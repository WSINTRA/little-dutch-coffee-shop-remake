//delete product service
export const deleteProducts=(idArray)=>{
 //Backend can take an array of ID's and delete those
	fetch("http://localhost:3050/v1/delete_products", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.myJWT}`,
        },
        body: JSON.stringify({
          id_array: idArray
        }),
      })
	.then(res=> res.json())
	.then(console.log())

}

