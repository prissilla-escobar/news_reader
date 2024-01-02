import './ArticleCard.css'

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
        </div>
    )
}

export default ArticleCard