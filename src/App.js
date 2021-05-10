import logo from './logo.svg';
import { useTranslation } from 'react-i18next';
import './App.css';

function App() {
  const { t, i18n } = useTranslation();

  function handleClick(lang){
    i18n.changeLanguage(lang)
  }


  return (
    <div className="App">
      <nav style ={{width: '100%', padding:'2rem 0', backgroundColor:'gray'}}>
        <button onClick={()=>handleClick('en')}> English </button>
        <button onClick={()=>handleClick('spa')}> Spanish </button>
        <button onClick={()=>handleClick('ita')}> Italian </button>
      </nav>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> {t('Hello.1')}</p>
        <p> {t('Text.1')}</p>
      </header>
    </div>
  );
}

export default App;
