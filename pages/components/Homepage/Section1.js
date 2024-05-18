import Image from "next/image";
import Heading from "../common/Heading";
import SubHeading from "../common/SubHeading";
import Image1 from '../../../public/Image1.png';
import style from "../../../styles/global.module.css";
import ItalicCustomHeading from "../common/ItalicCustomHeading";
import styles from "../../../styles/Homepage/Homepage.module.css";

export default function Section1() {
    return (
        <div className={`${style.containerWidth} container-fluid px-3 mt-xxl-5 mt-lg-3 mt-5 pt-xxl-5 pt-0`}>
            <div className="row px-4">
                <div className="col-lg-3 col-md-4" style={{ margin: 'auto' }}>
                    <div className="d-md-block d-none">
                        <div className="row">
                            <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-3">
                                <h1 className={styles.liNumber}>01</h1>
                            </div>
                            <div className="col-xxl-8 col-xl-9 col-lg-8 col-md-9">
                                <h5>More than 35 years of child sponsorship</h5>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-3">
                                <h1 className={styles.liNumber}>02</h1>
                            </div>
                            <div className="col-xxl-8 col-xl-9 col-lg-8 col-md-9">
                                <h5>Serving 200,000 children in 10 countries</h5>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-3">
                                <h1 className={styles.liNumber}>03</h1>
                            </div>
                            <div className="col-xxl-8 col-xl-9 col-lg-8 col-md-9">
                                <h5>67 community centers across the world</h5>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-3">
                                <h1 className={styles.liNumber}>04</h1>
                            </div>
                            <div className="col-xxl-8 col-xl-9 col-lg-8 col-md-9">
                                <h5>9,000 local volunteers help children</h5>
                            </div>
                        </div>
                    </div>

                    <div className="d-md-none d-block px-sm-4 px-5">
                        <div className="row">
                            <div className="col-sm-6 mt-4">
                                <div className="row">
                                    <div className="col-2">
                                        <h1 className={styles.liNumber}>01</h1>
                                    </div>
                                    <div className="col-10">
                                        <h5>More than 35 years of child sponsorship</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 mt-4">
                                <div className="row">
                                    <div className="col-2">
                                        <h1 className={styles.liNumber}>02</h1>
                                    </div>
                                    <div className="col-10">
                                        <h5>Serving 200,000 children in 10 countries</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 mt-4">
                                <div className="row">
                                    <div className="col-2">
                                        <h1 className={styles.liNumber}>03</h1>
                                    </div>
                                    <div className="col-10">
                                        <h5>67 community centers across the world</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 mt-4">
                                <div className="row">
                                    <div className="col-2">
                                        <h1 className={styles.liNumber}>04</h1>
                                    </div>
                                    <div className="col-10">
                                        <h5>9,000 local volunteers help children</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-5 d-lg-block d-none">
                    <Image src={Image1} style={{ width: '100%', objectFit:'contain' }} />
                </div>

                <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-2 pt-md-0 pt-5 text-md-start text-center" style={{ margin: 'auto' }}>
                    <ItalicCustomHeading italic={'Your support'} normal={'MAKES A DIFFERENCE'} />
                    <div className="mb-4">
                        <Heading heading="Make children’s life by sharing" />
                    </div>
                    <SubHeading subHeading="Sociis aute euismod, vulputate. Porta amet Tortor nibh wisi saepe, facere dapibus necessitatibus voluptatum eos faucibus, mollit quod quo voluptatem. Cillum potenti, consequuntur cupiditate perferendis ac. Quas sed voluptatum, aliquid! Reiciendis magnam laudantium natoque natus. Necessitatibus parturient potenti." />
                </div>
            </div>
        </div>
    );
}
