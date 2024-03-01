function Header() {
    return (
        <div className="heading">
            <h1 id="where-heading">Where in the World?</h1>
            <div className="dark-mode" id="darkMode">
                <img id="dark-mode-img" src="src/assets/moon-outline.svg" alt="darkmode-image" />
                <a href="#" id="dark-link">Dark Mode</a>
            </div>
        </div>
    );
}

export default Header;