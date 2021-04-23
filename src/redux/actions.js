import {notesRef, database} from "../firebase";

export const fetchNotes = () => async dispatch => {
    dispatch({type: 'allNotes/FETCH_NOTES_START'});
    try {
        notesRef.on("value", snapshot => {
            const notes = []
            for (let id in snapshot.val()) {
                notes.push(snapshot.val()[id])
            }
            dispatch({
                type: 'allNotes/FETCH_NOTES_SUCCESS',
                payload: notes
            });
        });
    } catch (err) {
        dispatch({
            type: 'FETCH_NOTES_FAILURE',
            payload: err
        })
    }
}

export const editNote = (note) => async dispatch => {
    dispatch({type: 'allNotes/EDIT_NOTE_START'});
    try {
        await notesRef.child(note.id).update({
            title: note.title,
            date: note.date,
            text: note.text,
            time: note.time,
            lastUpdated: note.lastUpdated

        });
        dispatch({
            type: 'allNotes/EDIT_NOTE_SUCCESS',
            payload: note
        });
    } catch (err) {
        dispatch({
            type: 'EDIT_NOTE_FAILURE',
            payload: err
        })
    }
}

export const addNewNote = (note) => async dispatch => {
    dispatch({type: 'allNotes/ADD_NOTE_START'});
    try {
        await database.ref('notes/' + note.id).set({
            id: note.id,
            title: note.title,
            text: note.text,
            date: note.date,
            time: note.time,
            lastUpdated: note.lastUpdated,
        });
        dispatch({
            type: 'allNotes/ADD_NOTE_SUCCESS',
        })
    } catch (err) {
        dispatch({
            type: 'allNotes/ADD_NOTE_FAILURE',
            payload: err
        })
    }
}

export const deleteNote = (noteID) => async dispatch => {
    dispatch({type: 'allNotes/DELETE_NOTE_START'});
    try {
        await notesRef.child(noteID).remove()
        dispatch({
            type: 'allNotes/DELETE_NOTE_SUCCESS',
        })
    } catch (err) {
        dispatch({
            type: 'allNotes/DELETE_NOTE_FAILURE',
            payload: err
        })
    }
}

export const setSearchTerm = (term) => {
    return {
        type: 'searchTerm/SET_SEARCH_TERM',
        payload: term
    }
}
