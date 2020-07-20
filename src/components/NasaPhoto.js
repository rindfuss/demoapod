import React, { useState, useEffect } from "react";
import MorphBall from "./MorphBall";

export default function NasaPhoto() {
    const [photoData, setPhotoData] = useState(null);

    useEffect( () => {
        setTimeout(() => {
            fetchPhoto();
        }, 5000);

        async function fetchPhoto() {
            const res = await fetch('https://api.nasa.gov/planetary/apod?api_key=FYhFE0FKLP08Ah3gebbFPYzxT2RzTDjvCh1PMe9y');
            const data = await res.json();
            setPhotoData(data);    
        }
    }, []);
    
    if (!photoData) return /*<div></div>; */ (
        <div style={{width: '100vw', height: '100vw'}}>
            <MorphBall />
        </div>
    );

    return (
        <div className="nasa-photo">
            <img src={photoData.url}
                alt={photoData.title}
                className="photo"
            />
            <div>
                <h1>{photoData.title}</h1>
                <p className="date">{photoData.date}</p>
                <p className="explanation">{photoData.explanation}</p>
            </div>
        </div>
    );
}