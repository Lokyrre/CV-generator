import {Point} from "../Point/Point.js";
import styles from "./cv.module.scss";

/**
 * @param {object} data
 * @param {string} data.name
 * @param {string} data.job
 * @param {string} data.tel
 * @param {string} data.mail
 * @param {string} data.address
 * @param {string} data.vehicle
 * @param {string} data.photo
 * @param {object} data.experiences
 * @param {object} data.degrees
 * @return {JSX.Element}
 * @constructor
 */
export function Cv({data}) {
    return (
        <div id="cv" className={styles.cv}>
            <div className={styles.row}>
                <div className={styles.textContainer}>
                    <h1>{data.name}</h1>
                    <h2>{data.job}</h2>
                    <b>
                        <p>
                            {data.tel && `tel : ${data.tel}`}
                            {data.tel && data.mail && " / "}
                            {data.mail && data.mail}
                        </p>
                        <p>
                            {data.address && data.address}
                            {data.address && data.vehicle && " - "}
                            {data.vehicle && data.vehicle}
                        </p>
                    </b>
                </div>
                {data.photo &&
                <div className={styles.imgContainer}>
                    <img src={data.photo} alt=""/>
                </div>}
            </div>
            <div className={styles.data}>
                <div className={styles.line}/>
                {Object.entries(data.experiences).length > 0 &&
                <>
                    <div className={styles.title}>
                        <h3>Expériences</h3>
                    </div>
                    {Object.entries(data.experiences).reverse().map((exp, i) => (<Point key={i} data={exp}/>))}
                </>
                }
                {Object.entries(data.degrees).length > 0 &&
                <>
                    <div className={styles.title}>
                        <h3>Formations</h3>
                    </div>
                    {Object.entries(data.degrees).reverse().map((degree, i) => (<Point key={i} data={degree}/>))}
                </>
                }
            </div>
        </div>
    )
}