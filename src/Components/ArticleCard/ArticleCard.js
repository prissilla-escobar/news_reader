import './ArticleCard.css'
import { format } from 'date-fns'

function ArticleCard({ title, urlToImage, publishedAt, content, description, author, url, source }) {

    return (
        <div className='card'>
            <div className='image-container'>
                <img 
                  className='article-image'
                  key={title}
                  id={title}
                  src={urlToImage || 'https://cdn3.iconfinder.com/data/icons/communication-mass-media-news/512/breaking_news_tv-512.png'}
                  alt={`Article snapshot`}
                />
            </div>
            <div className='article-info'>
                <h2>{title}</h2>
                <h3>Published: {format(new Date(publishedAt), "MMMM dd, yyyy hh:mm a")}</h3>
                <p>{content}</p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ArticleCard