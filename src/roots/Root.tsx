import Spline from "@splinetool/react-spline";
import '../App.css';

const Root = () => {

    return (
        <div className="secondPage">
            <div><a href={'/'}>Back to main </a></div>
            <div className="wrapper">
                <Spline scene="https://prod.spline.design/hBcFuNagRnM09C4V/scene.splinecode" />
            </div >
        </div>
    );
};

export default Root;