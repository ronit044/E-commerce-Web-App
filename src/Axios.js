import axios from "axios";

const Axios=axios.create({
    // baseURL:"https://ecommerce-demo-bakend.onrender.com"
    baseURL:"http://localhost:5000",
    headers:{
        'Content-Type':'application/json',
    }
});

export default Axios;