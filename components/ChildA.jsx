// import { useContext } from "react";
// import { useFormState } from "react-hook-form";
// import { UserContext } from "../src/App";
import ChildB from "./ChildB";

function ChildA() {
    // const data = useContext(UserContext)
    return(
        <>
        <p>Child A</p>
        <ChildB/>
        </>
    )
}

export default ChildA