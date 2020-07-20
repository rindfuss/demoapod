import React from "react";
import styled, {keyframes} from "styled-components";

const ShrinkAndGrow = keyframes`
    0%  { transform: scale(1.0); }
    50% { transform: scale(0.05); }
    100% { transform: scale(1.0); }
`;

const MorphBallStyled = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
    background-color: ${props => props.color};
    border-radius: 50%;
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    animation-name: ${ShrinkAndGrow};
    animation-timing-function: cubic-bezier(0.37, 0, 0.63, 1);
    animation-duration: ${props => props.cycleMS + 'ms'};
    animation-iteration-count: infinite;
`;


export default function MorphBall(props) {

    return (
        <MorphBallStyled {...props}/>
    );
}

MorphBall.defaultProps = {
    cycleMS: 2000,
    height: '50px',
    width: '50px',
    color: 'orange',
};