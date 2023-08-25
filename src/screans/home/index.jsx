import Header from '../../components/Header';
import Banner from '../../components/Banner';
import CardCategory from '../../components/CardCategory';
import CardProducts from '../../components/CardProducts';
import Partiner from '../../components/Partner';
import Marca from '../../components/Marca';
import Footer from '../../components/Footer';

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
