import { useLottie } from "lottie-react";
import animation from '../assets/animation.json';

function AnimationComponent(){
    const options = {
        animationData: JSON.parse(JSON.stringify(animation)),
        loop: true
    };
    const { View } = useLottie(options)
    
    return <>{View}</>;
}

export default AnimationComponent;