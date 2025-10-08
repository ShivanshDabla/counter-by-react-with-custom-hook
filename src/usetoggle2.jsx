import React ,{useState} from 'react'

const useToggle = () => {
      const [counter, setcount] = useState(20)

      function inc(){
        setcount(counter+1)
      }
      function dec(){
        setcount(counter-1)
      }
    
  return [counter,inc,dec]
}

export default useToggle