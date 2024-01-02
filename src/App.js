import './App.css'
import { useState, useEffect } from 'react'
import { getAllArticles, getTopArticles } from './apiCalls'
import { Route, Routes, useLocation } from 'react-router-dom'
import AllArticles from './Components/AllArticles/AllArticles'

function App() {

  const [allArticles, setAllArticles] = useState([])
  const [topArticles, setTopArticles] = useState([])
  const [serverError, setServerError] = useState({hasError: false, message: ''})


  useEffect(() => {
    getAllArticles()
      .then(data => {
        setAllArticles(data.articles)
      })
      .catch(error => {
        setServerError({hasError: true, message: `${error.message}`})
      })
  }, [])

  useEffect(() => {
    getTopArticles()
      .then(data => {
        console.log(data.articles)
      })
      .catch(error => {
        setTopArticles({hasError: true, message: `${error.message}`})
      })
  }, [])

  return (
    <div className="App">
      {/* <Header /> */}
      <Routes>
        <Route path='/' element={<AllArticles allArticles={allArticles}/>} />
      </Routes>
    </div>
  )
}

export default App
