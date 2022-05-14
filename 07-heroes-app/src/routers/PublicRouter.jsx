import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/authContext";


export const PublicRouter = ( { children }) => {

    const {user} = useContext(AuthContext);
    
    console.log(user);

    return user.logged ? <Navigate to={-1} /> : children

}
