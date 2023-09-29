import { stories } from '../data/stories';

export const Stories = () => {
  return (
    <ul>
      {
        stories.map( storie => {return(
          <li key={ storie.profile }>
            <div className='storiesContent'>
              <div className='bgColor'>
              <img src={ storie.img } />
              </div>
              <h3>{ storie.profile }</h3>
            </div>
          </li>
        )})
      }
    </ul>
  )
}
