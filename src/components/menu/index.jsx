import { Link } from 'react-router-dom';
import './menu.css'
const Menu = () => {
  return (
    <header>
        <nav className='navegacao'>
            <Link className='link' to={'/'}> Início</Link>
            <Link className='link' to={'/participantes'}>Participantes</Link>
        </nav>
    </header>
  );
};

export default Menu;
