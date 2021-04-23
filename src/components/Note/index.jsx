import s from "./style.module.css"
import {NavLink} from "react-router-dom";

const Note = ({note, children}) => {

    const cutText = note.text.slice(0, 25)

    return (
        <NavLink to={`/list_view/${note.id}`}>
            <div className={s.noteContainer}>
                <div className={s.noteTitle}>
                    {note.title ? (
                        note.title.length > 24 ? (
                            <span dangerouslySetInnerHTML={{__html: note.title.slice(0, 25) + '...'}}/>
                        ) : (
                            <span dangerouslySetInnerHTML={{__html: note.title}}/>
                        )
                    ) : `Нова нотатка`}
                </div>
                <div className={s.noteText}>
                    {note.text ? (
                        <div>
                            <span className={s.noteDate}>{note.time}</span>
                            {note.text.length > 24 ? (
                                <span className="cutText" dangerouslySetInnerHTML={{__html: cutText + '...'}}/>
                            ) : (
                                <span className="cutText" dangerouslySetInnerHTML={{__html: cutText}}/>
                            )}
                        </div>
                    ) : `Немає додаткового тексту`}
                </div>
                {children}
            </div>
        </NavLink>
    )
};

export default Note;
