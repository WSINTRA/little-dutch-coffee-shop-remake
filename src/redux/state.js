
const initialState = {
 loggedIn: false,
 userData: {},
 productData: [],
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
 activeOption: "Products",
}

export default initialState;