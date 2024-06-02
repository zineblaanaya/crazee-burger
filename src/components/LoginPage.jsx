import { useState } from "react"


export default function LoginPage() {

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
    <div>
        <h1>Bienvenue chez nous !</h1>
        <br/>
        <h2>Connectez-vous</h2>
        <form action="submit" onSubmit={handleSubmit}>
            <input value = {inputValue} onChange={handleChange} type="text" placeholder = "Entrez votre prénom..." required/>
            <button>Accedez à votre espace </button>
        </form>
      
    </div>
  )
}
