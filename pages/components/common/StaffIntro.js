import Image from "next/image";
import styles from "../../../styles/global.module.css";

export default function StaffIntro({ ImageURL, Name, Post }) {
    return (
        <div className={styles.StaffIntroContainer}>
            <div className="p-3">
                <Image src={ImageURL} alt="#ImgNotFound" className="w-100 h-auto rounded-4" />
            </div>
            <div className={`${styles.StaffIntroBottomLeftContainer} py-4 px-5 rounded-4 text-start`}>
                <h4><b>{Name}</b></h4>
                <h6>{Post}</h6>
                <i className="p-2 fa fa-facebook-f"></i>
                <i className="p-2 fa fa-instagram"></i>
                <i className="p-2 fa fa-twitter"></i>
            </div>
        </div>
    );
}
