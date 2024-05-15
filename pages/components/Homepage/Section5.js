import Heading from "../common/Heading";
import Programs from "../common/Programs";
import SubHeading from "../common/SubHeading";
import style from "../../../styles/global.module.css";

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
                        <Programs ImageURL={'https://cdn.icon-icons.com/icons2/3247/PNG/512/hand_holding_heart_icon_199121.png'} HeadingTitle="Health" SubHeadingTitle={'Semper voluptate irure facere moles tias arcu, laoreet, cursus dolores suspendisse. Voluptatum porro, quod vulputate ante dicta iusto unde.'} SubHeadingTitle2={'87% on average our empowerment programs continue to have high completion rates.'} />
                    </div>
                    <div className="col-xl-3 col-md-6 mt-md-3 mt-5">
                        <Programs ImageURL={'https://static-00.iconduck.com/assets.00/open-book-emoji-1024x769-oyfx263r.png'} HeadingTitle="Education" SubHeadingTitle={'Semper voluptate irure facere moles tias arcu, laoreet, cursus dolores suspendisse. Voluptatum porro, quod vulputate ante dicta iusto unde.'} SubHeadingTitle2={'87% on average our empowerment programs continue to have high completion rates.'} />
                    </div>
                    <div className="col-xl-3 col-md-6 mt-md-3 mt-5">
                        <Programs ImageURL={'https://static-00.iconduck.com/assets.00/punch-emoji-512x406-62pjwhhn.png'} HeadingTitle="Empowerment" SubHeadingTitle={'Semper voluptate irure facere moles tias arcu, laoreet, cursus dolores suspendisse. Voluptatum porro, quod vulputate ante dicta iusto unde.'} SubHeadingTitle2={'87% on average our empowerment programs continue to have high completion rates.'} />
                    </div>
                    <div className="col-xl-3 col-md-6 mt-md-3 mt-5">
                        <Programs ImageURL={'https://static-00.iconduck.com/assets.00/gear-emoji-2045x2048-orqh5x5v.png'} HeadingTitle="Employment" SubHeadingTitle={'Semper voluptate irure facere moles tias arcu, laoreet, cursus dolores suspendisse. Voluptatum porro, quod vulputate ante dicta iusto unde.'} SubHeadingTitle2={'87% on average our empowerment programs continue to have high completion rates.'} />
                    </div>
                </div>
            </div>
        </div>
    );
}

