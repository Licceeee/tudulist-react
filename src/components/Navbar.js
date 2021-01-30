import React from 'react';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-faded justify-content-center">
            <a href="/" className="navbar-brand d-flex w-50">
                <span><i className="fas fa-list"></i> TuDuList</span>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar3">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse w-100" id="collapsingNavbar3">
                <ul className="navbar-nav w-100 justify-content-center">
                    <li className="nav-item active">
                        <form className="form-inline">
                            <div className="md-form my-0">
                                <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                            </div>
                        </form>
                    </li>
                </ul>

                <ul className="nav navbar-nav ml-auto w-100 justify-content-end nav-right">
                    <li className="nav-item">
                        <a className="nav-link" href="#">About </a>
                    </li>
                    <li className="nav-item shadow-sm rounded">
                        <a className="nav-link btn btn-outline-light rounded" href="#"> Sign In/Up</a>
                    </li>
                </ul>
            </div>
    </nav>
    );
}

export default NavBar;
