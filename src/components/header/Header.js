import LogoFile from '../../assets/images/kaitongo_logo.svg';

function Header() {
    return (
        <header className="header">
            <img className="header__logo" src={LogoFile} alt="Kaitongo logo" />
        </header>
    )
}

export default Header;