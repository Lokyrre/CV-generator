import styles from "./app.module.scss";
import {Cv} from "./Components/Cv/Cv.js";
import html2canvas from "html2canvas";
import {jsPDF} from "jspdf";
import {useState} from "react";
import UploadCV from "./Components/UploadCV/UploadCV";
import UploadImage from "./Components/UploadImage/UploadImage";

function DownloadCV() {
    function downloadCV() {
        const element = document.getElementById("cv");
        html2canvas(element).then((canvas) => {
            const imgData = canvas.toDataURL("image/jpeg", 1.0);

            const pdf       = new jsPDF();
            const pdfWidth  = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            pdf.addImage(imgData, "JPEG", 0, 0, pdfWidth, pdfHeight, "", "SLOW");
            pdf.save("cv.pdf");
        })
    }

    return <button onClick={downloadCV} className={"btn"}>Download CV</button>
}

function App() {
    // State
    const [data, setData]     = useState(null);
    const [showCV, setShowCV] = useState(false);

    function setPhoto(e) {
        setData((data) => ({
                ...data,
                photo: e
            })
        );

        setShowCV(true);
    }

    return (
        <>
            {data !== null ?
                <>
                    {showCV ?
                        <div className={styles.app}>
                            <DownloadCV/>
                            <Cv data={data}/>
                            <DownloadCV/>
                        </div> :
                        <>
                            <UploadImage onChange={setPhoto} onSkip={() => setShowCV(true)}/>
                        </>
                    }
                </> :
                <UploadCV onChange={setData}/>
            }
        </>
    );
}

export default App;
