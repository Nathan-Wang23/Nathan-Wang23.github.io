import './carousel.css';

const Card = ({ index, title, description, img, cardStyle }) => {
    return (
      <div id={index} className={`${cardStyle}`}>
        <img className="projImg" src={img} alt={title} />
        <div className='sidePiece'>
            <h2 className="projTit">{title}</h2>
            <p className="desc">{description}</p>
        </div>
      </div>
    );
  };

export default Card;
