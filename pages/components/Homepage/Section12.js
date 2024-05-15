import Heading from "../common/Heading";
import StaffIntro from "../common/StaffIntro";
import staff1URL from '../../../public/Staff1.png';
import staff2URL from '../../../public/Staff2.jpg';
import staff3URL from '../../../public/Staff3.png';
import staff4URL from '../../../public/Staff4.png';
import style from "../../../styles/global.module.css";
import ItalicCustomHeading from "../common/ItalicCustomHeading";

export default function Section12() {
    return (
        <div className={`container-fluid ${style.containerWidth} p-md-5 px-3`}>
            <div className="row text-center">
                <ItalicCustomHeading italic={'See our'} normal={'Team'} />
                <Heading heading={'Meet our members'} />
                <div className="col-xl-3 col-md-6 mt-3">
                    <StaffIntro ImageURL={staff1URL} Name='Andrew Bowe' Post='Support Staff' />
                </div>
                <div className="col-xl-3 col-md-6 mt-3">
                    <StaffIntro ImageURL={staff2URL} Name='Carla Culos' Post='Volunteer' />
                </div>
                <div className="col-xl-3 col-md-6 mt-3">
                    <StaffIntro ImageURL={staff3URL} Name='Alisha Mahen' Post='Volunteer' />
                </div>
                <div className="col-xl-3 col-md-6 mt-3">
                    <StaffIntro ImageURL={staff4URL} Name='Alexandra Trab' Post='Support Staff' />
                </div>
            </div>
        </div>
    );
}
