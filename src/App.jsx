import './App.css'
import { AsideBar, Publications, RightSide, Stories } from './components';
import useLocalStorage from 'use-local-storage';

function App() {
  const [theme, setTheme] = useLocalStorage( 'theme' ? 'dark' : 'light' );


  return (
    <div className='main' data-theme={ theme }>
      <AsideBar setTheme={ setTheme } />
      <div className="mainContent">
        <div className='storiesContainer'>
          <Stories />
          <Publications />
        </div>
        <RightSide />
      </div>
    </div>
  )
}

export default App
