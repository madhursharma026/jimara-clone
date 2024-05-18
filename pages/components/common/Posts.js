import Image from 'next/image';
import postImage from '../../../public/post.jpg';
import styles from '../../../styles/Homepage/Homepage.module.css';

export default function Posts() {
    return (
        <div className={`${styles.ImgContainerCenterBottom} w-100`}>
            <Image src={postImage} alt="#ImgNotFound" className="w-100 rounded-4" height={'550px'} style={{ objectFit: 'cover' }} />
            <div className={`${styles.ImgContainerCenterBottomData} text-start px-3`}>
                <h6>by <span className="text-warning">Bearsthemes</span> date <span className="text-warning">September 14, 2023</span></h6>
                <h2 className="text-white"><b>Sees boom in younger volunteers following pandemic</b></h2>
                <p className="text-secondary"><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</b></p>
                <button type="button" class="btn btn-outline-light px-3 rounded-4">Read More</button>
            </div>
        </div>
    );
}
