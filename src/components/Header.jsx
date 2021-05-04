import { Link } from "react-router-dom";
const Header = () => {

    return (
        <header>
            <Link to="/">Notes</Link>
            <Link to="/add">Add Notes</Link>
        </header>
    )
}

export default Header