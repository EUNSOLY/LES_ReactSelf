import MainBanner from './MainBanner';
import MainList from './MainList';
function Main(props) {
  return (
    <section className="Main">
      <MainBanner />
      <MainList data={props.data} />
    </section>
  );
}

export default Main;
