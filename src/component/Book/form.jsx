import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { bookActions } from "../../store/slice/bookSlice";

function BookForm({ book = {}, isEdit = false }) {

  
  const {
    title = "",
    author = "",
    description = "",
    isEditable = true,
  } = book;

  const inputClass = `border ${
    isEditable ? "border-gray-300" : "border-transparent"
  } px-3 py-1 rounded w-1/5`;
  
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // handling form data //
    const fd = new FormData(e.target);
    const data = Object.fromEntries(fd.entries());
    dispatch(bookActions.addBooks(data));
    // reset data//
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center  justify-center gap-2 mb-4">
    <input
      type="text"
      readOnly={!isEditable}
      placeholder="Title"
      name="title"
      defaultValue={title}
      className={inputClass}
    />
  
    <input
      type="text"
      readOnly={!isEditable}
      placeholder="Author"
      name="author"
      defaultValue={author}
      className={inputClass}
    />
  
    <input
      type="text"
      readOnly={!isEditable}
      placeholder="Description"
      name="description"
      defaultValue={description}
      className={inputClass}
    />
  
    {!isEdit && (
      <button
        type="submit"
        className="text-white bg-transparent px-3 py-1 "
      >
        + Add Book
      </button>
    )}
  </form>
  
  );
}

export default BookForm;
