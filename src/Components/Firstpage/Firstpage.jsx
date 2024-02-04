import "./Firstpage.css"
import Logo from './menu.svg';
const Firstpage = () => {
  return (
    <div className="root">
      <div className="firstcon">


        <div className="logo">
          <h1>Logo</h1>
        </div>
        <div className="links">
          <ul>
            <li>About Us</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Testimonials</li>
          </ul></div>
        <div className="but">
          <button>Get Started</button>
        </div>
      </div>

      <div className="image1">
        <img src={Logo} alt="" /></div>
      <div className="body">
        <div className="heading">
          Transforming Visions into Visuals,<br /> Unleash Your Creative Journey.
        </div>
        <div className="content">Delve into our design portfolio, and you'll uncover the essence of our<br /> creative vision. It's a testament to our artistic prowess, where<br /> innovation meets aesthetics, breathing life into every project.</div>
      </div>
    </div>
  );
};

export default Firstpage;
