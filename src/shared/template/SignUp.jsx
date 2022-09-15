import React, { useState } from "react"
import { __createUser } from "../../services/user/UserService";
import { useHistory } from 'react-router-dom';

const SignUp = () => {

    const [currentUser, setCurrentUser] = useState({
        firstName: "",
        lastName: "",
        emailId: "",
        password: "",
        role: ""
    });
    const history = useHistory()


    const handleChange = (e) => {
        //console.log(e.target)
        const { name, value } = e.target
        console.log(name + ' : ' + value);
        //console.log(e.target.value)
        //setFirstName(e.target.value)
        setCurrentUser({
            ...currentUser,
            [name]: value
        })
    }


    const createEmployee = () => {

        __createUser(currentUser).then(
            (result) => {
                console.log(result)
                resetForm()
                history.push('/Login')
            }
        )
    }

    const resetForm = () => {
        console.log('We are in Reset Form')
        setCurrentUser({
            firstName: "",
            lastName: "",
            emailId: "",
            password: "",
            role: "",
            id: null
        })
    }

    return (
        <div className="row m-2">
            <div className="col-md-4">
                <input placeholder="first Name " className="form-control mb-3 mt-4"
                    value={currentUser.firstName}
                    onChange={handleChange}
                    name="firstName"
                />
                <input placeholder="last Name " className="form-control mb-3"
                    value={currentUser.lastName}
                    onChange={handleChange}
                    name="lastName"
                />
                <input placeholder="Email " className="form-control mb-3"
                    value={currentUser.emailId}
                    onChange={handleChange}
                    name="emailId"
                />
                <input placeholder="Password " className="form-control mb-3"
                    value={currentUser.password}
                    onChange={handleChange}
                    name="password"
                />
                <input placeholder="Role " className="form-control mb-3"
                    value={currentUser.role}
                    onChange={handleChange}
                    name="role"
                />
                <div className="row">
                    <div className="col-md-6">
                        <button className="btn btn-primary w-100" onClick={createEmployee}>
                            <i className="bi bi-save"></i>SAVE</button>
                    </div>
                    <div className="col-md-6">
                        <button className="btn btn-secondary w-100" onClick={resetForm}>
                            <i className="bi bi-arrow-clockwise" ></i>CLEAR</button>
                    </div>

                </div>
            </div>
        </div >
    )
}
export default SignUp