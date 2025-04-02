import style from './goback.module.css';
import {Link} from 'react-router-dom';

export default function Goback() {
    return <Link to='/'><button className={style.button}>Home</button></Link>
}