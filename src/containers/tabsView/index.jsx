import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {selectFilteredAllNotes} from "../../redux/selectors";
import {deleteNote, fetchNotes} from "../../redux/actions";

import TabsNote from "../../components/TabsNote";
import removeButtonIco from "./img/close.png"
import s from "./style.module.css"

const TabsView = ({children}) => {

    const dispatch = useDispatch()
    const allNotes = useSelector(selectFilteredAllNotes)
    console.log(allNotes)

    const renderAllNotes = () => {
        dispatch(fetchNotes())
    }

    useEffect(renderAllNotes, [])

    return (
        <div className={`${s.tabsViewContainer} row`}>
            {children}
            {allNotes.length !== 0 ? allNotes.sort((a, b) => b.lastUpdated - a.lastUpdated).map(el => (
                <TabsNote note={el} key={el.id}>
                    <button className={s.removeButton}
                            onClick={() => dispatch(deleteNote(el.id))}
                            style={{backgroundImage: `url(${removeButtonIco})`}}/>
                </TabsNote>
            )) : `Нотатки відсутні`}
        </div>
    )
};

export default TabsView;
