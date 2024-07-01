import styled, { createGlobalStyle, css } from "styled-components";

const ANIMATION_SPEED = '2s';

export const Container = styled.div`
    display: flex;
    justify-content: center;
`;

export const Content = styled.div`
    width: 50vmin;
    height: 50vmin;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    perspective: 1000vmin;
`;

export const Bar = styled.div`
    width: 44vmin;
    height: 3vmin;
    margin: 2vmin 0vmin;
    background: ${({ theme }) => css`linear-gradient(90deg, #fff0 33%, ${theme.colors.primary} 33% 67%, #fff0 67% 100%)`};
    animation: grow ${ANIMATION_SPEED} ease-in-out 0s infinite alternate; 
    background-size: 300%;
    background-position-x: -203%;

    &:nth-child(2) {
        animation-delay: calc(${ANIMATION_SPEED} * -0.02);
    }
    &:nth-child(3) {
        animation-delay: calc(${ANIMATION_SPEED} * -0.04);
    }
    &:nth-child(4) {
        animation-delay: calc(${ANIMATION_SPEED} * -0.06);
    }
    &:nth-child(5) {
        animation-delay: calc(${ANIMATION_SPEED} * -0.08);
    }
    &:nth-child(6) {
        animation-delay: calc(${ANIMATION_SPEED} * -0.1);
    }
    &:nth-child(7) {
        animation-delay: calc(${ANIMATION_SPEED} * -0.12);
    }
`;

export const Bars = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    padding: 6.5vmin 3vmin;
    animation: mirror1 calc(${ANIMATION_SPEED} * 2) ease 0s infinite ;

    & + & {
        transform: rotate(90deg) rotateX(180deg);
        animation: mirror2 calc(${ANIMATION_SPEED} * 4) ease calc(${ANIMATION_SPEED} / 2) infinite;
    }

    &:nth-child(2) ${Bar}:nth-child(1) {
        animation-delay: calc(calc(${ANIMATION_SPEED} * -0.001) - calc(${ANIMATION_SPEED} / 2));
    }

    &:nth-child(2) ${Bar}:nth-child(2) {
        animation-delay: calc(calc(${ANIMATION_SPEED} * -0.02) - calc(${ANIMATION_SPEED} / 2));
    }

    &:nth-child(2) ${Bar}:nth-child(3) {
        animation-delay: calc(calc(${ANIMATION_SPEED} * -0.04) - calc(${ANIMATION_SPEED} / 2));
    }

    &:nth-child(2) ${Bar}:nth-child(4) {
        animation-delay: calc(calc(${ANIMATION_SPEED} * -0.06) - calc(${ANIMATION_SPEED} / 2));
    }

    &:nth-child(2) ${Bar}:nth-child(5) {
        animation-delay: calc(calc(${ANIMATION_SPEED} * -0.08) - calc(${ANIMATION_SPEED} / 2));
    }

    &:nth-child(2) ${Bar}:nth-child(6) {
        animation-delay: calc(calc(${ANIMATION_SPEED} * -0.1) - calc(${ANIMATION_SPEED} / 2));
    }

    &:nth-child(2) ${Bar}:nth-child(7) {
        animation-delay: calc(calc(${ANIMATION_SPEED} * -0.12) - calc(${ANIMATION_SPEED} / 2));
    }
`;

export const LoaderStyles = createGlobalStyle`
    @keyframes mirror1 {
        0%, 47%, 99.99%, 100% { transform: rotate(180deg) rotateX(0deg); }
        47.01%, 99.98% { transform: rotate(180deg) rotateX(180deg); }
    }

    @keyframes mirror2 {
        0%, 47%, 99.99%, 100% { transform: rotate(90deg) rotateX(180deg); }
        47.01%, 99.98% { transform: rotate(90deg) rotateX(0deg); }
    }

    @keyframes grow {
        0%, 25% { background-position-x: -297%; }
        45%, 55% { background-position-x: -250%; }
        75%, 100% { background-position-x: -203%; }
    }
`;