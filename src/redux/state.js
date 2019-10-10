
const initialState = {
 loggedIn: false,
 userData: {},
 productData: [],
 searchTerm: "",
 form: {
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
 	productTitle: "",
 	description: "",
 	price: 0.00,
 	imageURL: "",
 	starRate: 0,
 	checkbox: true,
 	editID: 0,
 },
 activeLink: "Your Account",
 activeOption: "",
}

export default initialState;