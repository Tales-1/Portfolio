import "./ReactOrbit.css"
import { motion } from "framer-motion"

type Props = { 
    styles?:string
}
const ReactOrbit:React.FC<Props> = ({styles}) => {

    return ( 
        <div className={`container ${styles}`}>
            <motion.div className="nucleus" 
                initial={{scale:0}} 
                animate={{scale:1, 
                transition:{duration:.3, delay:.3, type:"spring", stiffness:200}}}>
            </motion.div>

            <motion.div 
                className="orbit-circle one"
                initial={{opacity:0}}
                animate={{opacity:1, transition:{duration:0.2, delay:0.6, ease:"easeInOut"}}}                    >
                <div className="electron var-x"></div>
            </motion.div>

            <motion.div 
                className="orbit-circle two"
                initial={{opacity:0}}
                animate={{opacity:1, transition:{duration:0.2, delay:0.9, ease:"easeInOut"}}}                    >
                <div className="electron var-y"></div>
            </motion.div>
            <motion.div 
                className="orbit-circle three"
                initial={{opacity:0}}
                animate={{opacity:1, transition:{duration:0.2, delay:1.2, ease:"easeInOut"}}}                    >
                <div className="electron var-x"></div>
            </motion.div>
        </div>
    )
}

export default ReactOrbit
