import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Home = () => {
  console.log('HOME');
  return (
    <div>
      <div>
        <Header />
        <div
          style={{ height: '700px', width: '100%', backgroundColor: 'wheat' }}
        />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
