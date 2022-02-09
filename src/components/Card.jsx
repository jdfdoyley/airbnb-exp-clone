export default function Card({ item }) {
  let badgeText;

  if (item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (item.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="Card">
      {badgeText && <div className="Card--badge">{badgeText}</div>}
      <img
        className="Card--photo"
        src={`/images/${item.coverImg}`}
        alt={item.altText}
      />
      <div className="Card--rating">
        <img className="star" src="/images/star.png" alt="Star" />
        <span className="rate">{item.stats.rating}</span>
        <span className="amount gray">({item.stats.reviewCount}) • </span>
        <span className="location gray">{item.location}</span>
      </div>
      <p className="Card--title">{item.title}</p>
      <p className="Card--price">
        <span className="bold">From ${item.price}</span> / Person
      </p>
    </div>
  );
}
