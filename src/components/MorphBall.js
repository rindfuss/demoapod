import React, { useState, useEffect } from "react";

const style = {
    width: '100%',
    height: '100%',
    backgroundColor: 'orange',
    borderRadius: '50%',
};

export default function MorphBall(props) {
    useEffect( () => {
        // one-time setup code
        console.log("ran effect");
    }, []);
    
    return (
        <div style={style}></div>
    );
}

MorphBall.defaultProps = {
    cycleMS: 1000,
};