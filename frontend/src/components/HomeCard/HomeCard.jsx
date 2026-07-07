import './HomeCard.scss';

function HomeCard({ img, alt, title, text }) {
    return (
        <article className="home-cards">
            <img className="home-cards_img" src={img} alt={alt} loading="lazy" />
            <div className='home-cards_text'>
                <h2 className="home-cards_title">{title}</h2>
                <p className="home-cards_desc">{text}</p>
            </div>
        </article>
    )
}
export default HomeCard