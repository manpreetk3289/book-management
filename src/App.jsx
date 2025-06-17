import './App.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import {BookList,BookForm,BookFilter} from './component/Book';



function App() {
  const books = useSelector((state) => state.book);

  const [filter, setFilter] = useState();

  const filteredBooks = books.filter(book => {
    if (filter === 'READ') return book.isRead;
    if (filter === 'UNREAD') return !book.isRead;
    return true;
  });


  return (
    <div className="fixed top-0 right-0 left-0">
      <h1 className='mb-4'>Book Management</h1>
      <hr/>
       <BookFilter currentFilter={filter} setFilter={setFilter} />
        <BookList books={filteredBooks} />

        <hr/>
        <BookForm/>
    </div>

  )
}

export default App
