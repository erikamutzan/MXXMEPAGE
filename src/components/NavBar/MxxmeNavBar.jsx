import React from "react";
import "./MxxxmeNavBar.css";

function MxxxmeNavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        CODE MXXME
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">
                                    Inicio
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Cursos
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Aplicaciones
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Juegos
                                </a>
                            </li>
                                <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Plataformas
                                </a>
                            </li>
                                <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Tips
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default MxxxmeNavBar;
