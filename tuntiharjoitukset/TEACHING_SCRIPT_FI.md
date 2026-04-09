# WS06 React - Opetusskripti (tuntiharjoitukset 01-06)

Tämä dokumentti on opettajan päätason runko harjoituskokonaisuuden vetämiseen. Se on suunniteltu niin, että harjoitukset voidaan käydä läpi linjassa: ensin komponenttiperusteet, lopuksi API-integraation ajattelumalli.

## Tavoite

- Opiskelija ymmärtää Reactin ydinketjun: komponentit -> props ja state -> effectit -> lomakkeet -> reititys -> API-integraatio.
- Opiskelija osaa lukea ja muokata valmista React-rakennetta turvallisesti.
- Opiskelija pystyy toteuttamaan pienen end-to-end-ominaisuuden frontendissä.

## Ennakkovaatimukset

- Node.js ja npm asennettuna.
- Perus-JavaScript-osaaminen (funktiot, taulukot, oliot).
- Jokaisessa harjoituskansiossa komennot:

```bash
npm install
npm run dev
```

## Ehdotettu aikataulu

- 01_components: 20 min
- 02_props_state: 25 min
- 03_effects_and_fetch: 25 min
- 04_forms: 20 min
- 05_routing: 20 min
- 06_api_integration: 30 min

Kokonaiskesto noin 2 h 20 min. Tarvittaessa tiivistä joka osuudesta yksi harjoitustehtävä.

---

## Valmis dia-runko (suoraan käyttöön)

Alla olevat bulletit voi kopioida sellaisenaan dioihin.

### 1) Opening (aloitusdiat)

- Tänään rakennamme React-osaamisen ketjuna: komponentit -> state -> effectit -> forms -> routing -> API.
- Tavoite: jokainen osaa toteuttaa pienen toimivan frontend-flow'n tunnin lopussa.
- Työtapa: lyhyt demo, oma toteutus, nopea purku.
- Sääntö: kysy heti kun jumiudut, koska etenemme vaiheittain.
- Onnistumisen merkki: saat jokaisen osion lopussa toimivan pienen feature-palasen.

### 2) Transition-bulletit (siirtymädiat)

- Siirtymä 01 -> 02: Nyt kun komponentit ovat kunnossa, opetellaan miten data liikkuu parentilta childille ja takaisin tapahtumina.
- Siirtymä 02 -> 03: Nyt kun UI reagoi stateen, haetaan seuraavaksi data ulkopuolelta useEffectin avulla.
- Siirtymä 03 -> 04: Nyt kun dataa osataan hakea, opetellaan miten käyttäjä syöttää dataa turvallisesti lomakkeella.
- Siirtymä 04 -> 05: Nyt kun input toimii, yhdistetään näkymät reitityksellä aidoksi SPA-rakenteeksi.
- Siirtymä 05 -> 06: Nyt kun sivurakenne on valmis, kytketään koko virta API:in (CRUD-ajattelu).
- Mini-siirtymä demo -> tehtävä: Tämä oli opettajan malli, seuraavaksi teette saman idean omalla toteutuksella.
- Mini-siirtymä tehtävä -> purku: Pysähdytään 2 minuutiksi, katsotaan mitkä ratkaisut toimivat hyvin.

### 3) Recap promptit (osion lopun purku)

- Recap 01: Mitä eroa on propsilla ja statella yhdellä selkeällä lauseella?
- Recap 01: Milloin key voi aiheuttaa bugia listassa?
- Recap 02: Miksi event handler kannattaa määritellä parentissa tässä tehtävässä?
- Recap 02: Miksi johdettua dataa ei aina kannata tallentaa erilliseen stateen?
- Recap 03: Mihin dependency-array [] vaikuttaa useEffectissa?
- Recap 03: Miten näytät käyttäjälle loading-tilan ja virhetilan selkeästi?
- Recap 04: Mitä tarkoittaa controlled input käytännössä?
- Recap 04: Missä kohtaa validointi kannattaa tehdä ennen submitia?
- Recap 05: Milloin käyttäisit useParamsia ja miksi 404-reitti on tärkeä?
- Recap 05: Mitkä ovat yleisimmät routing-virheet alussa?
- Recap 06: Kuvaa CRUD-polku yhdestä napin painalluksesta palvelimen vastaukseen.
- Recap 06: Missä kohdassa näytät onnistumis- tai virhepalautteen käyttäjälle?

### 4) Closing (loppudia)

- Tänään opit rakentamaan Reactissa toimivan ketjun komponentista API-kutsuun.
- Seuraava askel: syvennä virheenkäsittelyä, validointia ja UI-tilojen mallinnusta.
- Oma jatkotehtävä: toteuta yksi lisäfeature mini-blogiin (haku, suodatus tai editointiparannus).

