import { Typography , MenuItem, Toolbar } from '../my-cart-material';
import React from 'react';
import { AllMenu } from '../../model/UserModel';
import { useHistory } from 'react-router-dom';

const MyCartMenu = ({ role }) => {

    const history=useHistory()

    const handleMenu = (property) =>{
        history.push('/home/' + role +'/' +property)
    }

    return (
        <div style={{'display' : 'flex'}}>
            
        {
            AllMenu[0][role] && AllMenu[0][role].map((menu,index)=>(
                <MenuItem key={index} 
                onClick={()=>handleMenu(menu.property)}>
                            <Typography>{menu.icon}{menu.label}</Typography>
                </MenuItem>
            ))
        }
        </div>  
    );
}

export default MyCartMenu;
