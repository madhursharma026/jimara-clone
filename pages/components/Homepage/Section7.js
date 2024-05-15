import Heading from "../common/Heading";
import { Button } from "react-bootstrap";
import SubHeading from "../common/SubHeading";
import style from "../../../styles/global.module.css";
import ItalicCustomHeading from "../common/ItalicCustomHeading";
import styles from "../../../styles/Homepage/Homepage.module.css";

export default function Section7() {
    return (
        <div className={`container-fluid ${styles.bgContainer2}`}>
            <div className={`${style.containerWidth} p-md-5 px-3 py-5 mt-lg-0 mt-5`}>
                <div className="row py-5">
                    <div className="col-xl-6 p-5 rounded-4" style={{ background: '#F8F5E9' }}>
                        <ItalicCustomHeading italic={'Give a gift'} normal={'TO HELP CHILDREN'} />
                        <Heading heading={'Give your support to children'} />
                        <b><SubHeading subHeading={'Your gift could provide a family with:'} /></b>
                        <div className="row my-4">
                            <div className="col-6">
                                <SubHeading color={true} subHeading={'Hygiene & household essentials'} />
                            </div>
                            <div className="col-6">
                                <SubHeading color={true} subHeading={'Telehealth & pharmacy services'} />
                            </div>
                            <div className="col-6">
                                <SubHeading color={true} subHeading={'Food for a family'} />
                            </div>
                            <div className="col-6">
                                <SubHeading color={true} subHeading={'Getting the education'} />
                            </div>
                        </div>
                        <div class="input-group input-group-lg">
                            <span class="input-group-text bg-success text-white" id="inputGroup-sizing-lg">$</span>
                            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" defaultValue={100} />
                        </div>
                        <div className="row">
                            <div className="col-xl-2 col-md-3 col-4 mt-3">
                                <button type="button" class="btn btn-outline-success w-100">$10</button>
                            </div>
                            <div className="col-xl-2 col-md-3 col-4 mt-3">
                                <button type="button" class="btn btn-outline-success w-100">$25</button>
                            </div>
                            <div className="col-xl-2 col-md-3 col-4 mt-3">
                                <button type="button" class="btn btn-outline-success w-100">$50</button>
                            </div>
                            <div className="col-xl-2 col-md-3 col-4 mt-3">
                                <button type="button" class="btn btn-outline-success w-100">$100</button>
                            </div>
                            <div className="col-xl-2 col-md-3 col-4 mt-3">
                                <button type="button" class="btn btn-outline-success w-100">$250</button>
                            </div>
                            <div className="col-xl-2 col-md-3 col-4 mt-3">
                                <button type="button" class="btn btn-outline-success w-100">Custom</button>
                            </div>
                        </div>
                        <Button variant="success" className={`px-4 py-2 mt-4 ${styles.DonateBtn} fs-5 rounded-5`}>Donate Now</Button>
                    </div>
                    <div className="col-xl-6 d-xl-block d-none"></div>
                </div>
            </div>
        </div>
    );
}

