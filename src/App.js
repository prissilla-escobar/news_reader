import './App.css'
import { useState, useEffect } from 'react'
import { getAllArticles, getTopArticles } from './apiCalls'
import { Route, Routes, useLocation } from 'react-router-dom'
import AllArticles from './Components/AllArticles/AllArticles'
import Header from './Components/Header/Header'

function App() {

  const [allArticles, setAllArticles] = useState([])
  const [topArticles, setTopArticles] = useState([])
  const [selectedCountry, setSelectedCountry] = useState('')
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

  const fetchTopArticles = () => {
    if (selectedCountry) {
      getTopArticles(selectedCountry)
        .then((data) => {
          setTopArticles(data.articles)
        })
        .catch((error) => {
          setServerError({ hasError: true, message: `${error.message}` })
        })
    }
  }

  useEffect(() => {
    fetchTopArticles()
  }, [selectedCountry])

  const resetError = () => {
    setServerError({hasError: false, message: ''})
  }

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  }

  return (
    <div className="App">
      <Header 
        selectedCountry={selectedCountry}
        handleCountryChange={handleCountryChange}
        resetError={resetError}
        topArticles={topArticles}
      />
      <Routes>
        <Route path='/'
          element={<AllArticles
            topArticles={topArticles}
            setServerError={setServerError}
          />} />
      </Routes>
    </div>
  )
}

export default App
