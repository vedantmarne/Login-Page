import React from 'react';
import { Button,Paper,TextField } from '../my-cart-material'
import { PersonOutlineIcon } from '../my-cart-icons'
import { __getAllUser } from '../../services/user/UserService';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';


const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const history = useHistory()

    const checkUserLogin = (data) => {
        console.log(data);
        __getAllUser().then(
            (result) => {
                console.log(result);
                let currentUser = result.data.find(
                    (user) =>
                        // console.log('User Email Id : ' + user.emailId);
                        // console.log('Json Email Id : ' + data.emailId);
                        // console.log('User password : ' + user.password);
                        // console.log('Json password : ' + data.password);
                        user.emailId == data.emailId
                        && user.password == data.password

                )
                console.log(currentUser);
                if (currentUser != undefined)
                localStorage.setItem('USER', JSON.stringify(currentUser))
                    history.push('/home/' + currentUser.role + '/dashboard')
                let cUser = JSON.parse(localStorage.getItem('USER'))
                console.log(cUser);
            }
        )
    }

    const SignUp = () =>{
        history.push('/SignUp')

    }

    const webbody = {
        backgroundColor: "#006999",
        justifyContent: "center",
        alignItem: "center"
    }

    return (
        <div style={webbody}>
            <Paper elevation={4} className='col-md-3 p-4 m-4'>
                <div >
                    <TextField variant="standard" label="Email" className="w-100"
                        {...register('emailId', { required: true })} />
                </div>
                {
                    errors.emailId && <span className='error'>
                        Enter Email Id
                    </span>
                }

                <div >
                    <TextField variant="standard" label="Password" className="w-100 mt-2"
                        {...register('password', { required: true })} />
                </div>
                {
                    errors.password && <span className='error'>
                        Enter Password
                    </span>
                }

                <div className='mt-2'>
                    <Button className='m-2' variant="contained" onClick={handleSubmit(checkUserLogin)}><PersonOutlineIcon /> Login</Button>
                    <Button variant="contained" onClick={SignUp}><PersonOutlineIcon /> SignUp</Button>
                </div>
            </Paper>
        </div>

        


    );
}

export default Login;
