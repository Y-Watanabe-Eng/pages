import '../style.css'
import {AppL} from './AppL'
import {AppR} from './AppR'
import { motion } from "motion/react";

export const Dev = () => {

    return(
        <motion.div className='dev'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        >
            <h2 className='text-2xl sm:text-4xl font-CLEAT'>PORTFOLIO</h2>
            <div className="grid sm:grid-cols-2">
                <AppL />
                <AppR />
            </div>
        </motion.div>

    )
}