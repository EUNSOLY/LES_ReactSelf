import { Link } from 'react-router-dom';
function ListCard(props) {
  return (
    <li className="list">
      <div className="imgCon">
        <p className="discount">{props.item.discount}%</p>
        <img
          src={`${process.env.PUBLIC_URL}/img/${props.item.img}`}
          alt={props.item.title}
        />
        <p className="imgLabel">ADD TO CART</p>
      </div>
      <p>{props.item.title}</p>
      <p>{props.item.price}원</p>
      <Link to={`/detail/${props.item._id}`} className="detailBtn"></Link>
    </li>
  );
}

export default ListCard;
