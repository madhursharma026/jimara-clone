import Heading from "../common/Heading";
import { Button } from "react-bootstrap";
import SubHeading from "../common/SubHeading";
import style from "../../../styles/global.module.css";
import formTattoo from "../../../public/formTattoo.png";
import ItalicCustomHeading from "../common/ItalicCustomHeading";
import styles from '../../../styles/Homepage/Homepage.module.css';
import Image from "next/image";

export default function Section10() {
    return (
        <div className={`container-fluid ${style.containerWidth} p-md-5 px-3 mt-5`}>
            <div className="row">
                <div className="col-lg-6">
                    <div className="card bg-success rounded-5">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-xl-9">
                                    <h2 className="text-white p-3">
                                        Your help for children in need is changing lives.
                                    </h2>
                                </div>
                                <div className="col-xl-3 d-xl-block d-none p-0" style={{ marginTop: '-180px' }}>
                                    <Image src={formTattoo} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`h-100 ${styles.IFrameStyle}`}>
                        <iframe aria-label='Join us to learn how you can help make change for children' frameborder="0" style={{ width: "100%", border: "none" }} className={`mt-4 h-100`} src='https://forms.zohopublic.in/madhursharma220055/form/Joinustolearnhowyoucanhelpmakechangeforchildren/formperma/yZEO15Y4oYBxQDX1CWY8sf2hVWsiWZuJ_7fsftZmovs'></iframe>
                    </div>
                </div>
                <div className="col-lg-6 mt-lg-0 mt-5">
                    <div className="mt-5 pt-5">
                        <ItalicCustomHeading italic={'Join with us to'} normal={'MAKE DIFFERENCES'} />
                    </div>
                    <div className="mt-3">
                        <Heading heading={'Let be our volunteer'} />
                    </div>
                    <div className="mt-5">
                        <b><SubHeading subHeading={'Save the Children was the first global movement for children, boldly declaring that children have rights. Today, we champion the rights of the world’s 2.3 billion children.'} /></b>
                    </div>
                    <SubHeading subHeading={'Sociis aute euismod, vulputate. Porta amet Tortor nibh wisi saepe, facere dapibus necessitatibus voluptatum eos faucibus, mollit quod quo voluptatem. Cillum potenti, consequuntur cupiditate perferendis ac. Quas sed voluptatum, aliquid! Reiciendis magnam laudantium natoque natus. Necessitatibus parturient potenti laborum convallis phasellus similique quia adipisci.'} />
                    <div className="mt-5">
                        <b><SubHeading subHeading={'We work in the hardest-to-reach places, where it’s toughest to be a child.'} /></b>
                    </div>
                    <SubHeading subHeading={'Sociis aute euismod, vulputate. Porta amet Tortor nibh wisi saepe, facere dapibus necessitatibus voluptatum eos faucibus, mollit quod quo voluptatem. Cillum potenti, consequuntur cupiditate perferendis ac. Quas sed voluptatum, aliquid! Reiciendis magnam laudantium natoque natus. '} />
                    <div className="row mt-5">
                        <div className="col-xl-6 mt-3">
                            <div className="row">
                                <div className="col-xl-4 col-3">
                                    <div className="bg-warning text-center fs-3 py-3 px-2 rounded-5">
                                        <span className="bg-white rounded-circle px-3 py-2"><i className="fa fa-star-o"></i></span>
                                        <br />
                                        <h3 className="mt-3">5.0</h3>
                                    </div>
                                </div>
                                <div className="col-xl-8 col-9" style={{ margin: 'auto' }}><h4 className='text-success'><b>Kind supporters rated our works</b></h4></div>
                            </div>
                        </div>
                        <div className="col-xl-6 mt-3">
                            <div className="row">
                                <div className="col-xl-4 col-3">
                                    <div className="bg-warning text-center fs-3 py-3 px-2 rounded-5">
                                        <span className="bg-white rounded-circle px-3 py-2"><i className="fa fa-users"></i></span>
                                        <br />
                                        <h3 className="mt-3">4K</h3>
                                    </div>
                                </div>
                                <div className="col-xl-8 col-9" style={{ margin: 'auto' }}><h4 className='text-success'><b>Number of new volunteers joining</b></h4></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
