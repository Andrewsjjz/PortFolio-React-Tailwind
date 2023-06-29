import { useContext } from "react";
import TranslateContext from "../context/TranslateProvider";

const useTranslate = () => {
    return useContext(TranslateContext)
}

export default useTranslate