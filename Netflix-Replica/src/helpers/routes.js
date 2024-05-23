import { Navigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
/// Updating Paths to V6 pattern and Firebase Modular SDK
//// SO FAR IS WORKING, BUT NOT SURE IF ITS THE BEST WAY TO GO ABOUT IT


export function UserRedirect({children, path}){
    
    const auth = getAuth();
    const user = auth.currentUser; // check current user everytime User Redirect is fired.
    // PROBLEM HERE -> USER COMES BACK AS EMPTY EVERY TIME WE RELOAD
        if(!user){
            return children
        }else{
           return <Navigate to={path}/>
        }

}

export function ProtectedRoute({children, path}){
    
    const auth = getAuth();
    const user = auth.currentUser;
  
        if(user){
            return children
            
        }else{   
           return <Navigate to={path}/>
        }

}