import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {selectSearchTerm} from '../../redux/selectors';
import {setSearchTerm} from "../../redux/actions";
import searchIco from './img/search.png'
import s from './style.module.css'

const SearchBar = () => {

    const searchTerm = useSelector(selectSearchTerm);
    const dispatch = useDispatch();

    const onSearchTermChangeHandler = (e) => {
        const userInput = e.target.value;
        dispatch(setSearchTerm(userInput));
    };

    return (
        <div className={s.searchContainer}>
            <img className={s.searchImg} alt="" src={searchIco}/>
            <input
                className={s.searchInput}
                type="text"
                value={searchTerm}
                onChange={onSearchTermChangeHandler}
                placeholder="Пошук"
            />
        </div>
    );
};

export default SearchBar;
