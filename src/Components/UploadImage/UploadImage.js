import styles from "./uploadImage.module.scss";
import UploadInput from "../UploadInput/UploadInput";

export default function UploadImage({onChange, onSkip}) {

    return (<div className={styles.center}>
        <h1>Upload your photo</h1>

        <div className={styles.row}>
            <UploadInput label={"Upload your photo"} accept={["image/jpeg", "image/png"]} onChange={onChange} isJSON={false}/>
            <button className={"btn"} onClick={onSkip}>Skip</button>
        </div>
    </div>)
}