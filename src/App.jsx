import './App.css';
import Content from './components/Contents';
import CurrencyConverter from './components/CurrencyConverter';
import Header from './components/Header';
import Weather from './components/Weather';
import Footer from './components/Footer';

function App() {
    return (
        <>
            <Header />
            <CurrencyConverter />
            <Weather />
            <Content />
            <Footer />
        </>
    );
}

export default App;
