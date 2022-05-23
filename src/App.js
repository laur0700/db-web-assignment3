import './App.css';
import { useState, useEffect } from 'react'
import Loading from './components/Loading'
import Articles from './components/Articles'
import Authors from './components/Authors';
import axios from 'axios'

function App() {
  const [articles, setArticle] = useState(null)
  const [authors, setAuthor] = useState(null)

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(response => setArticle(response.data))
    axios.get('https://jsonplaceholder.typicode.com/users').then(response => setAuthor(response.data))
  }, [])

  return (
    <div className='d-flex flex-column'>
      {authors ? <Authors authors={authors} /> : <Loading />}
      {articles ? <Articles articles={articles} authors={authors} /> : <Loading />}
    </div>
  );
}

export default App;
