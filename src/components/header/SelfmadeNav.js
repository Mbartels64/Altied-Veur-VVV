import "./Navbar.css";
const SelfMadeNav = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <nav className="navigation">
      <img
        src="https://i0.wp.com/altiedveurvvv.com/wp-content/uploads/2021/05/cropped-logo_large-1.png?fit=817%2C1500&ssl=1"
        alt=""
      />
      <Link to="/" className="brand-name">
        Altied Veur VVV
      </Link>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/forum">Forum</Link>
          </li>
          <li>
            <Link to="/socials">Socials</Link>
          </li>
          <li>
            <Link to="/sign-up">Sign Up</Link>
          </li>
          <li>
            <Link to="/signin">Log In</Link>
          </li>
        </ul>
        <div
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <i className="fa-solid fa-bars fa-2xl"></i>
        </div>
      </div>
    </nav>
  );
};

export default SelfMadeNav;
