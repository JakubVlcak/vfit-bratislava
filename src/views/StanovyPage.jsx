import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import stanovyDoc from '../stanovy/stanovy.doc?url'

export default function StanovyPage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <Navbar />

      <section className="pt-56 pb-20 px-8 max-w-4xl mx-auto">
        <div className="bg-surface-container-low rounded-2xl p-10 md:p-14 border border-outline-variant/10">

          <h1 className="font-headline text-4xl font-black mb-4 text-center">STANOVY V-FIT</h1>
          <p className="text-on-surface-variant text-center mb-8">Stanovy občianskeho združenia</p>

          <a
            href={stanovyDoc}
            download="stanovy-vfit.doc"
            className="flex items-center justify-center gap-2 mb-12 signature-gradient text-on-primary px-8 py-4 rounded-full font-bold hover:scale-95 transition-all duration-200 max-w-xs mx-auto"
          >
            Stiahnuť stanovy (.doc)
          </a>

          <h2 className="font-headline text-lg font-bold mt-10 mb-2">Čl. I. — Názov občianskeho združenia</h2>
          <p className="text-on-surface-variant mb-6">V-FIT — športovo-relaxačné centrum</p>

          <h2 className="font-headline text-lg font-bold mt-10 mb-2">Čl. II. — Sídlo občianskeho združenia</h2>
          <p className="text-on-surface-variant mb-6">Gercenova 8/F, 851 01 Bratislava 5</p>

          <h2 className="font-headline text-lg font-bold mt-10 mb-2">Čl. III. — Základné ustanovenia</h2>
          <p className="text-on-surface-variant mb-3">1. V-FIT — športovo-relaxačné centrum, Gercenova 8/F, Bratislava je v zmysle zákona č. 83/1990 Zb. o združovaní občanov v znení neskorších predpisov dobrovoľným združením občanov.</p>
          <p className="text-on-surface-variant mb-6">2. V-FIT — športovo-relaxačné centrum, je samostatnou a nezávislou právnickou osobou vykonávajúcou činnosť podľa vlastných stanov a vnútorných predpisov a podľa právnych noriem Slovenskej republiky.</p>

          <h2 className="font-headline text-lg font-bold mt-10 mb-2">Čl. IV. — Cieľ občianskeho združenia</h2>
          <p className="text-on-surface-variant mb-2">1. V-FIT — športovo-relaxačné centrum je dobrovoľnou organizáciou združujúcou záujemcov orientovaných na oblasť športu.</p>
          <p className="text-on-surface-variant mb-2">2. Cieľom združenia je najmä u detí a mládeže radosť z pohybu a boj proti drogám. U ostatných je to regenerácia a prevencia proti chorobám.</p>
          <p className="text-on-surface-variant mb-2">3. Ponúka rôznorodú a vzájomne sa doplňujúcu mozaiku pohybových aktivít a programy športovej činnosti ako významný faktor pre rozvoj telesnej zdatnosti a podpory zdravia jednotlivcov i populácie.</p>
          <p className="text-on-surface-variant mb-2">4. Vedie deti a mládež ku športovej činnosti, kultúre a vytvára podmienky pre športové vyžitie v rôznych druhoch športu (napr. aerobik, tanec, gymnastika...).</p>
          <p className="text-on-surface-variant mb-2">5. Rozvíja rekreačnú športovú činnosť zameranú hlavne na deti, mládež, ale aj na rodiny, pracujúcich, telesne a mentálne postihnuté osoby.</p>
          <p className="text-on-surface-variant mb-2">6. V spolupráci s ostatnými klubmi podobného zamerania na Slovensku a v zahraničí organizuje prehliadky a exhibície.</p>
          <p className="text-on-surface-variant mb-2">7. Organizuje športové, telovýchovné a kultúrne aktivity na základných, stredných a materských školách pre svojich členov a aj pre ostatnú verejnosť.</p>
          <p className="text-on-surface-variant mb-2">8. Organizuje športové súťaže a podujatia.</p>
          <p className="text-on-surface-variant mb-2">9. Organizuje športové kurzy, prednášky a semináre pre fyzické osoby /resp. pre verejnosť/.</p>
          <p className="text-on-surface-variant mb-2">10. Organizuje nácviky, sústredenia, vystúpenia, detský a mládežnícky športový tábor pre pohybovú prípravu a oddych v priebehu celého roka.</p>
          <p className="text-on-surface-variant mb-2">11. Organizuje relaxačné pobyty pre regeneráciu a oddych.</p>
          <p className="text-on-surface-variant mb-2">12. Obhajuje záujmy svojich členov a umožňuje podľa svojich možností zvyšovanie kvalifikácie trénerov /napr. školenie, kurzy/.</p>
          <p className="text-on-surface-variant mb-2">13. Spolupracuje s fyzickými a právnickými osobami pôsobiacimi v oblasti telesnej kultúry a podporujúcimi oblasť telesnej kultúry.</p>
          <p className="text-on-surface-variant mb-2">14. Propaguje vlastnú činnosť, telesnú výchovu a šport.</p>
          <p className="text-on-surface-variant mb-2">15. Vytvára podľa svojich možností ekonomické, materiálno technické, personálne, administratívne, sociálne, bezpečnostné a iné podmienky na činnosť OZ i jej členov.</p>
          <p className="text-on-surface-variant mb-6">16. Vytvára podľa svojich možností podmienky na uspokojovanie záujmov a potrieb svojich členov, ale aj ostatnej verejnosti v oblasti telesnej výchovy, športu, ale aj v spoločenskom a kultúrnom živote, ktoré prispievajú k získavaniu a rozvoju pohybových i telesných zručností a schopností, k upevňovaniu fyzického a duševného zdravia a zdatnosti, k formovaniu osobnosti s kladnými morálnymi a vôľovými vlastnosťami a k spoločensky vhodnému spôsobu trávenia voľného času.</p>

          <h2 className="font-headline text-lg font-bold mt-10 mb-2">Čl. V. — Členstvo v občianskom združení</h2>
          <p className="text-on-surface-variant mb-2">1. Členom združenia môže byť každá fyzická a právnická osoba, ktorá súhlasí so stanovami V-FIT — športovo-relaxačného centra a vyplní písomnú prihlášku. Maloletí sa môžu stať členom iba na základe písomnej prihlášky podpísanej rodičom, resp. ich zákonným zástupcom.</p>
          <p className="text-on-surface-variant mb-2">2. Prihláška musí byť podaná písomne a musí obsahovať: meno a priezvisko, rok narodenia, telefonický kontakt, prehlásenie žiadateľa, že pozná svoj zdravotný stav a podpis žiadateľa o členstvo.</p>
          <p className="text-on-surface-variant mb-2">3. O prijatí za člena združenia rozhoduje výkonný výbor na základe písomnej prihlášky.</p>
          <p className="text-on-surface-variant mb-4">4. Členstvo vzniká dňom prijatia člena.</p>
          <p className="text-on-surface-variant mb-2">5. Člen má právo:</p>
          <p className="text-on-surface-variant ml-6 mb-1">— podieľať sa na činnosti združenia</p>
          <p className="text-on-surface-variant ml-6 mb-1">— voliť a byť volený do orgánov združenia po dovŕšení 18. roku života</p>
          <p className="text-on-surface-variant ml-6 mb-4">— dodávať návrhy a pripomienky</p>
          <p className="text-on-surface-variant mb-2">6. Povinnosti člena sú:</p>
          <p className="text-on-surface-variant ml-6 mb-1">— dodržiavať stanovy, vnútorné predpisy a uznesenia orgánov združenia</p>
          <p className="text-on-surface-variant ml-6 mb-1">— plniť rozhodnutia orgánov združenia</p>
          <p className="text-on-surface-variant ml-6 mb-1">— aktívne sa zapájať do činnosti združenia</p>
          <p className="text-on-surface-variant ml-6 mb-1">— chrániť a ošetrovať majetok združenia</p>
          <p className="text-on-surface-variant ml-6 mb-1">— vystupovať v duchu morálnych zásad a fair play, dbať o dobré meno združenia</p>
          <p className="text-on-surface-variant ml-6 mb-1">— riadne a včas platiť členské príspevky a iné príspevky, ktoré schválili orgány združenia</p>
          <p className="text-on-surface-variant ml-6 mb-4">— riadne plniť funkcie a úlohy, ktorými ho poverilo združenie</p>
          <p className="text-on-surface-variant mb-2">7. Členstvo zaniká:</p>
          <p className="text-on-surface-variant ml-6 mb-1">— oznámením člena o vystúpení z občianskeho združenia</p>
          <p className="text-on-surface-variant ml-6 mb-1">— vyškrtnutím pre neplnenie si základných povinností</p>
          <p className="text-on-surface-variant ml-6 mb-1">— vylúčením pre obzvlášť závažné previnenie</p>
          <p className="text-on-surface-variant ml-6 mb-4">— smrťou</p>
          <p className="text-on-surface-variant mb-6">O vyškrtnutí a vylúčení rozhoduje výkonný výbor.</p>

          <h2 className="font-headline text-lg font-bold mt-10 mb-2">Čl. VI. — Orgány občianskeho združenia</h2>
          <p className="text-on-surface-variant mb-2">Orgánmi občianskeho združenia sú:</p>
          <p className="text-on-surface-variant ml-6 mb-1">a) členská schôdza alebo mimoriadna členská schôdza</p>
          <p className="text-on-surface-variant ml-6 mb-1">b) výkonný výbor</p>
          <p className="text-on-surface-variant ml-6 mb-1">c) predseda</p>
          <p className="text-on-surface-variant ml-6 mb-1">d) hospodár</p>
          <p className="text-on-surface-variant ml-6 mb-6">e) revízor</p>

          <h2 className="font-headline text-lg font-bold mt-10 mb-2">Čl. VII. — Členská schôdza</h2>
          <p className="text-on-surface-variant mb-2">1. Najvyšším orgánom združenia je členská schôdza, utvorená zo všetkých členov združenia. Koná sa raz za kalendárny rok, resp. mimoriadna členská schôdza a zvoláva ju výkonný výbor.</p>
          <p className="text-on-surface-variant mb-2">2. Do výlučnej pôsobnosti schôdze patrí:</p>
          <p className="text-on-surface-variant ml-6 mb-1">a) schvaľuje vznik, rozpustenie a zánik združenia, zlúčenie, vstúpenie do inej právnickej osoby alebo vystúpenie z nej.</p>
          <p className="text-on-surface-variant ml-6 mb-1">b) schvaľuje stanovy, vnútorné predpisy a symboliku združenia, ich zmeny a dodatky</p>
          <p className="text-on-surface-variant ml-6 mb-1">c) schvaľuje správu o činnosti, o hospodárení a majetku za uplynulé obdobie, ktorú predkladá výkonný výbor</p>
          <p className="text-on-surface-variant ml-6 mb-1">d) volí a odvoláva členov výkonného výboru na obdobie troch rokov</p>
          <p className="text-on-surface-variant ml-6 mb-4">e) volí a odvoláva revízora na obdobie troch rokov</p>
          <p className="text-on-surface-variant mb-6">3. Členská schôdza sa uznáša nadpolovičnou väčšinou. O zmene vlastných stanov, o vystúpení, zániku a odvolaní člena výboru sa uznáša 2/3 väčšinou.</p>

          <h2 className="font-headline text-lg font-bold mt-10 mb-2">Čl. VIII. — Výkonný výbor</h2>
          <p className="text-on-surface-variant mb-2">1. Výkonný výbor je za svoju činnosť zodpovedný najvyššiemu orgánu, má štyroch členov.</p>
          <p className="text-on-surface-variant mb-2">2. Do výlučnej pôsobnosti výkonného výboru patrí:</p>
          <p className="text-on-surface-variant ml-6 mb-1">a) riadenie činnosti združenia v období medzi zasadnutiami najvyššieho orgánu</p>
          <p className="text-on-surface-variant ml-6 mb-1">b) voľba a odvolanie predsedu, hospodára</p>
          <p className="text-on-surface-variant ml-6 mb-1">c) voľba a odvolanie členov výkonného výboru</p>
          <p className="text-on-surface-variant ml-6 mb-1">d) zvolávanie a príprava členských schôdzí združenia</p>
          <p className="text-on-surface-variant ml-6 mb-4">e) rozhoduje o všetkých otázkach, ktoré nie sú zverené do právomoci členskej schôdze a rozhoduje o zásadách hospodárenia s finančnými prostriedkami.</p>
          <p className="text-on-surface-variant mb-2">3. Členom výkonného výboru môže byť len fyzická osoba, ktorá je bezúhonná a v plnom rozsahu spôsobilá na právne úkony.</p>
          <p className="text-on-surface-variant mb-2">4. Členstvo vo výkonnom výbore je dobrovoľnou a neplatenou funkciou.</p>
          <p className="text-on-surface-variant mb-2">5. Členstvo vo výkonnom výbore zaniká: uplynutím funkčného obdobia, odstúpením, odvolaním, smrťou.</p>
          <p className="text-on-surface-variant mb-2">6. Výkonný výbor zvoláva predseda, alebo jeho zástupca a vedie ich.</p>
          <p className="text-on-surface-variant mb-2">7. Výkonný výbor je schopný sa uznášať, ak sa zasadania zúčastní nadpolovičná väčšina členov. V prípade rovnosti hlasov rozhoduje hlas predsedu.</p>
          <p className="text-on-surface-variant mb-6">8. Na uvoľnené miesto člena výboru výkonný výbor kooptuje do 30 dní od uvoľnenia miesta nového člena. Táto kooptácia podlieha schváleniu najbližšej členskej schôdzi.</p>

          <h2 className="font-headline text-lg font-bold mt-10 mb-2">Čl. IX. — Predseda</h2>
          <p className="text-on-surface-variant mb-2">1. Predseda je štatutárnym orgánom združenia, ktorý riadi jeho činnosť a koná v jeho mene.</p>
          <p className="text-on-surface-variant mb-2">2. Predsedu volí a odvoláva výkonný výbor.</p>
          <p className="text-on-surface-variant mb-2">3. Funkčné obdobie je trojročné.</p>
          <p className="text-on-surface-variant mb-2">4. Predsedom môže byť fyzická osoba, ktorá je spôsobilá na právne úkony a je bezúhonná.</p>
          <p className="text-on-surface-variant mb-6">5. Návrh na voľbu a odvolanie predsedu môže podať každý člen výkonného výboru alebo revízor.</p>

          <h2 className="font-headline text-lg font-bold mt-10 mb-2">Čl. X. — Hospodár</h2>
          <p className="text-on-surface-variant mb-2">1. Hospodár zastupuje predsedu v čase jeho neprítomnosti vo všetkých jeho činnostiach.</p>
          <p className="text-on-surface-variant mb-2">2. Hospodár riadi finančné záležitosti združenia.</p>
          <p className="text-on-surface-variant mb-2">3. Hospodár je druhým štatutárnym zástupcom združenia.</p>
          <p className="text-on-surface-variant mb-2">4. Hospodára volí a odvoláva výkonný výbor.</p>
          <p className="text-on-surface-variant mb-6">5. Funkčné obdobie hospodára je trojročné.</p>

          <h2 className="font-headline text-lg font-bold mt-10 mb-2">Čl. XI. — Revízor</h2>
          <p className="text-on-surface-variant mb-2">1. Revízor je kontrolným orgánom združenia.</p>
          <p className="text-on-surface-variant mb-2">2. Revízora volí a odvoláva členská schôdza.</p>
          <p className="text-on-surface-variant mb-2">3. Funkčné obdobie revízora je trojročné.</p>
          <p className="text-on-surface-variant mb-2">4. Revízor je oprávnený nahliadnuť do všetkých dokladov a záznamov týkajúcich sa činností združenia a kontrolovať, či účtovné záznamy sú vedené v súlade so skutočnosťou a či sa činnosť združenia uskutočňuje v súlade so všeobecne záväznými predpismi a stanovami.</p>
          <p className="text-on-surface-variant mb-2">5. Revízor má právo zúčastňovať sa na schôdzach výkonného výboru s poradným hlasom.</p>
          <p className="text-on-surface-variant mb-6">6. Revízor je dobrovoľnou a neplatenou funkciou.</p>

          <h2 className="font-headline text-lg font-bold mt-10 mb-2">Čl. XII. — Zásady hospodárenia</h2>
          <p className="text-on-surface-variant mb-2">1. Združenie hospodári s hnuteľným a nehnuteľným majetkom.</p>
          <p className="text-on-surface-variant mb-2">2. Príjmami združenia sú príjmy plynúce z činností združenia: členské príspevky, dary, príspevky od fyzických a právnických osôb, príjmy z telovýchovnej, športovej, kultúrnej a inej verejnoprospešnej činnosti, dotácie, granty, príjmy z verejných zbierok, príjmy z podujatí, ceny zo súťaží, dedičstvo, príjmy z 2% dane, príjmy z lotérií, príjmy z predaja vlastnej literatúry, úroky z účtov.</p>
          <p className="text-on-surface-variant mb-2">3. Výdavkami združenia sú výdavky na podporu cieľa združenia: materiálno technické zabezpečenie, administratíva, odmeny a cestovné náhrady, odmeny pre autorov choreografií a externých pracovníkov, prevádzka, údržba a prenájom, doprava, ubytovanie a stravovanie, regenerácia a rehabilitácia športovcov, zvyšovanie kvalifikácie, štartovné a registračné poplatky, propagácia, bankové poplatky a iné výdavky schválené výkonným výborom.</p>
          <p className="text-on-surface-variant mb-6">4. Evidencia príjmov a výdavkov prebieha formou jednoduchého účtovníctva v znení príslušných predpisov. Evidenciu vedie hospodár združenia.</p>

          <h2 className="font-headline text-lg font-bold mt-10 mb-2">Čl. XIII. — Zánik združenia</h2>
          <p className="text-on-surface-variant mb-2">1. O zániku združenia jeho zlúčením s iným občianskym združením alebo dobrovoľným rozpustením, rozhoduje najvyšší orgán.</p>
          <p className="text-on-surface-variant mb-2">2. Najvyšší orgán menuje likvidátora (likvidačnú komisiu), ktorý vyrovná všetky dlhy a záväzky a s likvidačným majetkom naloží podľa rozhodnutia najvyššieho orgánu.</p>
          <p className="text-on-surface-variant mb-6">3. Združenie zaniká dňom výmazu z registra občianskych združení.</p>

          <h2 className="font-headline text-lg font-bold mt-10 mb-2">Čl. XIV. — Záverečné ustanovenia</h2>
          <p className="text-on-surface-variant mb-2">1. Občianske združenie V-FIT — športovo-relaxačné centrum je právnickou osobou s právnou subjektivitou v zmysle zákona č. 83/1990 Zb. Navonok ju zastupuje predseda a hospodár.</p>
          <p className="text-on-surface-variant mb-2">2. Občianske združenie V-FIT — športovo-relaxačné centrum vzniká dňom registrácie na MV SR.</p>
          <p className="text-on-surface-variant mb-2">3. Zmeny a úpravy v stanovách schvaľuje členská schôdza.</p>
          <p className="text-on-surface-variant mb-8">4. Tieto stanovy sú platné na dobu neurčitú.</p>

          <p className="text-on-surface-variant mb-4">V Bratislave, dňa 12. 7. 2010</p>
          <p className="text-on-surface-variant mb-2">Registrované na Ministerstve vnútra Slovenskej republiky dňa 6. 8. 2010, číslo spisové: VVS/1-900/90-360 18</p>
          <p className="text-on-surface-variant mb-2">IČO: 42180287 — pridelené Slovenským štatistickým úradom Slovenskej republiky dňa 18. 8. 2010</p>
          <p className="text-on-surface-variant mb-2">Právna forma: 701 Združenie (zväz, spolok, spoločnosť, klub ai.)</p>
          <p className="text-on-surface-variant">Odvetvie ekonomickej činnosti — hlavná činnosť (OKEČ): 93120 Činnosti športových klubov</p>

        </div>
      </section>

      <Footer />
    </div>
  )
}
