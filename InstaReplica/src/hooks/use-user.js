import { useState, useEffect } from 'react';
import { getUserByUserId } from '../services/firebase';


// useUser is a custom hook
export default function useUser(userId) {
  const [activeUser, setActiveUser] = useState(); /* UseState is a primitive. We can give an initial value to state inside UseState()
  activeUser is a reactive value / state and setActiveUser is the setter
  Proivdes a cleaner code than creating a class
  */

  useEffect(() => { /* Use effect replaces ComponentDidMount, CompononetDidUnmount etc.. 
    It will runs once state is initialized and will run again everytime the state updates.
    If we need to run code after the component is destroyed all we need to do is to add a return to the function
  */
    async function getUserObjByUserId(userId) { // Firebase service function
      const [user] = await getUserByUserId(userId);
      setActiveUser(user || {});
    }

    if (userId) {
      getUserObjByUserId(userId);
    }
  }, [userId]); /* [userId] is a dependency. This array indicates what we want to track to run the function again. 
  If left enpty it only runs once
  */

  return { user: activeUser, setActiveUser };
}
