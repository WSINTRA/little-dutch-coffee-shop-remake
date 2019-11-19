
const initialState = {
 reviewActive: false,
 cartSuccess: false,
 menuOpen: false,
 cartOpen: false,
 loggedIn: false,
 userData: {},
 cartItems: [],
 productData: [],
 allCustomersData:[],
 searchTerm: "",
 editReviewForm: {
 	reviewTitle: "",
 	reviewContent: "",
 	reviewID: 0,
 	productID: ""
 },
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
 activeOption: "",
 showProductDetail: false,
 activeProductDetail: {},
}

export default initialState;