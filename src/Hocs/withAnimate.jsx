import { AnimatePresence } from "framer-motion";



const withAnimatePresence = (component)=>{

return(
   <AnimatePresence
    initial={false}
    exitBeforeEnter={true}
    onExitComplete={() => null}>
        {component}
    </AnimatePresence>
    
    )


}

export default withAnimatePresence