---

## 01_components

Lähde: [01_components/README.md](01_components/README.md)

### Oppimistavoitteet

- Ymmärtää, mitä funktionaalinen komponentti tekee.
- Osata välittää dataa propsien avulla.
- Osata renderöidä lista map-funktiolla ja käyttää key-proppia oikein.
- Ymmärtää useState-hookin perusidea.

### Opettajan demo (suositeltu kulku)

1. Näytä nopeasti [01_components/src/App.jsx](01_components/src/App.jsx) ja komponenttien kokoonpano.
2. Avaa [01_components/src/components/Greeting.jsx](01_components/src/components/Greeting.jsx) ja selitä propsin virta vanhemmalta lapselle.
3. Avaa [01_components/src/components/ProfileCard.jsx](01_components/src/components/ProfileCard.jsx) ja korosta key-propin merkitys listassa.
4. Avaa [01_components/src/components/CounterCard.jsx](01_components/src/components/CounterCard.jsx) ja selitä miksi statea päivitetään setterillä.

### Opiskelijatehtävä

- Lisää uusi kortti listaan (uusi henkilö, uniikki id).
- Muuta laskurin painikkeen teksti niin, että se näyttää myös viestin, kun count > 5.

### Tarkistuspiste

- Opiskelija osaa kertoa eron propsin ja staten välillä yhdellä lauseella.
- Opiskelija osaa selittää miksi index ei ole paras key useimmissa tilanteissa.

### Yleiset kompastuskivet

- Muokataan state-objektia suoraan setterin sijaan.
- Unohdetaan key listasta.

---

## 02_props_state

Lähde: [02_props_state/README.md](02_props_state/README.md)

### Oppimistavoitteet

- Ymmärtää, että state kannattaa omistaa yhteisessä vanhemmassa komponentissa.
- Osata välittää callback-funktio child-komponentille.
- Osata rakentaa UI, joka johdetaan state-arvoista.

### Opettajan demo (suositeltu kulku)

1. Avaa [02_props_state/src/App.jsx](02_props_state/src/App.jsx) ja osoita, mitä stateja parent omistaa.
2. Näytä, miten vote/select-callbackit kulkevat childille propseina.
3. Avaa [02_props_state/src/components/SummaryCard.jsx](02_props_state/src/components/SummaryCard.jsx) ja käy läpi johdetut arvot (filter, reduce, find).

### Opiskelijatehtävä

- Lisää uusi suodatinvaihtoehto tasolle (esim. Beginner/Intermediate/Advanced rinnalle uusi taso).
- Lisää SummaryCardiin uusi johdettu tunnusluku (esim. eniten ääniä saanut aihe).

### Tarkistuspiste

- Opiskelija osaa perustella, miksi päivityslogiikka pidetään parentissa.
- Opiskelija osaa toteuttaa event handlerin, joka saa parametrin (id).

### Yleiset kompastuskivet

- Handler kutsutaan heti renderissä (onClick={handleVote(id)}), vaikka pitäisi antaa funktio.
- Johdetut arvot tallennetaan turhaan erilliseen stateen.

---

## 03_effects_and_fetch

Kansio: [03_effects_and_fetch](03_effects_and_fetch)

### Oppimistavoitteet

- Ymmärtää useEffectin rooli sivuvaikutuksissa.
- Osata hakea dataa palvelimelta ja päivittää state.
- Osata mallintaa loading- ja error-tila.

### Opettajan demo (suositeltu kulku)

1. Selitä perusrakenne:

```jsx
useEffect(() => {
  // hae data
}, [])
```

2. Rakenna vaiheittain hakuvirta: setLoading(true) -> fetch -> setData -> catch -> finally.
3. Näytä, miten UI vaihtaa näkymää tilanteen mukaan (loading/error/success).

### Opiskelijatehtävä

- Toteuta lista, joka hakee JSONPlaceholderista posts-dataa.
- Näytä ensin 10 ensimmäistä riviä, ja lisää virheviesti jos haku epäonnistuu.

### Tarkistuspiste

- Opiskelija osaa sanoa, miksi dependency-array [] ajaa effectin vain mountissa.
- Opiskelija osaa perustella, miksi try/catch tarvitaan async-koodissa.

### Yleiset kompastuskivet

- Unohdetaan loading pois päältä finallyssa.
- Laitetaan effectiin vahingossa riippuvuus, joka aiheuttaa toistuvan haun.

---

## 04_forms

Kansio: [04_forms](04_forms)

### Oppimistavoitteet

- Ymmärtää controlled input -malli.
- Osata käsitellä lomakkeen submit ilman sivun reloadia.
- Osata tehdä kevyt asiakaspäävalidointi.

### Opettajan demo (suositeltu kulku)

1. Rakenna yksi controlled input:

