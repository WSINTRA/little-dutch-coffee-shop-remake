
const initialState = {
 cartSuccess: false,
 menuOpen: false,
 cartOpen: false,
 loggedIn: false,
 userData: {},
 cartItems: [{title: "Some new shit", price: "3.99"}, {title: "Old Stuff", price: "3.99"}],
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
 showProductDetail: false,
 activeProductDetail: {},
}

export default initialState;