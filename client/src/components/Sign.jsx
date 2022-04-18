import { Link } from "react-router-dom";

export default function Sign() {
    return (
        <div className="sign">
            <Link className="sign-element" to="/"> Daily Dose of Weirdness! </Link>
            <Link className="sign-element" to="/about"> About </Link>
            <Link className="sign-element" to="/other"> Other Videos! </Link>
        </div>
    );
}