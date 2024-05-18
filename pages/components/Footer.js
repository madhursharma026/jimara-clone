import Image from "next/image";
import Children from "../../public/children.png";
import style from "../../styles/global.module.css";
import styles from '../../styles/Footer.module.css';

export default function Footer() {
    return (
        <div className={styles.FooterContainer}>
            <div className={`container-fluid ${style.containerWidth} p-5 mt-5`}>
                <div className="row text-white">
                    <div className="col-xl-6">
                        <div className="row">
                            <div className="col-md-7">
                                <h3 className="text-warning mt-3">Where we help</h3>
                                <div className="row">
                                    <div className="col-6">
                                        <ul style={{ listStyleType: 'none', padding:'0' }}>
                                            <li><h5>Our Stories</h5></li>
                                            <li><h5>Our Works</h5></li>
                                            <li><h5>FAQs</h5></li>
                                            <li><h5>Contact Us</h5></li>
                                            <li><h5>Donate Now</h5></li>
                                        </ul>
                                    </div>
                                    <div className="col-6">
                                        <ul style={{ listStyleType: 'none', padding:'0' }}>
                                            <li><h5>Health</h5></li>
                                            <li><h5>Education</h5></li>
                                            <li><h5>Empowerment</h5></li>
                                            <li><h5>Employment</h5></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <h3 className="text-warning mt-3">Featured stories</h3>
                                <h5>Sees boom in younger volunteers following pandemic</h5>
                                September 14, 2023
                                <br />
                                <br />
                                <h5>Breaking Barriers: Empowering Women in Sports</h5>
                                June 11, 2023
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <h3 className="text-warning mt-3">News & videos</h3>
                        <div className="row">
                            <div className="col-sm-6" style={{margin:'auto'}}>
                                <Image src={Children} alt="#ImgNotFound" className="w-100 h-auto" />
                            </div>
                            <div className="col-sm-6 mtsm-0 mt-3">
                                <h2>Subscribe our newsletter and get updates early</h2>
                                <h6>Subscribe to the newsletter and get all new updates early in one place</h6>
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Your Email Here..." aria-label="Your Email Here..." aria-describedby="basic-addon2" />
                                    <span class="input-group-text bg-warning" id="basic-addon2">SEND</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

