"use client";

import {motion} from "framer-motion";

interface Props{
path:string;
}

export default function DataPacket({path}:Props){

return(

<motion.circle

r="4"

fill="var(--primary)"

>

<animateMotion

dur="3s"

repeatCount="indefinite"

path={path}

/>

</motion.circle>

);

}