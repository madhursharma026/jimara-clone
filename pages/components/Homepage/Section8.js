import Image from "next/image";
import Heading from "../common/Heading";
import SubHeading from "../common/SubHeading";
import player from "../../../public/player.gif";
import Children from "../../../public/children.png";
import style from "../../../styles/global.module.css";
import ItalicCustomHeading from "../common/ItalicCustomHeading";

export default function Section8() {
    return (
        <div className={`container-fluid ${style.containerWidth} p-md-5 px-3`}>
            <div className="row">
                <div className="col-xl-6 p-4" style={{ margin: 'auto' }}>
                    <ItalicCustomHeading italic={'Stories/videos'} normal={'Poor children, disabled, cancer,...'} />
                    <Heading heading={'Long-term annual funds for children'} />
                    <SubHeading subHeading={'Save the Children was the first global movement for children, boldly declaring that children have rights. Today, we champion the rights of the world’s 2.3 billion children. Quas sed voluptatum, aliquid reiciendis magnam laudantium natoque natus ecessitatibus parturient potenti laborum.'} />
                </div>
                <div className="col-xl-6 p-5 rounded-4" style={{ background: '#306F5E', margin: 'auto' }}>
                    <Image src={Children} alt="#ImgNotFound" className="w-100 h-auto" />
                    <div className="text-end" style={{ marginTop: '-70px' }}>
                        <img src={player.src} alt="#ImgNotFound" width={'150px'} />
                    </div>
                </div>
            </div>
        </div>
    );
}
