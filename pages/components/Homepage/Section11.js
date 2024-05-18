import Heading from "../common/Heading";
import style from "../../../styles/global.module.css";
import activity1 from '../../../public/activity1.jpg';
import activity2 from '../../../public/activity2.jpg';
import activity3 from '../../../public/activity3.jpg';
import activity4 from '../../../public/activity4.jpg';
import activity5 from '../../../public/activity5.jpg';
import activity6 from '../../../public/activity6.jpg';
import ItalicCustomHeading from "../common/ItalicCustomHeading";
import Image from "next/image";

export default function Section11() {
    return (
        <div className={`container-fluid ${style.containerWidth} p-md-5 px-3`}>
            <div className="row text-center">
                <ItalicCustomHeading italic={'Albums and images'} normal={'GALLERY'} />
                <Heading heading={'Discover our activities'} />
                <div className="col-md-6 mt-3">
                    <Image src={activity1} className="w-100 h-100 rounded-4" objectFit="cover" />
                </div>
                <div className="col-md-6 mt-3">
                    <Image src={activity2} className="w-100 h-100 rounded-4" objectFit="cover" />
                </div>
                <div className="col-md-3 col-sm-6 mt-3">
                    <Image src={activity3} className="w-100 h-100 rounded-4" objectFit="cover" />
                </div>
                <div className="col-md-3 col-sm-6 mt-3">
                    <Image src={activity4} className="w-100 h-100 rounded-4" objectFit="cover" />
                </div>
                <div className="col-md-3 col-sm-6 mt-3">
                    <Image src={activity5} className="w-100 h-100 rounded-4" objectFit="cover" />
                </div>
                <div className="col-md-3 col-sm-6 mt-3">
                    <Image src={activity6} className="w-100 h-100 rounded-4" objectFit="cover" />
                </div>
            </div>
        </div>
    );
}

