import axios from "axios";

const mockUrl="http://localhost:8081/users";

const __getAllCustomer = () =>{
    return axios.get(mockUrl);
}

export {
    __getAllCustomer
}