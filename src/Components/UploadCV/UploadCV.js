import styles from "./uploadcv.module.scss";
import UploadInput from "../UploadInput/UploadInput";

export default function UploadCV({onChange}) {

    function UploadChange(e) {
        onChange(JSON.parse(e))
    }

    return (<div className={styles.center}>
        <h1>Upload your CV in JSON format</h1>

        <UploadInput onChange={UploadChange} accept={"application/json"} label={"Upload your file"} isJSON={true}/>

        <p>You can download a JSON format example by clicking <a href={"./data/cvExample.json"} target={"_blank"} download>here</a></p>
    </div>)
}