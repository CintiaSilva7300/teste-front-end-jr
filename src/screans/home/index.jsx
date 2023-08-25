import Marca from '../../components/Marca';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import Partiner from '../../components/Partner';
import CardCategory from '../../components/CardCategory';
import CardProducts from '../../components/CardProducts';

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <CardCategory />
      <CardProducts />
      <Partiner />
      <Marca />
      <Footer />
    </>
  );
}
