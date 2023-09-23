import axios from "axios";

const Axios=axios.create({
    baseURL:"https://ecommerce-demo-bakend.onrender.com",
    headers:{
        'Content-Type':'application/json',
    }
});

export default Axios;