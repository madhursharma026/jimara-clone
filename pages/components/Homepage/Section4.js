import Image from 'next/image';
import Heading from '../common/Heading';
import SubHeading from '../common/SubHeading';
import Program1 from '../../../public/Program1.png';
import Program2 from '../../../public/Program2.jpg';
import Program3 from '../../../public/Program3.jpg';
import Program4 from '../../../public/Program4.png';
import Program5 from '../../../public/Program5.png';
import style from "../../../styles/global.module.css";
import styles from "../../../styles/Homepage/Homepage.module.css";
import ItalicCustomHeading from '../common/ItalicCustomHeading';

export default function Section4() {
    return (
        <div className={`${style.containerWidth} container-fluid mt-5 px-lg-5`}>
            <div className="text-center px-md-5">
                <ItalicCustomHeading italic={'Causes for'} normal={'OUR PROGRAMS'} />
                <Heading heading="Alone was the global movement for rights of children" />
                <b><SubHeading subHeading="Save the Children was the first global movement for children, boldly declaring that children have rights. Today, we champion the rights of the world’s 2.3 billion children." /></b>
                <SubHeading subHeading="Sociis aute euismod, vulputate. Porta amet Tortor nibh wisi saepe, facere dapibus necessitatibus voluptatum eos faucibus, mollit quod quo voluptatem. Cillum potenti, consequuntur cupiditate perferendis ac. Quas sed voluptatum, aliquid! Reiciendis magnam laudantium natoque natus. Necessitatibus parturient potenti laborum convallis phasellus similique quia adipisci." />
            </div>
            <div className="row px-md-0 mx-md-0 mx-sm-5 px-sm-5 px-3">
                <div className="col-md-3 mt-3 px-3">
                    <Image src={Program1} alt="#ImgNotFound" className="w-100 h-100" />
                </div>
                <div className="col-md-3 mt-3 px-3">
                    <div className={`text-center h-100 rounded-4 p-4`} style={{ background: '#F7D86F' }}>
                        <h1>☘</h1>
                        <b className="d-md-block d-none" style={{ fontSize: '1.5vw' }}>We believe human connections matter</b>
                        <b className="d-md-none d-block" style={{ fontSize: '4vw' }}>We believe human connections matter</b>
                    </div>
                </div>
                <div className="col-md-3 mt-3 px-3">
                    <div className={`text-center h-100 rounded-4 p-4`} style={{ background: '#EBF1EF' }}>
                        <b className="d-md-block d-none" style={{ fontSize: '1.5vw' }}>We seek understanding, build trust and create meaning in our work</b>
                        <b className="d-md-none d-block" style={{ fontSize: '4vw' }}>We seek understanding, build trust and create meaning in our work</b>
                    </div>
                </div>
                <div className="col-md-3 mt-3 px-3">
                    <div className={`${styles.ImgContainer} h-100`}>
                        <Image src={Program2} alt="#ImgNotFound" className="w-100 h-100" />
                        <div className={`${styles.ImgContainerData} d-md-block d-none`} style={{ color: '#306F5E', fontSize: '1.5vw' }}><b>Connection is more powerful than poverty</b></div>
                        <div className={`${styles.ImgContainerData} d-md-none d-block`} style={{ color: '#306F5E', fontSize: '4vw' }}><b>Connection is more powerful than poverty</b></div>
                    </div>
                </div>
                <div className="col-md-3 mt-3 px-3">
                    <div className={`${styles.ImgContainer} h-100`}>
                        <Image src={Program3} alt="#ImgNotFound" className="w-100 h-100" />
                        <div className={`${styles.ImgContainerData} d-md-block d-none`} style={{ color: '#306F5E', fontSize: '1.5vw' }}><b>We see potential in everyone, everywhere</b></div>
                        <div className={`${styles.ImgContainerData} d-md-none d-block`} style={{ color: '#306F5E', fontSize: '4vw' }}><b>We see potential in everyone, everywhere</b></div>
                    </div>
                </div>
                <div className="col-md-3 mt-3 px-3">
                    <Image src={Program4} alt="#ImgNotFound" className="w-100 h-100" />
                </div>
                <div className="col-md-3 mt-3 px-md-0 px-sm-5 px-3">
                    <div style={{ background: '#306F5E' }} className="h-100 rounded-4 p-4">
                        <div className="text-white d-md-block d-none" style={{ fontSize: '1.5vw' }}>We celebrate knowledge, creativity and innovation. Our global teams listen, adapt and take calculated risks, as needed.</div>
                        <div className="text-white d-md-none d-block" style={{ fontSize: '4vw' }}>We celebrate knowledge, creativity and innovation. Our global teams listen, adapt and take calculated risks, as needed.</div>
                    </div>
                </div>
                <div className="col-md-3 mt-3 px-3">
                    <Image src={Program5} alt="#ImgNotFound" className="w-100 h-100" />
                </div>
            </div>
        </div>
    );
}

