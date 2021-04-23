import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {selectFilteredAllNotes, selectSearchTerm} from "../../redux/selectors";
import {editNote, fetchNotes} from "../../redux/actions";
import s from "./style.module.css"

const FullNote = ({match}) => {

    const [note, setNote] = useState([])
    const [editedNote, setEditedNote] = useState([])
    const [toggle, setToggle] = useState(true)

    const dispatch = useDispatch()
    const allNotes = useSelector(selectFilteredAllNotes)
    const searchTerm = useSelector(selectSearchTerm)

    const newNote = allNotes.filter(el => el.id === +match.params.id)
    const id = match.params.id

    const filterNotes = () => {
        dispatch(fetchNotes())
        setNote(newNote)
        console.log(note)
    }

    const onKeyDown = (event) => {
        if (event.key === 'Escape') {
            setToggle(true)
            event.preventDefault()
            event.stopPropagation()
            dispatch(editNote(editedNote))
            dispatch(fetchNotes())
        }
    }

    const onTextChange = (e) => {
        e.preventDefault()
        setEditedNote({
            ...note[0],
            [e.target.name]: e.target.value,
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString().slice(0, 5),
            lastUpdated: Date.now()
        })
        dispatch(editNote(editedNote))
        console.log(editedNote)
    }

    useEffect(filterNotes
        , [id, searchTerm])

    return (
        <div className={s.noteContainer}>
            {note.length !== 0 ? (
                toggle ? (
                    <div onDoubleClick={() => {
                        setToggle(false)
                    }}>
                        <div className={s.noteDate}>
                            {`${note[0].date} о ${note[0].time}`}
                        </div>
                        <div className={s.noteTitle} dangerouslySetInnerHTML={{__html: note[0].title}}/>
                        <div className={s.noteText} dangerouslySetInnerHTML={{__html: note[0].text}}/>
                    </div>
                ) : (
                    <div className={s.inputGroup}>
                        <input onChange={onTextChange} onKeyDown={onKeyDown} className={s.inputTitle} name="title"
                               type="text"
                               defaultValue={note[0].title}/>
                        <textarea onChange={onTextChange} onKeyDown={onKeyDown} className={s.inputText} name="text"
                                  id={note[0].id}
                                  rows="30" defaultValue={note[0].text}/>
                    </div>
                )
            ) : `Loading`}
        </div>
    )
}

export default FullNote;
