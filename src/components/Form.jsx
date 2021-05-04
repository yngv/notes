import { useHistory } from "react-router-dom"
const Form = (props) => {

    const history = useHistory()
    const handleRedirect = () => {
        history.push("/")
    }

    const handleForm = (e) => {
        e.preventDefault()
        props.setInputText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (props.text !== "") {
            props.setNotes([...props.notes, { id: Math.random() * 1000, title: "teste", content: props.text }])
            props.setInputText("")
        }

        handleRedirect()
    }



    return (
        <div>
            <input type="text" value={props.text} onChange={handleForm} />
            <button type="submit" onClick={handleSubmit}>send</button>
        </div>
    )
}

export default Form