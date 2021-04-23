import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {selectFilteredAllNotes} from "../../redux/selectors";
import {deleteNote, fetchNotes} from "../../redux/actions";
import Note from "../../components/Note";
import removeButtonIco from "./img/remove.png"
import s from "./style.module.css"

const SideBar = ({children}) => {

    const dispatch = useDispatch()
    const allNotes = useSelector(selectFilteredAllNotes)
    console.log(allNotes)

    const renderAllNotes = () => {
        dispatch(fetchNotes())
    }

    useEffect(renderAllNotes, [])

    return (
        <div className={s.sideBarContainer}>
            {children}
            {allNotes.length !== 0 ? allNotes.sort((a, b) => b.lastUpdated - a.lastUpdated).map(el => (
                <Note note={el} key={el.id}>
                    <button className={s.removeButton} style={{backgroundImage: `url(${removeButtonIco})`}}
                            onClick={() => dispatch(deleteNote(el.id))}/>
                </Note>
            )) : `Нотатки відсутні`}
        </div>
    )
};

export default SideBar;
