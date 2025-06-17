import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
    name: "books",
    initialState: [
        { id: "1", title: "Book1", author: 'Author1', description: 'DEs', isRead: true, isEditable: false },
        { id: "2", title: "Book2", author: 'Author2', description: 'No', isRead: true, isEditable: false },
        { id: "3", title: "Book3", author: 'Author3', description: 'Yes', isRead: false, isEditable: false },
    ],
    reducers: {
        getBooks: (state) => state,
        addBooks: (state, action) => {
            return [
                ...state,
                {
                    id: Math.floor(Math.random() * 100),
                    ...action.payload
                },
            ];
        },
        updateBooks: (state, action) => {
            const _id = action.payload.id;
            const _book = state.find(data => data.id === _id);
            if (_book) {
                _book.isEditable = !_book.isEditable;

            }
        },
        setStatus: (state, action) => {
            const _id = action.payload;
            const _book = state.find(data => data.id === _id);
            if (_book) {
                _book.isRead = !_book.isRead;
            }
        }
    },
});

export const bookActions = bookSlice.actions;

export default bookSlice.reducer;
