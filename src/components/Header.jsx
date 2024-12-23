const HeaderSvg = () => {
  return <img src="https://lemonpress.mn/logo/lemonpress.svg" alt="" />;
};
const HeaderNavContent = [
  // <h4>Товхимол</h4>,
  // <h4>Нийтлэлүүд</h4>,
  // <h4>Цувралууд</h4>,
  // <h4>Подкаст</h4>,
  // <h4>Бидний тухай</h4>,
  "Товхимол",
  "Нийтлэлүүд",
  "Цувралууд",
  "Подкаст",
  "Бидний тухай",
];
const HeaderNavBar = (nav) => {
  return (
    <p>
      {nav.navbar}
      <span>&darr; </span>
    </p>
  );
};
const HeaderRight = () => {
  return (
    <div className="header-right">
      <div className="icon-border">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18.048"
          height="18.048"
          viewBox="0 0 18.048 18.048"
        >
          <g
            id="vuesax_linear_search-normal"
            data-name="vuesax/linear/search-normal"
            transform="translate(-428 -188)"
          >
            <g id="search-normal" transform="translate(428 188)">
              <path
                id="Vector"
                d="M14.288,7.144A7.144,7.144,0,1,1,7.144,0,7.144,7.144,0,0,1,14.288,7.144Z"
                transform="translate(1.504 1.504)"
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              ></path>
              <path
                id="Vector-2"
                data-name="Vector"
                d="M1.5,1.5,0,0"
                transform="translate(15.04 15.04)"
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              ></path>
              <path
                id="Vector-3"
                data-name="Vector"
                d="M0,0H18.048V18.048H0Z"
                fill="none"
                opacity="0"
              ></path>
            </g>
          </g>
        </svg>
      </div>
      <div className="header-button">
        <p>Уншаад үз</p>
      </div>
    </div>
  );
};
const Header = () => {
  return (
    <div className="header-container">
      <div className="header-left">
        <HeaderSvg />
        {HeaderNavContent.map((texts) => {
          return <HeaderNavBar navbar={texts} />;
        })}
      </div>
      <HeaderRight />
    </div>
  );
};
export default Header;
