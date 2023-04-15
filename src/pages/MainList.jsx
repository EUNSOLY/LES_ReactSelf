import ListCard from './ListCard';
import { Link } from 'react-router-dom';
function MainList(props) {
  let list = props.data;
  let dataList = list.filter((item) => item.category === 'top');
  return (
    <section className="MainList mw">
      <h1>Shop The Lastest</h1>
      <Link to="/Shop" className="btn">
        View All
      </Link>

      <ul className="listCon">
        {dataList.map((item, i) => {
          return <ListCard item={item} key={i} />;
        })}
      </ul>
    </section>
  );
}

export default MainList;
