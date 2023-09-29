import { useState } from 'react';
import logoLight from '../images/logoig.png';
import logoDark from '../images/logoigdark.png';
import perfil from '../images/perfil.jpg';

export const AsideBar = ({ setTheme }) => {

    const [themeState, setThemeState] = useState(false)

    const changeAppearence = () => {
        if( themeState ) {
            setThemeState( false );
            setTheme('light');
        }else{
            setThemeState( true );
            setTheme('dark');
        }
    }

    return (
        <aside className="sidebar">
            <header className="sidebar-header">
                <i className="fa-brands fa-instagram logo-icon"></i>
                {
                    themeState ? 
                    <img src={ logoDark } className='logo-img' /> :
                    <img src={ logoLight } className='logo-img' />
                }
                
            </header>

            <nav>
                <button>
                    <span>
                        <i className="fa-solid fa-house"></i>
                        <span>Home</span>
                    </span>
                </button>
                
                <button>
                    <span>
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <span>Search</span>
                    </span>
                </button>
                <button>
                    <span>
                        <i className="fa-regular fa-compass"></i>
                        <span>Explore</span>
                    </span>
                </button>
                <button>
                    <span>
                        <i className="fa-solid fa-clapperboard"></i>
                        <span>Reels</span>
                    </span>
                </button>
                <button>
                    <span>
                        <i className="fa-regular fa-paper-plane">
                            <span>13</span>
                        </i>
                        <span>Messages</span>
                    </span>
                </button>
                <button>
                    <span>
                        <i className="fa-regular fa-heart">
                            <em></em>
                        </i>
                        <span>Notifications</span>
                    </span>
                </button>
                <button>
                    <span>
                        <i className="fa-regular fa-square-plus"></i>
                        <span>Create</span>
                    </span>
                </button>
                <button>
                    <span>
                        <img src={ perfil } />
                        <span>Profile</span>
                    </span>
                </button>
                <button onClick={ changeAppearence }>
                    <span>
                        {
                            themeState ? 
                            <i className="fa-solid fa-sun"></i> :
                            <i className="fa-solid fa-moon"></i> 
                        }
                        <span>Switch Appearence</span>
                    </span>
                </button>
                <button>
                    <span>
                        <i className="fa-solid fa-grip-lines"></i>
                        <span>More</span>
                    </span>
                </button>
            </nav>
        </aside>
    )
}
