import { useParams } from "react-router-dom"
import { useState } from "react"

const Detail = (props) => {
    let { id } = useParams()
    const [edit, setEdit] = useState(false)
    const handleEdit = () => {
        setEdit(!edit)
        console.log()
    }
    const handleTitleEdit = (e) => {
        console.log(e.target.textContent)
        props.notes.map(el => {
            if (Number(el.id) === Number(id)) {
                el.title = e.target.textContent
            }
        })
    }

    const handleContentEdit = (e) => {
        console.log(e.target.textContent)
        props.notes.map((el, index) => {
            if (Number(el.id) === Number(id)) {
                el.content = e.target.textContent
                // console.log(index)
            }
        })
    }

    return (
        <>
            {props.notes.map(el => {
                if (Number(el.id) === Number(id)) {
                    return (
                        <div className="detailContainer" key={el.id}>

                            <div className="detailNote">
                                <div className="detailTitle" onInput={handleTitleEdit} contentEditable={edit}>
                                    <p>{el.title}</p>
                                </div>
                                <div className="detailContent" onInput={handleContentEdit} contentEditable={edit}>
                                    <p>{el.content}</p>
                                </div>
                                <div className="editor" title="click to edit note" onClick={handleEdit}><i class="fas fa-edit"></i></div>
                            </div>

                        </div>
                    )
                }
            })}
        </>
    )
}


export default Detail