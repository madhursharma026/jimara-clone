import Heading from "../common/Heading";
import style from "../../../styles/global.module.css";
import ItalicCustomHeading from "../common/ItalicCustomHeading";

export default function Section11() {
    return (
        <div className={`container-fluid ${style.containerWidth} p-md-5 px-3`}>
            <div className="row text-center">
                <ItalicCustomHeading italic={'Albums and images'} normal={'GALLERY'} />
                <Heading heading={'Discover our activities'} />
                <div className="col-md-6 mt-3">
                    <img src="https://alonethemes.com/wp-content/uploads/2021/09/jmr-galery-image-3-min.jpg" alt="#ImgNotFound" className="w-100 rounded-4" />
                </div>
                <div className="col-md-6 mt-3">
                    <img src="https://alonethemes.com/wp-content/uploads/2021/09/jmr-galery-image-4-min.jpg" alt="#ImgNotFound" className="w-100 rounded-4" />
                </div>
                <div className="col-md-3 col-sm-6 mt-3">
                    <img src="https://alonethemes.com/wp-content/uploads/2021/09/jmr-galery-image-1-min.jpg" alt="#ImgNotFound" className="w-100 rounded-4" />
                </div>
                <div className="col-md-3 col-sm-6 mt-3">
                    <img src="https://alonethemes.com/wp-content/uploads/2021/09/jmr-galery-image-2-min.jpg" alt="#ImgNotFound" className="w-100 rounded-4" />
                </div>
                <div className="col-md-3 col-sm-6 mt-3">
                    <img src="https://alonethemes.com/wp-content/uploads/2021/09/jmr-galery-image-5-min.jpg" alt="#ImgNotFound" className="w-100 rounded-4" />
                </div>
                <div className="col-md-3 col-sm-6 mt-3">
                    <img src="https://alonethemes.com/wp-content/uploads/2021/09/jmr-galery-image-6-min.jpg" alt="#ImgNotFound" className="w-100 rounded-4" />
                </div>
            </div>
        </div>
    );
}

