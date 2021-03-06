import React, { useState, useEffect } from "react";
import MorphBall from "./MorphBall";
import NavBar from "./NavBar";

const apiKey = 'DEMO_KEY'; //process.env.REACT_APP_NASA_KEY;

export default function NasaPhoto() {
    const [photoData, setPhotoData] = useState(null);

    useEffect( () => {
        fetchPhoto();

        async function fetchPhoto() {
            const today = new Date();
            const dateString = today.getFullYear().toString() + '-' + (today.getMonth()+1).toString().padStart(2, '0') + '-' + (today.getDate().toString().padStart(2, '0'));
            const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${dateString}`);
            const data = await res.json();
            setPhotoData(data);    
        }
    }, []);
    
    if (!photoData) {
        const mbProps = {
            height: '25px', 
            width: '25px', 
            color: 'gray',
        };
        
        return (
            <React.Fragment>
            <NavBar />
            <div style={{position: 'fixed', width: '100%', height: '100%'}}>
                <MorphBall {...mbProps}/>
            </div>
            </React.Fragment>
        );
    }

    return (
        <React.Fragment>
        <NavBar />
        <div className="nasa-photo">
            {photoData.media_type === "image" ? (
                <img src={photoData.url}
                    alt={photoData.title}
                    className="photo"
                />) 
            : (
                <iframe
                    title = "space-video"
                    src={photoData.url}
                    frameBorder="0"
                    gesture="media"
                    allow="encrypted-media"
                    allowFullScreen
                    className="photo"
                />
            )}
            <div>
                <h1>{photoData.title}</h1>
                <p className="date">{photoData.date}</p>
                <p className="explanation">{photoData.explanation}</p>
            </div>
        </div>
        </React.Fragment>
    );
}