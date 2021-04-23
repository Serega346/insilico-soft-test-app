import {useState} from "react";

import s from "./style.module.css"
import shareIco from "./img/share.png"
import mailIco from "./img/mail.png"
import messagesIco from "./img/messages.png"
import notesIco from "./img/notes.png"
import airdropIco from "./img/airdrop.png"

const DropdownButton = () => {

    const [isOpen, setIsOpen] = useState(false)

    const onButtonClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className={s.container}>
            <button type="button" className={s.button} onClick={onButtonClick}
                    style={{backgroundImage: `url(${shareIco})`}}/>
            {isOpen && (
                <div className={s.dropdown}>
                    <ul className={s.listContainer}>
                        <li className={s.listItem}>
                            <button className={s.buttonIco} style={{backgroundImage: `url(${mailIco})`}}/>
                            Пошта
                        </li>
                        <li className={s.listItem}>
                            <button className={s.buttonIco} style={{backgroundImage: `url(${airdropIco})`}}/>
                            AirDrop
                        </li>
                        <li className={s.listItem}>
                            <button className={s.buttonIco} style={{backgroundImage: `url(${messagesIco})`}}/>
                            Повідомлення
                        </li>
                        <li className={s.listItem}>
                            <button className={s.buttonIco} style={{backgroundImage: `url(${notesIco})`}}/>
                            Нагадування
                        </li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default DropdownButton
