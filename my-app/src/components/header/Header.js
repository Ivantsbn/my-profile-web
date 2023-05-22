import "./style.css"

const Header = () => {
    return ( <header className="header">
        <div className="header__wrapper">
            <h1 className="header__title">
                <canvas id="canvasOne" width="900" height="500">
                </canvas><br />
                    <strong>Hi, my name is <em>Ivan</em></strong><br />
                    and I'm full stack developer
                </h1>
                <div className="header__text">
                    <p>I will create custom website for you.</p>
                </div>
                <a href="/projects.html" className="btn">My projects</a>
        </div>
    </header>
 );
}
 
export default Header;