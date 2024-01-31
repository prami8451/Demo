import "./Firstpage.css"
import Logo from './menu.svg';
const Firstpage = () => {
  return (
    <div className="first">

      <h1 className="logo">logo</h1>
      <ul>

        <li>Testimonials</li>
        <li>Portfolio</li>
        <li>Services</li>
        <li>About Us</li>
      </ul>
      <div className="button">
        <button className="start">Get Started</button>
      </div>
      <p className="trans">Transforming Visions into Visuals,<br />Unleash Your Creative Journey.</p>
      <p className="content">Delve into our design portfolio, and you'll uncover the essence of our<br />creative vision. It's a testament to our artistic prowess, where<br /> innovation meets aesthetics, breathing life into every project.</p>





    </div>

  );
  // return (
  //   <div className="root">
  //     <div className="navbar">
  //       <div className="logo-div">
  //         <h1 className="logo">Logo</h1>
  //       </div>
  //       <div className="nav-contents">
  //         <div className="links">
  //           <ul>
  //             <li>Home</li>
  //             <li>AboutUs</li>
  //             <li>Services</li>
  //             <li>Portfolio</li>
  //           </ul>
  //         </div>
  //         <div className="get-started">
  //           <button>Get Started</button>
  //         </div>
  //       </div>
  //       <div className="menu">
  //         <img src={Logo} alt="" />
  //       </div>
  //     </div>
  //     <div className="body">
  //       <div className="title"><p className="trans">Transforming Visions into Visuals,<br />Unleash Your Creative Journey.</p></div>
  //       <div className="desc"><p className="content">Delve into our design portfolio, and you'll uncover the essence of our<br />creative vision. It's a testament to our artistic prowess, where<br /> innovation meets aesthetics, breathing life into every project.</p></div>
  //     </div>
  //   </div>
  // )
  
};

export default Firstpage;
