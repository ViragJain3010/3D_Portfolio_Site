import { keyframes } from "styled-components";

const popUpReverse = keyframes`
  0% {
    transform: translateX(50px);
    transform-origin: 50% 50%;
    text-shadow: 0 1px 0 #cccccc, 0 2px 0 #cccccc, 0 3px 0 #cccccc,
      0 4px 0 #cccccc, 0 5px 0 #cccccc, 0 6px 0 #cccccc, 0 7px 0 #cccccc,
      0 8px 0 #cccccc, 0 9px 0 #cccccc, 0 50px 30px rgba(0, 0, 0, 0.3);
  }
  100% {
    transform: translateX(0);
    transform-origin: 50% 50%;
    text-shadow: none;
  }
`;

const popUpRight = keyframes`
  0% {
    transform: translateX(0);
    transform-origin: 50% 50%;
    text-shadow: none;
  }
  100% {
    transform: translateX(50px);
    transform-origin: 50% 50%;
    text-shadow: 0 1px 0 #cccccc, 0 2px 0 #cccccc, 0 3px 0 #cccccc,
      0 4px 0 #cccccc, 0 5px 0 #cccccc, 0 6px 0 #cccccc, 0 7px 0 #cccccc,
      0 8px 0 #cccccc, 0 9px 0 #cccccc, 0 50px 30px rgba(0, 0, 0, 0.3);
  }
`;

const slideIn = keyframes`
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  20% {
    transform: translateY(-50%);
    opacity: 1;
  }
  80% {
    transform: translateY(-50%);
    opacity: 1;
  }
  100% {
    transform: translateY(100%);
    opacity: 0;
  }
`;

export {popUpReverse, popUpRight, slideIn}