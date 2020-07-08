//delete product service
export const deleteProducts=(idArray)=>{
	//Iterate over products array and delete from BackEnd 
	
	
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

