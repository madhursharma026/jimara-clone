import Heading from "../common/Heading";
import SubHeading from "../common/SubHeading";
import StaffIntro from "../common/StaffIntro";
import staff1URL from '../../../public/Staff1.png';
import staff2URL from '../../../public/Staff2.jpg';
import style from "../../../styles/global.module.css";
import ItalicCustomHeading from "../common/ItalicCustomHeading";

export default function Section3() {
    return (
        <div className={`${style.containerWidth} container-fluid mt-5`}>
            <div className="text-center">
                <ItalicCustomHeading italic={'Key staffs'} normal={'OP ALONE'} />
                <Heading heading="About us & Our founders" />
            </div>
            <div className="row px-md-2 px-5">
                <div className="col-xxl-6 col-xl-5 pt-3" style={{ margin: 'auto' }}>
                    <b><SubHeading subHeading="Save the Children was the first global movement for children, boldly declaring that children have rights. Today, we champion the rights of the world’s 2.3 billion children." /></b>
                    <SubHeading subHeading="Sociis aute euismod, vulputate. Porta amet Tortor nibh wisi saepe, facere dapibus necessitatibus voluptatum eos faucibus, mollit quod quo voluptatem. Cillum potenti, consequuntur cupiditate perferendis ac. Quas sed voluptatum, aliquid! Reiciendis magnam laudantium natoque natus. Necessitatibus parturient potenti laborum convallis phasellus similique quia adipisci." />
                    <div className="row">
                        <div className="col-sm-2 col-3">
                            <h1 className="bg-secondary text-center text-white p-2 rounded">☘</h1>
                        </div>
                        <div className="col-sm-10 col-9">
                            <b><SubHeading color='true' subHeading="By investing in children, we have the opportunity to create real, long-lasting change for families and communities around the world." /></b>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-6 col-xl-7" style={{ margin: 'auto' }}>
                    <div className="row">
                        <div className="col-md-6 mt-3">
                            <StaffIntro ImageURL={staff1URL} Name='ANDREW BOWE' Post='SUPPORT STAFF' />
                        </div>
                        <div className="col-md-6 mt-3">
                            <StaffIntro ImageURL={staff2URL} Name='Carla Culos' Post='Volunteer' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

