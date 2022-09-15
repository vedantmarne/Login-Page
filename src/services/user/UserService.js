import axios from "axios";

const mockUrl="http://localhost:8081/users"

const __getAllUser = () =>{
    return axios.get(mockUrl)
}

const __createUser = (user) => {
    return axios.post(mockUrl ,user)
}

export {
    __getAllUser, __createUser
}   