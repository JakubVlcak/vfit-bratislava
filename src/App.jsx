import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './views/HomePage'
import ContactPage from './views/ContactPage'
import AktualneInfoPage from './views/AktualneInfoPage'
import KruhovyTreningPage from './views/KruhovyTreningPage'
import AkciePage from './views/AkciePage'
import FitnessCentrumPage from './views/FitnessCentrumPage'
import AerobicCentrumPage from './views/AerobicCentrumPage'
import InformacieOCviceniachPage from './views/InformacieOCviceniachPage'
import InformaciePreVasPage from './views/InformaciePreVasPage'
import DarcekovaPokazkaPage from './views/DarcekovapoukazkaPage'
import AkcieDospeliPage from './views/AkcieDospeliPage'
import RozvrhHodinPage from './views/RozvrhHodinPage'
import OtvaracieHodinyPage from './views/OtvaracieHodinyPage'
import SmSystemTehotnePage from './views/SmSystemTehotnePage'
import PrihlaskyPage from './views/PrihlaskyPage'
import DarcekovaPokazkaMainPage from './views/DarcekovaPokazkaMainPage'
import VyhodyPage from './views/VyhodyPage'
import KurzyMarcaPage from './views/KurzyMarcaPage'
import PilatesPage from './views/PilatesPage'
import PowerJogaPage from './views/PowerJogaPage'
import JogaZdravyChrbtPage from './views/JogaZdravyChrbtPage'
import SmSystemPage from './views/SmSystemPage'
import ZdravyChrbtPage from './views/ZdravyChrbtPage'
import BodyWorkPage from './views/BodyWorkPage'
import FitBodyWorkPage from './views/FitBodyWorkPage'
import UhradaKurzovPage from './views/UhradaKurzovPage'
import EnergyStudioPage from './views/EnergyStudioPage'
import RozvrhyPage from './views/RozvrhyPage'
import RozvrhDetiPage from './views/RozvrhDetiPage'
import VfitPage from './views/VfitPage'
import StanovyPage from './views/StanovyPage'
import VyrobkyVnutornePage from './views/VyrobkyVnutornePage'
import VyrobkyVonkajsiePage from './views/VyrobkyVonkajsiePage'
import OstatneVyrobkyPage from './views/OstatneVyrobkyPage'
import VyrobkyEnergyPage from './views/VyrobkyEnergyPage'
import PonukaFirmyPage from './views/PonukaFirmyPage'
import ZdraveCviceniePage from './views/ZdraveCviceniePage'
import ReklamnaSpolupracaPage from './views/ReklamnaSpolupracaPage'
import TestPage from './views/test'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aktualne" element={<AktualneInfoPage />} />
        <Route path="/kruhovy-trening" element={<KruhovyTreningPage />} />
        <Route path="/akcie" element={<AkciePage />} />
        <Route path="/fitness" element={<FitnessCentrumPage />} />
        <Route path="/aerobic" element={<AerobicCentrumPage />} />
        <Route path="/aerobic/informacie" element={<InformacieOCviceniachPage />} />
        <Route path="/aerobic/informacie-pre-vas" element={<InformaciePreVasPage />} />
        <Route path="/aerobic/darcekova-poukazka" element={<DarcekovaPokazkaPage />} />
        <Route path="/aerobic/akcie-dospeli" element={<AkcieDospeliPage />} />
        <Route path="/aerobic/rozvrh" element={<RozvrhHodinPage />} />
        <Route path="/aerobic/otvaracie-hodiny" element={<OtvaracieHodinyPage />} />
        <Route path="/aerobic/sm-system-tehotne" element={<SmSystemTehotnePage />} />
        <Route path="/darcekova-poukazka" element={<DarcekovaPokazkaMainPage />} />
        <Route path="/vyhody" element={<VyhodyPage />} />
        <Route path="/kurzy-marca" element={<KurzyMarcaPage />} />
        <Route path="/kurzy-marca/pilates" element={<PilatesPage />} />
        <Route path="/kurzy-marca/power-joga" element={<PowerJogaPage />} />
        <Route path="/kurzy-marca/joga-zdravy-chrbat" element={<JogaZdravyChrbtPage />} />
        <Route path="/kurzy-marca/sm-system" element={<SmSystemPage />} />
        <Route path="/kurzy-marca/zdravy-chrbat" element={<ZdravyChrbtPage />} />
        <Route path="/kurzy-marca/body-work" element={<BodyWorkPage />} />
        <Route path="/kurzy-marca/fit-body-work" element={<FitBodyWorkPage />} />
        <Route path="/uhrada-kurzov" element={<UhradaKurzovPage />} />
        <Route path="/v-fit" element={<VfitPage />} />
        <Route path="/v-fit/stanovy" element={<StanovyPage />} />
        <Route path="/rozvrhy" element={<RozvrhyPage />} />
        <Route path="/rozvrhy/deti" element={<RozvrhDetiPage />} />
        <Route path="/energy-studio" element={<EnergyStudioPage />} />
        <Route path="/energy-studio/vyrobky-vnutorne" element={<VyrobkyVnutornePage />} />
        <Route path="/energy-studio/vyrobky-vonkajsie" element={<VyrobkyVonkajsiePage />} />
        <Route path="/energy-studio/ostatne-vyrobky" element={<OstatneVyrobkyPage />} />
        <Route path="/energy-studio/vyrobky-energy" element={<VyrobkyEnergyPage />} />
        <Route path="/ponuka-firmy" element={<PonukaFirmyPage />} />
        <Route path="/ponuka-firmy/zdrave-cvicenie" element={<ZdraveCviceniePage />} />
        <Route path="/ponuka-firmy/reklamna-spolupraca" element={<ReklamnaSpolupracaPage />} />
        <Route path="/prihlasky" element={<PrihlaskyPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </BrowserRouter>
  )
}
