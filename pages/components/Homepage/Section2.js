import Heading from "../common/Heading";
import { Button } from "react-bootstrap";
import SubHeading from "../common/SubHeading";
import style from "../../../styles/global.module.css";
import ItalicCustomHeading from "../common/ItalicCustomHeading";
import styles from "../../../styles/Homepage/Homepage.module.css";

export default function Section1() {
    return (
        <div className={`${style.containerWidth} container-fluid ${styles.bgContainer} p-md-5 px-3 py-5 mt-lg-0 mt-5`}>
            <div className="p-3">
                <ItalicCustomHeading italic={'Scholarship fund'} normal={'Up to $20,000'} />
                <Heading heading="Fund for poor children" />
                <div className="mt-4" style={{ maxWidth: '700px' }}>
                    <SubHeading subHeading="Sociis aute euismod, vulputate. Porta amet Tortor nibh wisi saepe, facere dapibus necessitatibus voluptatum eos faucibus, mollit quod quo voluptatem. Cillum potenti, consequuntur cupiditate perferendis ac. Quas sed voluptatum, aliquid reiciendisma…" />
                    <div className="row">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-2"><i class='fa fa-book fs-3'></i></div>
                                <div className="col-10"><SubHeading subHeading='Books and learning tools' /></div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-2"><i class='fa fa-trophy fs-3'></i></div>
                                <div className="col-10"><SubHeading subHeading='$18,590 Raised of $20,000' /></div>
                            </div>
                        </div>
                    </div>
                    <Button variant="warning" className={`px-5 py-2 mt-3 ${styles.HelpBtn}`}><b>Give Your Help</b></Button>
                </div>
            </div>
        </div>
    );
}
