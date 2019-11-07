
const initialState = {
 cartSuccess: false,
 menuOpen: false,
 cartOpen: false,
 loggedIn: false,
 userData: {},
 cartItems: [
	 {title: "Some new shit", price: "3.99"}, //remove this later
	 {title: "Old Stuff", price: "3.99"}
	 ],
 productData: [],
 allCustomersData:[],
 searchTerm: "",
 form: {//Make this userForm *
 	email: "",
 	username: "",
 	password: "",
 	confirmPassword: "",
 	address: "",
 	state: "",
 	city: "",
 	zipCode: "",
 },
 login: {
 	username:"",
 	password:"",

 },
 productForm: {
 	breed: "",
 	productTitle: "",
 	description: "",
 	price: 0.00,
 	imageURL: "",
 	starRate: 0,
 	checkbox: true,
 	editID: 0,
 },
 activeLink: "Your Account",
 activeOption: "Customers",
 showProductDetail: false,
 activeProductDetail: {},
}

export default initialState;