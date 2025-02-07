const Header = ({ title }) => {

    return (<nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">{title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Books</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Authors</a>
                    </li>

                </ul>
                <ul className="navbar-nav container-fluid ">
                    <li className="nav-item dropdown d-flex">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Membership
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Login</a></li>
                            <li><a className="dropdown-item" href="#">Register</a></li>
                            <li><a className="dropdown-item" href="#">Pricing</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>)
}

export default Header;