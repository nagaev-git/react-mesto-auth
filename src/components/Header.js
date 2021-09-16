export default function Header(props) {
    return(
        <header className="header">
        <img
          src={props.logo}
          alt="Логотип проекта"
          className="header__logo"
        />
      </header>
    )
}