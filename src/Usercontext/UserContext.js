import { createContext, useState } from "react";


export const UserContext=createContext()



function UserContextProvider(props){
    const[userToken,setuserToken]=useState(null)
    return(
<UserContext.Provider value={{userToken,setuserToken}}>
{props.children}
</UserContext.Provider>
    )
}
export default UserContextProvider