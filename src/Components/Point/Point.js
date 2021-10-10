import styles from "./point.module.scss";

export function Point({data}) {
    
    const [name, info] = data;
    let className = styles.post;

    if (info.current) {
        className += ` ${styles.current}`;
    }
    
    return (
        <div className={styles.grid}>
            <div className={styles.society}>
                <div>
                    <p><b>{name}</b></p>
                    {info.description && <p><span>{info.description}</span></p>}
                </div>
            </div>
            <div className={className}>
                <p className={styles.year}>{info.year}</p>
                <h2>{info.title}</h2>
                {info.job &&
                    <b>
                        {Array.isArray(info.job) ?
                            <ul>
                                {info.job.map((job, i) => (<li key={i}>{job}</li>))}
                            </ul> :
                            <p>{info.job}</p>
                        }
                    </b>
                }
            </div>
        </div>
    )
}