import img1 from '../images/public1.jpg';
import img2 from '../images/perfil7.jpg';
import img3 from '../images/public2.jpg';

export const Publications = () => {
    return (
        <div className='publicationsContainer'>
            <div className="publication">
                <div className="header">
                    <img src={ img2 } />
                    <h1>yuming_art</h1>
                    <span>• 2h</span>
                    <i className="fa-solid fa-ellipsis"></i>
                </div>
                <img src={ img1 } />
                <div className="interactions">
                    <i className="fa-regular fa-heart"></i>
                    <i className="fa-regular fa-comment"></i>
                    <i className="fa-regular fa-paper-plane"></i>
                    <i className="fa-regular fa-bookmark"></i>
                </div>
                <span className="likes">3,410 likes</span>
                <span className="description"><span>profileName</span> Knight wip maybe ...</span>
                <span className="comments">View all 20 comments</span>
                <span className="addComment">Add a comment...</span>
                {/* <hr /> */}
            </div>
            <div className="publication">
                <div className="header">
                    <img src={ img2 } />
                    <h1>yuming_art</h1>
                    <span>• 2h</span>
                    <i className="fa-solid fa-ellipsis"></i>
                </div>
                <img src={ img3 } />
                <div className="interactions">
                    <i className="fa-regular fa-heart"></i>
                    <i className="fa-regular fa-comment"></i>
                    <i className="fa-regular fa-paper-plane"></i>
                    <i className="fa-regular fa-bookmark"></i>
                </div>
                <span className="likes">3,410 likes</span>
                <span className="description"><span>profileName</span> Knight wip maybe ...</span>
                <span className="comments">View all 20 comments</span>
                <span className="addComment">Add a comment...</span>
                {/* <hr /> */}
            </div>
        </div>
    )
}
