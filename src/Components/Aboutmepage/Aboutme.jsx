import "./Aboutme.css"
import Image from '../../assets/aboutUs.jpg';
const Aboutme = () => {
    return (
        <div className="secpage">
            <div className="about">About us</div>
            <div className="double1">
                <div className="img">
                  <img src={Image} className="image" alt="" />
                </div>
                <div className="text">
                    <p>_ARTSY.ISHU_ will work as your creative partner to styleframe your brand designs , art , & illustrations with perfect ideology.Also i am doing customized works ( Painting ,Pencil  Sketch , Illustarations etc..) that you can gift  to your friends & family.
                    </p>
                </div>
            </div>
        </div>
    );
};
export default Aboutme;