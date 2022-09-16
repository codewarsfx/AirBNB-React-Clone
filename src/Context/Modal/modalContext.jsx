import {useState, createContext} from "react";



export const ModaLContext = createContext(null)


const ModalProvider = ({children})=>{

    const [modalOpen, setModalOpen] = useState(false);


    const click =()=>{ setModalOpen(modalOpen=>!modalOpen)}
 

  return( <ModaLContext.Provider value={{modalOpen,click}}>
        {children}
    </ModaLContext.Provider>)

}

export default ModalProvider


