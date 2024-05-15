import styles from "../../../styles/global.module.css";

export default function ItalicCustomHeading({ italic, normal }) {
    return (
        <p className={`fs-3 ${styles.mainColor}`}><i>{italic}</i> {normal}</p>
    );
}
