import { useState } from "react"


export default function LoginForm() {
     //state
     const [inputValue, setInputValue] = useState("")

     //comportement
     const handleSubmit = (event) => {
         event.preventDefault()
         console.log(setInputValue)
         alert(`Bonjour ${inputValue}`)
         setInputValue("")
       
     }
 
     const handleChange = (event) => {
       setInputValue(event.target.value)
 
     }
    
     //render
    return (
        <form action="submit" onSubmit={handleSubmit}>
        <h1>Bienvenue chez nous !</h1>
        <br/>
        <h2>Connectez-vous</h2>
            <input value = {inputValue} onChange={handleChange} type="text" placeholder = "Entrez votre prénom..." required/>
            <button>Accedez à votre espace </button>
        </form>
    )
}
