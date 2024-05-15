import styles from "../../../styles/global.module.css";

export default function SubHeading({ subHeading, color }) {
    return (
        <p className={styles.SubHeading} style={{ color: `${color ? '#306F5E' : '#474747'}` }}>{subHeading}</p>
    );
}
