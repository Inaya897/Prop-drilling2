
// import React, {useContext} from "react"
// import { UserContext } from "../../prop-drilling/src/App";
import ChildC from "./ChildC";


function ChildB() {
    // const data = useContext(UserContext)
    return(
        <>
        <p>Child B</p>
        <ChildC/>

        </>
    )
}

export default ChildB