import styles from "../../../styles/global.module.css";

export default function Heading({ heading, color }) {
    return (
        <h1 className={styles.Heading} style={{ color: `${color ? '#306F5E' : ''}` }}>{heading}</h1>
    );
}
