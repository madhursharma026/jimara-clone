import Image from 'next/image';
import logo from '../../public/logo.png';
import style from "../../styles/global.module.css";
import styles from '../../styles/Footer.module.css';

export default function Footer2() {
    return (
        <div className={styles.FooterContainer2}>
            <div className={`container-fluid ${style.containerWidth} p-sm-5 p-4`}>
                <div className="text-center text-white">
                    <Image src={logo} alt="#ImgNotFound" />
                    <h4 className="mt-3">4140 Parker Rd. Allentown, New Mexico 31134 (217) 555-0113 alone.support@gmail.com</h4>
                    <h5 className="mt-3">© All right reserved 2024 Alone <i className="p-2 fa fa-facebook-f"></i> <i className="p-2 fa fa-instagram"></i> <i className="p-2 fa fa-twitter"></i></h5>
                </div>
            </div>
        </div>
    );
}

