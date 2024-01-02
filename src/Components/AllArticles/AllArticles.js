import './AllArticles.css'
import ArticleCard from '../ArticleCard/ArticleCard'
import { Link } from 'react-router-dom'

function AllArticles({ topArticles }) {

  if (topArticles.length === 0) {
    return (
      <div className="no-articles-message">
        <p>Select a country in the top right to see top articles!</p>
      </div>
    )
  }

    const articleCards = topArticles.map(article => {
        return (
          <Link to={`/${article.title}`} className='card-link'>
            <ArticleCard 
              title={article.title}
              urlToImage={article.urlToImage}
              publishedAt={article.publishedAt}
              content={article.content}
              description={article.description}
              author={article.author}
              url={article.url}
              source={article.source.name}
            />
          </Link>
        )
    })

    return (
        <div className='all-articles'>
            {articleCards}
        </div>
    )
}

export default AllArticles