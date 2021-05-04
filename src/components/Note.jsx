import { useHistory } from "react-router-dom"
const Note = (props) => {
    const history = useHistory()
    const handleRedirect = () => {
        history.push(`/detail/${props.id}`)
    }

    return (
        <div className="note" onClick={handleRedirect} title="click to visualize or edit">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <div className="close"></div>
        </div>
    )
}

export default Note