import s from "./style.module.css"
import {NavLink} from "react-router-dom";

const TabsNote = ({note, children}) => {

    const cutText = note.text.slice(0, 300)

    return (
        <NavLink to={`/tabs_view/${note.id}`} className="col-4 tab-view">
            <div className={s.noteContainer}>
                <div className={s.noteText}>
                    {note.text ? (
                        <div>
                            <span className="cutText" dangerouslySetInnerHTML={{__html: cutText}}/>
                        </div>
                    ) : `Немає додаткового тексту`}
                </div>
                <div className={s.noteTitle}>
                    {note.title ? (
                        note.title.length > 24 ? (
                            <span dangerouslySetInnerHTML={{__html: note.title.slice(0, 25) + '...'}}/>
                        ) : (
                            <span dangerouslySetInnerHTML={{__html: note.title}}/>
                        )
                    ) : `Нова нотатка`}
                </div>
                {note.time ? (
                    <div className={s.noteDate}>
                        <span>{note.time}</span>
                    </div>
                ) : note.time}
                {children}
            </div>
        </NavLink>
    )
}

export default TabsNote;

