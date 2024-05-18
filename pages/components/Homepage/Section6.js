import Image from "next/image";
import Heading from "../common/Heading";
import SubHeading from "../common/SubHeading";
import Graph from "../../../public/graph.png";
import style from "../../../styles/global.module.css";

export default function Section6() {
    return (
        <div className="pb-5" style={{ borderRadius: '50% 50% 0 0 / 80px 80px 0 0', background: 'white', marginTop: '-100px' }}>
            <div className={`${style.containerWidth} container-fluid mt-5 px-lg-5 pt-5`}>
                <div className="row pt-5">
                    <div className="col-lg-6">
                        <div className="row">
                            <div className="col-sm-5 pt-3 px-sm-0 px-5" style={{ margin: 'auto' }}>
                                {/* <Image src={Graph} alt="#ImgNotFound" className="w-100 h-100 px-sm-0 px-5" /> */}
                                <Image src={Graph} style={{ objectFit: 'contain', width: '100%' }} />
                            </div>
                            <div className="col-sm-7 pt-3" style={{ margin: 'auto' }}>
                                <SubHeading subHeading="In FY 2020, 85% of our total operating expenses supported programs for children and youth in 10 countries around the world." />
                                <ul>
                                    <li>
                                        <b><SubHeading subHeading="9,000 local volunteers help children" /></b>
                                    </li>
                                    <li>
                                        <b><SubHeading subHeading="67 community centers across the world" /></b>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6" style={{ margin: 'auto' }}>
                        <div className="row">
                            <div className="col-sm-6 mt-3">
                                <Heading color={true} heading="1 M+" />
                                <h2><b>Children helped</b></h2>
                                <SubHeading subHeading="When you sponsor a child, you change their future, helping them see beyond the daily struggles of poverty." />
                            </div>
                            <div className="col-sm-6 mt-3">
                                <Heading color={true} heading="80 +" />
                                <h2><b>Years of service</b></h2>
                                <SubHeading subHeading="Your sponsorship encompasses health, social and educational programs and resources." />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

