import { useEffect } from "react";

export const useTitle = (title) => {

    useEffect(()=>{
        document.title=`${title} - Educate`;
    },[title])

  return null
}
