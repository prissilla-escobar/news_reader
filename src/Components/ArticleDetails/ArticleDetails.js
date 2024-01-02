import './ArticleDetails.css'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { format } from 'date-fns'

function ArticleDetails({ topArticles }) {
    const { title } = useParams()

    const article = topArticles.find((article) => article.title === title)

    if (!article) {
        return <div>Article not found</div>
      }

    return (
        <div className='details-container'>
            <Link to={`/`} className='go-home'>
              <div className='home'>Return Home</div>
            </Link>
            <img 
              className='selected-image'
              key={article.title}
              id={article.title}
              src={article.urlToImage || 'https://cdn3.iconfinder.com/data/icons/communication-mass-media-news/512/breaking_news_tv-512.png'}
              alt={`Article snapshot`}
            />
          <h2>{article.title}</h2>
          <h3>Published: {format(new Date(article.publishedAt), "MMMM dd, yyyy hh:mm a")}</h3>
          <h3>Source: {article.source.name}</h3>
          <p>Read More HERE</p>
        </div>
    )
}

export default ArticleDetails