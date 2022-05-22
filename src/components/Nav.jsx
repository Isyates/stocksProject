import { Link } from "react-router-dom";

export default function Nav(){

return(
    <div className='Nav'>
        <Link to={'/stocks'}>
            <div>Link to Home</div>
        </Link>
        <Link to={'/about'}>
            <div>Link to About</div>
        </Link>
    </div>
)
}