// import {createFakeData} from './data'

const initialState = {
 buttonPress: `1px 1px 5px 1px, 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
 0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
 0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
 0 100px 80px rgba(0, 0, 0, 0.12)`,
 reviewActive: false,
 cartSuccess: false,
 menuOpen: false,
 loggedIn: false,
 userData: {},
 cartPos: 0,
 cartItems: [],
 cartItemQuantity: 0,
 productData: [],
 filteredProducts: [],
 allCustomersData:[],
 searchTerm: "",
 editReviewForm: {
 	reviewTitle: "",
 	reviewContent: "",
 	reviewID: 0,
	 productTitle: "",
	 productID: 0
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
 employeeForm:{
 	name:"",
 	email: "",
 	status: "",
 	address: "",
 	city: "",
 	zip: "",
 	password: "p455w0rd"
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