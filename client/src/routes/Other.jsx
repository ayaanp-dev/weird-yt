import { useState } from "react";
import Sign from "../components/Sign";

export default function Other() {
    const [data] = useState([
        "ZO3hfTRO_9w",
        "jzZIhBJNpAk",
        "4CqAEQZvA74",
        "jQusEfZZXRA",
        "ZJOYWIOOymg",
        "DJfX_Xf-HGM",
        "w77FjIxerVs",
        "IkK2mAdGXuU",
        "Dk51NQWowDU",
        "B5prmXlJdVA",
        "WqdSNbEMJNo",
        "FeksDQqJko8",
        "YsRMhr0UXHA",
        "mdom0W7WhyY",
        "jtdl-Drz5VU",
        "BH3K8B2PlMQ",
        "UCZ6mWI2p78",
        "QzcopHlkZ18",
        "gvp1OwVhW5c"
    ]);

    return (
        <>
            <Sign />
            <div className="other">
                {data.map((videoId) => (
                    <iframe 
                    className="other-vid"
                    src={`https://youtube.com/embed/${videoId}`} 
                    frameBorder="0"
                    width="500"
                    height="400"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    scrolling="no"
                ></iframe>
                ))}
            </div>
        </>
    );
}
