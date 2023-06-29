import { createContext, useState} from "react";
import MensajesIngles from '../lang/en-US.json'
import MensajeEspanol from '../lang/es-ES.json'
import { IntlProvider } from "react-intl";

const TranslateContext = createContext()

const TranslateProvider = ({children}) => {

const [mensaje, setMensaje] = useState(MensajesIngles)
const [locale, setLocale] = useState('en-US')

const cambiarIdioma = (lenguaje) => {
    switch (lenguaje) {
        case 'es-ES':
            setMensaje(MensajeEspanol)
            setLocale('es-ES')
            break
        case 'en-US':
            setMensaje(MensajesIngles)
            setLocale('en-US')
            break

        default:   
            setMensaje(MensajesIngles)
            setLocale('en-US')  
    }
}

  return (
    <TranslateContext.Provider
    value={{
        cambiarIdioma,
        mensaje, 
        locale
    }}
    >
    <IntlProvider locale={locale} messages={mensaje}>
      {children}
      </IntlProvider>
    </TranslateContext.Provider>
  )
}

export {TranslateProvider}

export default TranslateContext
