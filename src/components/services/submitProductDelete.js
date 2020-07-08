//delete product service
export const deleteProducts=(productsArray, removeOldProductsFromStore)=>{
	//Iterate over products array and delete from BackEnd 
	let idArray = productsArray.map(prod=> prod.id);
	//Then remove from the Data store
  productsArray.forEach(product=> removeOldProductsFromStore(product));
	fetch("http://localhost:3050/v1/delete_product", {
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

