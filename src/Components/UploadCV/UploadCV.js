import styles from "./uploadcv.module.scss";
import UploadInput from "../UploadInput/UploadInput";
import { useTranslation } from "react-i18next";

export default function UploadCV({onChange}) {

    const {t} = useTranslation();

    function UploadChange(e) {
        onChange(JSON.parse(e))
    }

    return (<div className={styles.center}>
        <h1>{t("uploadCV")}</h1>

        <UploadInput onChange={UploadChange} accept={"application/json"} label={t("uploadFile")} isJSON={true}/>

        <p>{t('canDownload')} <a href={"./data/cvExample.json"} target={"_blank"} rel="noreferrer" download>{t('here')}</a></p>
    </div>)
}