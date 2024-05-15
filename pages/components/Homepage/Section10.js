import Heading from "../common/Heading";
import { Button } from "react-bootstrap";
import SubHeading from "../common/SubHeading";
import style from "../../../styles/global.module.css";
import ItalicCustomHeading from "../common/ItalicCustomHeading";
import styles from '../../../styles/Homepage/Homepage.module.css';

export default function Section10() {
    return (
        <div className={`container-fluid ${style.containerWidth} p-md-5 px-3 mt-5`}>
            <div className="row">
                <div className="col-xl-5">
                    <div className="card bg-success rounded-5">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-xl-8">
                                    <h2 className="text-white p-3">
                                        Your help for children in need is changing lives.
                                    </h2>
                                </div>
                                <div className="col-xl-4 d-xl-block d-none" style={{ marginTop: '-180px' }}>
                                    <img src="https://alonethemes.com/wp-content/uploads/2021/09/jmr-child-2-min.png" alt="#ImgNotFound" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card rounded-5 border-0 mt-4" style={{ background: '#EAF1EF' }}>
                        <div className="card-body p-5">
                            <h2 className="text-success">
                                <b>Join us to learn how you can help make change for children</b>
                            </h2>
                            <div className="row">
                                <div className="col-md-6 mt-3">
                                    <label for="text1" className="form-label"><b>Name</b></label>
                                    <input type="text" className="form-control" id="text1" placeholder="Name" />
                                </div>
                                <div className="col-md-6 mt-3">
                                    <label for="text2" className="form-label"><b>Email</b></label>
                                    <input type="text" className="form-control" id="text2" placeholder="Email" />
                                </div>
                            </div>
                            <label for="text3" className="form-label mt-3"><b>Subject</b></label>
                            <input type="text" className="form-control" id="text3" placeholder="Subject" />
                            <label for="text4" className="form-label mt-3"><b>Message</b></label>
                            <textarea rows={5} className="form-control" id="text4" placeholder="Message" />
                            <Button variant="warning" className={`px-5 py-3 mt-4 w-100 ${styles.ViewAllPostsBtn}`}><b>Join Us</b></Button>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 offset-xl-1 mt-xl-0 mt-5">
                    <ItalicCustomHeading italic={'Join with us to'} normal={'MAKE DIFFERENCES'} />
                    <Heading heading={'Let be our volunteer'} />
                    <div className="mt-5">
                        <b><SubHeading subHeading={'Save the Children was the first global movement for children, boldly declaring that children have rights. Today, we champion the rights of the world’s 2.3 billion children.'} /></b>
                    </div>
                    <SubHeading subHeading={'Sociis aute euismod, vulputate. Porta amet Tortor nibh wisi saepe, facere dapibus necessitatibus voluptatum eos faucibus, mollit quod quo voluptatem. Cillum potenti, consequuntur cupiditate perferendis ac. Quas sed voluptatum, aliquid! Reiciendis magnam laudantium natoque natus. Necessitatibus parturient potenti laborum convallis phasellus similique quia adipisci.'} />
                    <div className="mt-5">
                        <b><SubHeading subHeading={'We work in the hardest-to-reach places, where it’s toughest to be a child.'} /></b>
                    </div>
                    <SubHeading subHeading={'Sociis aute euismod, vulputate. Porta amet Tortor nibh wisi saepe, facere dapibus necessitatibus voluptatum eos faucibus, mollit quod quo voluptatem. Cillum potenti, consequuntur cupiditate perferendis ac. Quas sed voluptatum, aliquid! Reiciendis magnam laudantium natoque natus. '} />
                    <div className="row">
                        <div className="col-xl-6 mt-3">
                            <div className="row">
                                <div className="col-xl-4 col-3">
                                    <div className="bg-warning text-center fs-3 p-3 rounded-5">
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
                                    <div className="bg-warning text-center fs-3 p-3 rounded-5">
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
