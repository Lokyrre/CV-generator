import styles from "./uploadInput.module.scss";
import {useRef} from "react";

export default function UploadInput({label, onChange, accept, isJSON}) {
    // Ref
    const inputFileRef = useRef();

    function onFileDrop() {
        const file = inputFileRef.current.files[0];
        if (file) {
            const reader = new FileReader();
            if (isJSON) {
                reader.readAsText(file, "UTF-8");
            } else {
                reader.readAsDataURL(file);
            }
            reader.onload = function (e) {
                onChange(e.target.result);
            }
            reader.onerror = function (evt) {
                console.error(evt)
            }
        }
    }

    function onClickBtn() {
        inputFileRef.current.click();
    }

    return (
        <>
            <input type="file" onChange={onFileDrop} ref={inputFileRef} accept={accept} className={styles.file}/>
            <button className={"btn"} onClick={onClickBtn}>{label}</button>
        </>
    );
}