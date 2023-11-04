import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Profil } from './components/Profil';
import { Informations_p } from './components/Informations_p';
import { Photo } from './components/Photo';
import { Intérêts } from './components/Intérêts';
import { Formation } from './components/Formation';
import { Compétences_ling } from './components/Compétences_ling';
import { Compétences } from './components/Compétences';
import { Compétences_tech } from './components/Compétences_tech';
import { Description_de_l_objectif_professionnel } from './components/Description_de_l_objectif_professionnel';
import { Titredelapage } from './components/Titredelapage';
function App() {
  return (
      <>
      <Titredelapage />
      <body>
        <div className='cv-container'>  
          <div className='cv-column1'>
            <Photo />
            <Header name='ELHOUAT' />
            <Profil />
            <Informations_p />
            <Formation />
          </div>
          <div className='cv-column2'>
            <Description_de_l_objectif_professionnel />
            <Compétences />
            <Compétences_tech />
            <Compétences_ling />
            <Intérêts />
          </div>
        </div>
        <footer>
          <Footer />
        </footer>
      </body>
      </>
  );
}

export default App;
