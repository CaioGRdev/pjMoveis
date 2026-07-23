import { NavLink } from "react-router-dom";
import './header.css';

const logoTransparente = new URL('../../assets/images/logo-transparente.png', import.meta.url).href;

function Header() {
  return (
    <header className='cabecalho'>
        <div>
            <Link className='cabecalho-logo' to="/">
              <img src={logoTransparente} alt="" />
            </Link>
        </div>
        <nav className="cabecalho-menu">
          <NavLink className={({ isActive }) => isActive ? "cabecalho-op ativo" : "cabecalho-op"} to="/">Início</NavLink>
          <NavLink className={({ isActive }) => isActive ? "cabecalho-op ativo" : "cabecalho-op"} to="/about">Sobre Nós</NavLink>
          <NavLink className={({ isActive }) => isActive ? "cabecalho-op ativo" : "cabecalho-op"} to="/projetos">Projetos</NavLink>
        </nav>
    </header>
  );
}
export default Header;