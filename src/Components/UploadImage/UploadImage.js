import styles from "./uploadImage.module.scss";
import UploadInput from "../UploadInput/UploadInput";
import { useTranslation } from "react-i18next";

export default function UploadImage({onChange, onSkip}) {
    const {t} = useTranslation();

    return (<div className={styles.center}>
        <h1>{t('uploadPhoto')}</h1>

        <div className={styles.row}>
            <UploadInput label={t('uploadPhoto')} accept={["image/jpeg", "image/png"]} onChange={onChange} isJSON={false}/>
            <button className={"btn"} onClick={onSkip}>{t('skip')}</button>
        </div>
    </div>)
}