export const selectAllNotes = state => {
    return state.allNotes
}

export const selectSearchTerm = (state) => {
    return state.searchTerm
}

export const selectFilteredAllNotes = (state) => {

    const allRecipes = selectAllNotes(state);
    const searchTerm = selectSearchTerm(state);

    return allRecipes.filter((note) =>
        (note.text.toLowerCase().includes(searchTerm.toLowerCase()) || note.title.toLowerCase().includes(searchTerm.toLowerCase()))
    ).map((note) => {
        if (searchTerm) {
            return {
                ...note,
                text: note.text.replace(new RegExp(searchTerm, "gi"), (match) => `<mark>${match}</mark>`),
                title: note.title.replace(new RegExp(searchTerm, "gi"), (match) => `<mark>${match}</mark>`)
            }
        } else {
            return note
        }
    });
};
