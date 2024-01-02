import './AllArticles.css'
import ArticleCard from '../ArticleCard/ArticleCard'


function AllArticles({ topArticles, setServerError }) {

    const articleCards = topArticles.map(article => {
        return (
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
        )
    })

    return (
        <div className='all-articles'>
            {articleCards}
        </div>
    )
}

export default AllArticles