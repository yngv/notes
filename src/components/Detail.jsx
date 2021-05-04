import { useParams } from "react-router-dom"

const Detail = (props) => {
    let { id } = useParams()

    return (
        <div>
            {props.notes.map(el => {
                if (Number(el.id) === Number(id)) {
                    return (
                        <div className="detailContainer" key={el.id}>

                            <div className="detailNote">
                                <div className="detailTitle">
                                    {el.title}
                                </div>
                                <div className="detailContent">
                                    {el.content}
                                </div>
                            </div>

                        </div>
                    )
                }
            })}
        </div >
    )
}


export default Detail