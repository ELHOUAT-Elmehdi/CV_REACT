import ProfilePic from './myprofilephoto.jpeg'

export const Photo = () =>{
    return (
        <div className='centered'>
            <img className='myphoto' src={ProfilePic} alt="profile picture"></img>
        </div>
    )
}
