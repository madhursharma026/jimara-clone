import Posts from "../common/Posts";
import { Button } from "react-bootstrap";
import style from "../../../styles/global.module.css";
import styles from '../../../styles/Homepage/Homepage.module.css';

export default function Section9() {
    return (
        <div className={`container-fluid ${style.containerWidth} p-md-5 px-3`}>
            <div className="row">
                <div className="col-xl-4 col-md-6 mt-4">
                    <Posts />
                </div>
                <div className="col-xl-4 col-md-6 d-md-block d-none mt-4">
                    <Posts />
                </div>
                <div className="col-xl-4 col-md-6 d-xl-block d-none mt-4">
                    <Posts />
                </div>
            </div>
            <div className="text-center">
                <Button variant="warning" className={`px-5 py-3 mt-4 ${styles.ViewAllPostsBtn}`}><b>View All Posts</b></Button>
            </div>
        </div>
    );
}
