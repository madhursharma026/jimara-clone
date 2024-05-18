import Heading from "../common/Heading";
import Programs from "../common/Programs";
import SubHeading from "../common/SubHeading";
import style from "../../../styles/global.module.css";
import HealthLogo from '../../../public/HealthLogo.png';
import EducationLogo from '../../../public/EducationLogo.png';
import EmploymentLogo from '../../../public/EmploymentLogo.png';
import EmpowermentLogo from '../../../public/EmpowermentLogo.png';

export default function Section5() {
    return (
        <div className="pb-5" style={{ borderRadius: '50% 50% 0 0 / 80px 80px 0 0', background: '#F8F5E9', marginTop: '100px' }}>
            <div className={`${style.containerWidth} container-fluid mt-5 px-lg-5`} style={{paddingBottom:'100px'}}>
                <div className="row pt-5">
                    <div className="col-lg-5 pt-3" style={{ margin: 'auto' }}>
                        <Heading color={true} heading="The right programs at the right time" />
                    </div>
                    <div className="col-lg-7 pt-3 border-start border-4 border-success" style={{ margin: 'auto' }}>
                        <b><SubHeading subHeading="Today, we champion the rights of the world’s 2.3 billion children." /></b>
                        <SubHeading subHeading="Sociis aute euismod, vulputate. Porta amet Tortor nibh wisi saepe, facere dapibus necessitatibus voluptatum eos faucibus, mollit quod quo voluptatem. Cillum potenti, consequuntur cupiditate perferendis ac. Quas sed voluptatum, aliquid!" />
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-xl-3 col-md-6 mt-md-3 mt-5">
                        <Programs ImageURL={HealthLogo} HeadingTitle="Health" SubHeadingTitle={'Semper voluptate irure facere moles tias arcu, laoreet, cursus dolores suspendisse. Voluptatum porro, quod vulputate ante dicta iusto unde.'} SubHeadingTitle2={'87% on average our empowerment programs continue to have high completion rates.'} />
                    </div>
                    <div className="col-xl-3 col-md-6 mt-md-3 mt-5">
                        <Programs ImageURL={EducationLogo} HeadingTitle="Education" SubHeadingTitle={'Semper voluptate irure facere moles tias arcu, laoreet, cursus dolores suspendisse. Voluptatum porro, quod vulputate ante dicta iusto unde.'} SubHeadingTitle2={'87% on average our empowerment programs continue to have high completion rates.'} />
                    </div>
                    <div className="col-xl-3 col-md-6 mt-md-3 mt-5">
                        <Programs ImageURL={EmpowermentLogo} HeadingTitle="Empowerment" SubHeadingTitle={'Semper voluptate irure facere moles tias arcu, laoreet, cursus dolores suspendisse. Voluptatum porro, quod vulputate ante dicta iusto unde.'} SubHeadingTitle2={'87% on average our empowerment programs continue to have high completion rates.'} />
                    </div>
                    <div className="col-xl-3 col-md-6 mt-md-3 mt-5">
                        <Programs ImageURL={EmploymentLogo} HeadingTitle="Employment" SubHeadingTitle={'Semper voluptate irure facere moles tias arcu, laoreet, cursus dolores suspendisse. Voluptatum porro, quod vulputate ante dicta iusto unde.'} SubHeadingTitle2={'87% on average our empowerment programs continue to have high completion rates.'} />
                    </div>
                </div>
            </div>
        </div>
    );
}

