import { useLottie } from "lottie-react";
import animationData from '../assets/animation.json';

function AnimationComponent(){
    const options = {
        animationData: animationData,
        loop: true
    };
    const { View } = useLottie(options)
    
    return <>{View}</>;
}

export default AnimationComponent;