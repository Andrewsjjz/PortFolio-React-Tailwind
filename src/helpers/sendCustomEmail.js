import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";


export default async function sendCostumEmail (name, email, subject, body, message) {

    const collectionRef = collection(db, 'mail')

    const emailContent = {

        to: email,
        message: {
            email: email,
            name: name,
          subject: subject,
          text: body,
          html: `<p>${body}</p>`

       }
    }
    console.log('Correo enviado')
    return await addDoc (collectionRef, emailContent)
}