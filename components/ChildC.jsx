import { useFormState } from "react-hook-form";
import React, {useContext} from "react"
import { UserContext } from "../src/App";

function ChildC() {
    const data = useContext(UserContext)

    return(
        <>
        <p>Child c has {data}</p>
        </>
    )
}
export default ChildC