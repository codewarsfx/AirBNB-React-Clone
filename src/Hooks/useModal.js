import { useState } from "react"

const useModal = ()=>{
    const [showModal,setShowModal] = useState(false)

    const click = () => {
       setShowModal(showModal => !showModal)
    }


    return {showModal,click}

}


export default useModal