```jsx
const [name, setName] = useState('')

<input value={name} onChange={(e) => setName(e.target.value)} />
```

2. Näytä formin submit-handler ja preventDefault.
3. Lisää yksinkertainen validointi (esim. minimipituus) ennen lähetystä.

### Opiskelijatehtävä

- Luo lomake kentille title, author, content.
- Näytä virheviesti, jos title tai content on liian lyhyt.

### Tarkistuspiste

- Opiskelija osaa selittää controlled vs uncontrolled input.
- Opiskelija osaa estää tyhjän lomakkeen lähetyksen.

### Yleiset kompastuskivet

- Unohdetaan value-prop, jolloin input ei ole aidosti controlled.
- Validointi tehdään vasta lähetyksen jälkeen ilman palautetta käyttäjälle.

---

## 05_routing

Kansio: [05_routing](05_routing)

### Oppimistavoitteet

- Osata rakentaa SPA-reititys React Routerilla.
- Ymmärtää perusreitit, dynaamiset parametrit ja 404-reitti.
- Osata tehdä navigaatio NavLinkilla.

### Opettajan demo (suositeltu kulku)

1. Rakennetaan route-puu (BrowserRouter + Routes + Route).
2. Lisää sivut: etusivu, about, yksittäinen post paramilla /posts/:id.
3. Näytä NavLink aktiivisen reitin tyylitykseen.
4. Lisää fallback-reitti path="*".

### Opiskelijatehtävä

- Lisää uusi reitti /contact ja oma sivukomponentti.
- Lisää dynaaminen reitti /posts/:id ja näytä id URL-parametrista.

### Tarkistuspiste

- Opiskelija osaa selittää, mihin useParams sopii.
- Opiskelija osaa perustella, miksi 404-reitti tarvitaan.

### Yleiset kompastuskivet

- BrowserRouter puuttuu tai Route-komponentit eivät ole Routesin sisällä.
- Linkkien polut eivät ala kauttaviivalla.

---

## 06_api_integration

Kansio: [06_api_integration](06_api_integration)

### Oppimistavoitteet

- Yhdistää lomake, listaus ja yksittäisen kohteen näkymä API-kutsuihin.
- Ymmärtää CRUD-virta frontendista käsin.
- Harjoitella onnistumis- ja virhetilanteiden käsittelyä käyttäjälle.

### Opettajan demo (suositeltu kulku)

1. Määrittele yhteinen API-perusosoite ja yksinkertainen fetch-apufunktio.
2. Toteuta listaus (GET), uuden luonti (POST), muokkaus (PUT) ja poisto (DELETE) korkean tasona.
3. Näytä, miten onnistuneen POSTin jälkeen navigoidaan detail-näkymään.
4. Käy läpi kaksi päivitysmallia:
   - Uudelleenhaku operaation jälkeen (selkeä aloittelijalle)
   - Optimistinen päivitys (maininta, ei pakollinen toteuttaa)

### Opiskelijatehtävä (mini-capstone)

- Toteuta "Blog mini":
  - Sivu listaa postaukset APIsta
  - Lomake luo uuden postauksen
  - Detail-sivu näyttää yhden postauksen ja tarjoaa poiston

### Tarkistuspiste

- Opiskelija osaa kuvata CRUD-polun käyttäjätoiminnosta HTTP-pyyntöön.
- Opiskelija osaa toteuttaa onnistumisviestin ja virheviestin ainakin yhdessä flowssa.

### Yleiset kompastuskivet

- JSON-bodya ei serialisoida (JSON.stringify puuttuu).
- Content-Type-otsake puuttuu POST/PUT-pyynnöistä.
- Virhetila nielaistaan ilman käyttäjälle näkyvää palautetta.

---

## Lähiopetuksen tarkistuslista

- Jokaisessa osiossa opettaja näyttää ensin pienen toimivan rungon.
- Opiskelijalle annetaan yksi pakollinen toteutustehtävä per osio.
- Lopussa tehdään lyhyt purku: mitä opittiin, mikä oli haastavaa, mikä onnistui.

## Arviointikriteerit harjoituskokonaisuudelle

- Opiskelija osaa rakentaa komponenttirakenteen ja jakaa vastuut parent/child-tasolla.
- Opiskelija osaa hakea dataa effectillä ja käsitellä loading/error-tilat.
- Opiskelija osaa toteuttaa controlled-lomakkeen ja reititetyn SPA-virran.
- Opiskelija osaa liittää frontendin APIin perus-CRUD-tasolla.

---

Tämä opetusrunko on tarkoitettu käytettäväksi suoraan tuntien vetämisessä. Voit soveltaa aikataulua ryhmän tason mukaan ja jättää jokaisesta osiosta bonuskohdat kotiharjoitukseksi.