import {useEffect} from "react";

export const useDocumentTitle = (param) => {
  document.title = param;
  console.log(param)
}



