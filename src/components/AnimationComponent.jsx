import { useLottie } from "lottie-web/build/player/lottie_light";
import animationData from '../assets/animation.json';

function AnimationComponent(){
    const options = {
        animationData: JSON.parse(JSON.stringify(animationData)),
        loop: true
    };
    const { View } = useLottie(options)
    
    return <>{View}</>;
}

export default AnimationComponent;