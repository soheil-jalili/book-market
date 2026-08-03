import React from "react";

const Header: React.FC = () => {
  return (
    <header className="main__header">
      <section className="navbar">
        <div className="container">
          <div className="main__navbar">
            {/* <!-- Logo --> */}
            <section className="logo">
              <a href="">
                <img src="assets/images/logo.png" alt="Logo" />
              </a>
            </section>
            {/* <!-- main header site --> */}
            <div className="main__header__navbar">
              {/* <!-- Search SingIn LogIn --> */}
              <section className="main__authentication">
                <section className="search">
                  <a href="#">
                    <i className="fa-regular fa-magnifying-glass"></i>{" "}
                    <span>جستجو</span>
                  </a>
                </section>
                <section className="singIn">
                  <a href="signIn_login.html">
                    <i className="fa-regular fa-arrow-right-to-arc"></i>
                    <span>ورود</span>
                  </a>
                </section>
                <section className="logIn">
                  <a href="signIn_login.html">
                    <i className="fa-regular fa-user"></i>
                    <span>ثبت نام</span>
                  </a>
                </section>
              </section>
              {/* <!-- Main button --> */}
              <button className="main__btn p-20" type="submit">
                ایجاد فروشگاه رایگان
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Main navbar Menu --> */}

      <div className="container">
        <nav className="menu">
          <ul>
            <li>
              <a href="#">
                <img src="assets/images/menu/browser.png" alt="Browser" /> صفحه
                اصلی
              </a>
            </li>
            <li>
              <a href="#">
                <img src="assets/images/menu/book (2).png" alt="Book" /> منابع
                سایت
              </a>
            </li>
            <li>
              <a href="order_product.html">
                <img
                  src="assets/images/menu/shopping-cart.png"
                  alt="Shopping Cart"
                />{" "}
                لیست فروشگاه ها
              </a>
            </li>
            <li>
              <a href="#">
                <img src="assets/images/menu/sale.png" alt="Sale" /> فروش ویژه
                سایت
              </a>
            </li>
            <li>
              <a href="#">
                <img src="assets/images/menu/notepad.png" alt="Notepad" /> وبلاگ
              </a>
            </li>
          </ul>
        </nav>
        <section className="main__text__header">
          <h1>بازار آنلاین برای فروش، خرید و اشتراک منابع آموزشی </h1>
        </section>
      </div>
      <div className="container">
        <section className="main__container">
          <section className="hero__img">
            <img src="assets/images/hero.png" alt="Hero Image" />
          </section>
          <section className="main__train__search ">
            {/* <!-- train search --> */}
            <input type="text" placeholder="آموزش مورد نظر خود را جستجو کنید" />
            <button className="main__btn  btn_hover" type="submit">
              جستجو
            </button>
          </section>
        </section>
      </div>
    </header>
  );
};

export default Header;
