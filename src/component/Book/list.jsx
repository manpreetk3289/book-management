import React from "react";
import { useDispatch } from "react-redux";

import { bookActions } from "../../store/slice/bookSlice";
import BookForm from "./form";

export default function BookList({ books }) {
  const dispatch = useDispatch();

  return (
    <ul className="space-y-4 h-[400px] overflow-auto">
      {books &&
        books.map((book) => (
          <li
            key={book.id}
            className="flex flex-row items-center justify-center gap-1 p-1 "
          >
       
            <BookForm book={book} isEdit={true} />

  
            <div className="flex items-center gap-4">
        
              <button
                onClick={() => dispatch(bookActions.setStatus(book.id))}
                className="flex max-w-[100px] items-center gap-1 text-sm text-white bg-transparent"
              >
                <input
                  type="checkbox"
                  name="isRead"
                  checked={book?.isRead}
                  readOnly
                  className="accent-blue-500"
                />
                <span>
                  {book.isRead ? "Unread" : "Read"}
                </span>
              </button>

           
              <button
                type="button"
                className="flex max-w-[100px] items-center gap-1 bg-transparent text-white px-3 py-1  text-sm"
                onClick={() => dispatch(bookActions.updateBooks(book))}
              >
                {book.isEditable ? "Save" : "Edit"}
              </button>
            </div>
          </li>
        ))}
    </ul>
  );
}
