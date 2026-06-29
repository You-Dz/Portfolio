import './TechWatchCard.scss';

function TechWatchCard({ data }) {
    const { name, image, alt, link, description } = data;

    return (
        <article className="techwatch-card">
            <a
                className="techwatch-card_image-link"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visiter la source ${name} (nouvel onglet)`}
            >
                {image ? (
                    <img
                        className="techwatch-card_image"
                        src={image}
                        alt={alt}
                    />
                ) : (
                    <div className="techwatch-card_image techwatch-card_image_empty" />
                )}
            </a>

            <div className="techwatch-card_content">
                <h2 className="techwatch-card_content-title">{name}</h2>
                <p className="techwatch-card_content-description">{description}</p>
            </div>
        </article>
    );
}

export default TechWatchCard;