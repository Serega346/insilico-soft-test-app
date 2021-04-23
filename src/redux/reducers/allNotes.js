const initialState = []

export const allNotesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'allNotes/FETCH_NOTES_SUCCESS': {
            return action.payload
        }
        case 'EDIT_NOTE_SUCCESS': {
            return state.map((note) => note.id === action.payload.id ? {
                ...action.payload
            } : note)
        }
        default: {
            return state
        }
    }
}
