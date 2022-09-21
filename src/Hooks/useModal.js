import { useState } from "react"

const useModal = ()=>{
    const [isModalopen,setShowModal] = useState(false)

    const toggleModal = () => {
       setShowModal(showModal => !showModal)
    }


    return {isModalopen,toggleModal}

}


export default useModal