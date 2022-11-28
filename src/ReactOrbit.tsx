import "./ReactOrbit.css"
import { motion } from "framer-motion"

type Props = { 
    nucleusSize:string
    electronSize?:string
    orbitSize:string
    orbitOne?:string
    orbitTwo?:string
    styles?:string
}
const ReactOrbit:React.FC<Props> = ({nucleusSize,electronSize, orbitSize,orbitOne,orbitTwo, styles}) => {

    return ( 
        <div className={`container ${styles}`}>
            <motion.div className={`${nucleusSize} text-react font-bold`} 
                initial={{scale:0}} 
                animate={{scale:1, 
                transition:{duration:.3, delay:.1, type:"spring", stiffness:200}}}>
                    JN
            </motion.div>
            
            <motion.div 
                className={`orbit-circle ${orbitSize} one`}
                initial={{opacity:0}}
                animate={{opacity:1, transition:{duration:0.2, delay:0.2, ease:"easeInOut"}}}                    >
                <div className={`electron ${electronSize} ${orbitOne}`}></div>
            </motion.div>

            <motion.div 
                className={`orbit-circle ${orbitSize} two`}
                initial={{opacity:0}}
                animate={{opacity:1, transition:{duration:0.2, delay:0.4, ease:"easeInOut"}}}                    >
                <div className={`electron ${electronSize} ${orbitTwo}`}></div>
            </motion.div>
            <motion.div 
                className={`orbit-circle ${orbitSize} three`}
                initial={{opacity:0}}
                animate={{opacity:1, transition:{duration:0.2, delay:.6, ease:"easeInOut"}}}                    >
                <div className={`electron ${electronSize} ${orbitOne}`}></div>
            </motion.div>
        </div>
    )
}

export default ReactOrbit
