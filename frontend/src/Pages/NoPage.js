import image from '../Utils/NotFound_image.png';
import '../Styles/Login.css';

function NoPage() {
    return(
        <img src={image} alt='Not found' className='not_found'/>
    )
}

export default NoPage;