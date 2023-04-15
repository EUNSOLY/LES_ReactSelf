import { Link } from 'react-router-dom';
function Header() {
  return (
    <header className="Header mw">
      <Link to="/" className="logo">
        <img src={`${process.env.PUBLIC_URL}/img/logo.svg`} alt="logo" />
      </Link>
      <div>
        <nav className="gnb">
          <Link to="/Shop">Shop</Link>
          <Link to="/Blog">Blog</Link>
          <Link to="/OurStory">Our Story</Link>
        </nav>
        <nav className="icon">
          <Link to="/Search">
            <i className="fa-solid fa-magnifying-glass"></i>
          </Link>
          <Link to="/Search">
            <i className="fa-solid fa-cart-shopping"></i>
          </Link>
          <Link to="/Search">
            <i className="fa-solid fa-user"></i>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
