function Header(props) {
    return (
        <div className='flex shopping'>
            <div onClick={() => props.handleShow(false)}>
            <h1 className="site-title">CarPoint Shopping Site</h1>
            </div>
            <div onClick={() => props.handleShow(true)}>
                <span className="cart-icon">&#128722;</span> {/* Shopping cart icon */}

                <sup> {props.count} </sup>
            </div>
        </div>
    );
}

export default Header;
