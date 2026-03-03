export default function Header(){
    return <>
         <header>
        <nav className="navbar navbar-expand-lg navbar-dark ">
        <div className="container-fluid">
            <h1 className="navbar-brand " id="logo">MY <span>Portfolio</span></h1>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>
        <div className="collapse navbar-collapse " id="navbarNav" >
        <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#home"> Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#about"> About</a></li>
            <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
            <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
        </ul>
        </div>
        </div>
        </nav>
    </header>
    </>
}