import Note from "./Note"


const NoteContainer = (props) => {
    const handleNote = props.array.map(el => {
        return < Note key={el.id} title={el.title} content={el.content} id={el.id} />
    }
    )
    return (
        <div className="noteContainer">
            {handleNote}
        </div>
    )
}

export default NoteContainer
