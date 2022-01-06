import './Main.scss'

// Images
import Back from '../../Assets/Images/Arrow.png'
import FonImg from  '../../Assets/Images/Rectangle.jpg'

function Main (){
    return(
        <div className="mainSection">
            <div className="heder">
                <div className="userName">
                    <img src={Back} alt="back" className='backIcon' />
                    <div className="user">
                        <h1>Bobur</h1>
                        <span>1,070 Tweets</span>
                    </div>
                </div>
            </div>
            <div className="bacgroundFonImg">
                <img src={FonImg} alt="fon" />
            </div>
            <div className="editProfile">
                <a href='#' className="edit">Edit profile</a>
            </div>
            <div className="userProfile">
                <h1>Bobur</h1>
                <span>@bobur_mavlonov</span>
            </div>
            <div className="bioTitle">
                <span>UX&UI designer at </span><a href="#">@abutechuz</a>
            </div>
            <ul className="linkList">
                <li className="linkListitems">
                    <span className='item1'>Mashag’daman</span>
                </li>
                <li className="linkListitems">
                    <span className='item2'><a href="#">Mashag’daman</a></span>
                </li>
                <li className="linkListitems">
                    <span className='item3'>Born November 24, 2000</span>
                </li>
                <li className="linkListitems">
                    <span className='item4'>Joined May 2020</span>
                </li>
            </ul>
            <div className="subcriberes">
                <div className="subcrib">
                    <span>67</span>
                    <p>Following</p>
                </div>
                <div className="subcriber">
                <span>47</span>
                    <p>Followers</p>
                </div>
            </div>
            <ul className="pageList">
                <li className="pagrListItem">Tweets</li>
                <li className="pagrListItem">Tweets & replies</li>
                <li className="pagrListItem">Media</li>
                <li className="pagrListItem">Likes</li>
            </ul>
            <hr />

 
        </div>
    )
}

export default Main