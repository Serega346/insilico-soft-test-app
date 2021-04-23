import {useDispatch} from "react-redux";
import {useState} from "react";
import {NavLink} from "react-router-dom";

import {addNewNote} from "../../redux/actions";
import s from "./style.module.css"
import addButtonIco from "./img/addButton.png"
import tabsIco from './img/tabs.png'
import listIco from './img/list.png'


const NavBar = ({children}) => {

    const [newNote, setNewNote] = useState({
        time: new Date().toLocaleTimeString().slice(0, 5),
        id: Date.now(),
        text: 'Немає додаткового тексту',
        title: 'Нова нотатка',
        date: new Date().toLocaleDateString(),
        lastUpdated: Date.now(),
    })
    const dispatch = useDispatch()

    const onButtonClick = e => {
        e.preventDefault()
        setNewNote(prevState => {
            return {...prevState, id: prevState.id + 1};
        });
        dispatch(addNewNote(newNote))
    }

    return (
        <nav className={s.navBar}>
            <div className={s.leftButtonGroupWrapper}>
                <div className={s.leftButtonGroup}>
                    <NavLink to="/list_view">
                        <img src={listIco} alt="" className={s.navRef}/>
                    </NavLink>
                    <NavLink to="/tabs_view">
                        <img src={tabsIco} alt="" className={s.navRef}/>
                    </NavLink>
                </div>
            </div>
            <div className={s.buttonGroup}>
                <button className={s.addButton} style={{backgroundImage: `url(${addButtonIco})`}}
                        onClick={onButtonClick}/>
                <div className={s.dropdownMenu}>
                    {children}
                </div>
            </div>
        </nav>
    )
}

export default NavBar;
