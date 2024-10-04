import { useRouteError } from "react-router-dom";

const Error = () =>{
    const err = useRouteError();
    return (
        <div className="error">
            <h1>Error</h1>
            <h2>{err.status}</h2>
        </div>
    );
};

export default Error;