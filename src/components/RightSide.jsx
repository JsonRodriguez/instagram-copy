import img1 from '../images/perfil.jpg'
import img2 from '../images/perfil2.jpg'
import img3 from '../images/perfil3.jpg'
import img4 from '../images/perfil4.jpg'

export const RightSide = () => {
    return (
        <div className="rigthSide">
            <div className="profile">
                <img src={ img1 } />
                <div className="nameProfile">
                    <h1>json_rodriguez</h1>
                    <h3>Jeison Rodríguez</h3>
                </div>
                <span>Switch</span>
            </div>
            <div className="suggestions">
                <div className="title">
                    <span className='subtitle'>Suggested for you</span>
                    <span className='button'>See All</span>
                </div>
                <div className="profile">
                    <img src={ img2 } />
                    <div className="nameProfile">
                        <h1>imnot_princess</h1>
                        <h3>Follows you</h3>
                    </div>
                    <span>Follow</span>
                </div>
                <div className="profile">
                    <img src={ img3 } />
                    <div className="nameProfile">
                        <h1>imnot_princess</h1>
                        <h3>Followed by andres.ruiz</h3>
                    </div>
                    <span>Follow</span>
                </div>
                <div className="profile">
                    <img src={ img4 } />
                    <div className="nameProfile">
                        <h1>imnot_princess</h1>
                        <h3>Suggested for you</h3>
                    </div>
                    <span>Follow</span>
                </div>
            </div>
            <div className="information">
                <span>About • Help • Press • API • Jobs • Privacy • Terms • Locations • Language • Meta Verified</span>
                <span>© 2023 INSTAGRAM FROM META</span>
            </div>
        </div>
    )
}
