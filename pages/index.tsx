import React from 'react';
import { AboutSection } from '../components/about-section';
import { WorkspaceSection } from '../components/workspace-section';
import { Layout } from '../layouts/index/layout';
import Slider from '../components/slider';

const Home = () => {
  return (
    <>
      <Layout>
        <div id="palvelumme">
          <AboutSection>
            <h2>
              Palvelumme
              <br />
            </h2>
            <p>
              Lähtökohtamme on aina kuunnella asiakkaan idea ja jalostaa siitä
              toimiva palvelu loppukäyttäjää varten.{' '}
              <span className="gray">
                Kaikissa projekteissamme etusijalla on helppokäyttöisyys,
                ylläpidettävyys, tietoturva sekä näyttävä visuaalinen ilme.
              </span>
            </p>
          </AboutSection>
          <AboutSection>
            <h3>Ohjelmistokehitys</h3>
            <p>
              Tuotamme juuri sinun tai yrityksesi tarpeisiin soveltuvat
              ohjelmistot suunnittelusta käyttöönottoon saakka. Oli kyseessä
              sitten täysin uusi sovellus tai vanhan muokkaus ja ehostus,
              kauttamme työ hoituu kätevästi. Voit olla varma että sovelluksesi
              on käyttäjäystävällinen, tietoturvallinen sekä tietenkin
              persoonallinen. Hyödynnämme töissä edistyneimpiä teknologioita
              varmistaen näin myös sovelluksen pitkän elinkaaren. Älä epäile
              myöskään kysyä jos jokin asia jää epäselväksi.
            </p>
            <h3>Verkkosivut</h3>
            <p>
              Tuliterät sivut tai vanhojen uusiminen, meiltä se käy käden
              käänteessä. Asiakkaan kanssa kartoitetaan toiveet, vaatimukset ja
              sisältöä, jonka jälkeen sivua voidaan kehittää suljetussa
              ympäristössä poissa muiden ihmisten katseilta. Valmista sivua on
              myös tarpeen mukaan helppo päivittää julkaisun jälkeen. Koko
              paketti meiltä tehokkaasti ja edullisesti. Toteutamme myös
              verkkokaupat.
            </p>
            <h3>Mobiilisovellukset</h3>
            <p>
              Jos etsit kumppania mobiilisovelluksen toteutukseen tai sen
              ylläpitoon, olet oikeassa paikassa. Hyvin toteutetulla
              sovelluksella yrityksen kilpailukyky digitalisaation vallitessa
              paranee. Pääset myös itse mukaan kehitystyöhön, jolloin tuotteesta
              saadaan asiakkaan näköinen. Mukaudumme projektikohtaisesti ja
              valitsemme sovellukseesi sopivat teknologiat. Jos kaipaat
              lisätietoja ota rohkeasti yhteyttä, tyhmiä kysymyksiä ei ole!
            </p>
            <h3>API-ratkaisut</h3>
            <p>
              Suurien datamäärien liikuttelemiseksi ohjelmistojen välillä
              tarvitaan rajapintoja. API:t ovat myös avainasemassa skaalautuvien
              ja ketterien ohjelmistoprojektien sisällä. Meiltä kaikki palvelut
              konsultoinnista API-ratkaisujen suunnitteluun ja asiakaskohtaiseen
              räätälöintiin. "Kommunikaatio ihmisten välillä on tärkeää, mutta
              ohjelmistojen välillä tärkeämpää. "
            </p>
          </AboutSection>
          <div>
            <AboutSection>
              <h2>
                Eikö etsimäsi löytynyt edellä mainituista?
                <br />
              </h2>

              <p>
                Jokaisella yrityksellä on erityiset tarpeensa ja me mukaudumme
                projektikohtaisesti asiakkaan mukaan. Vaikka tarpeenne olisi
                jotain muuta kuin edellisessä listassa, ota rohkeasti yhteyttä
                ja keskustellaan enemmän.
              </p>
            </AboutSection>
          </div>
        </div>
        <WorkspaceSection />
        <div id="toimintatapamme">
          <AboutSection>
            <h2>Toimintatapamme</h2>
            <p>
              Autamme teitä luomaan pitkäjänteisiä ohjelmistoratkaisuja
              käyttäjäkokemus etusijalla.{' '}
            </p>
            <h2>Mutta kuinka me teemme sen?</h2>
            <h3>Ketterä kehitys</h3>
            <p>
              Ketterät ohjelmistoprojektit jaetaan eri pituisiin "sprintteihin".
              Sprintit voivat olla eripituisia ja sisällöltään hyvin erilaisia,
              mutta olennaisinta on niiden aikana ja välissä tapahtuma viestintä
              asiakkaan ja kehittäjän välillä. Kun on selvillä tarpeet ja
              mahdollisuudet, on helppo toteuttaa näyttävä lopputulos.
              Ohjelmistoprojektit alkavat aina huolellisella suunnittelulla ja
              asiakkaan kanssa yhdessä kartoitetaan vaatimukset ja toiveet.
            </p>
            <h3>Teknologiat</h3>
            <p>
              Pystyäksemme tuottamaan mahdollisimman käyttäjäystävällisiä sekä
              skaalautuvia tuotteita, käytämme aina edistyneimpiä teknologioita
              ja työkaluja sekä ohjelmointikieliä.
            </p>
            <br />
            <h4>Näistä esimerkkeinä mm.</h4>
            <br />
            <div className="examples">
              <div>- TypeScipt & React </div>
              <div>- React Native </div>
              <div>- Node, Express, GraphQL, PostgreSQL & MongoDB </div>
              <div>- AWS, Google Cloud Platform sekä Microsoft Azure </div>
            </div>
            <Slider />
          </AboutSection>
        </div>
      </Layout>
      <style jsx>{`
        @media (max-width: 800px) {
          h2 {
            font-size: 1.45rem;
          }
        }
        .gray {
          color: #666;
        }
      `}</style>
    </>
  );
};

export default Home;
