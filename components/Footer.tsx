import React from "react";

const Footer: React.FC = () => {
  return (
    <footer>
      <section className="main__footer">
        <section className="container">
          <section className="sub__footer">
            <section className="right__side__footer">
              <img src="assets/images/logo.png" alt="Logo Footer" />
              <p>بازار آنلاین فروش، خرید و به اشتراک گذاری منابع آموزشی</p>
              <div className="signIn__make__shop">
                <a href="#" className="text__purple">
                  ایجاد فروشگاه
                </a>
                <div className="line__left"></div>
                <a href="#">ثبت نام</a>
              </div>
            </section>
            <section className="center__side">
              <h3 style={{ color: "#707070" }} className="text-bold">
                لینک‌های <span className="text__purple">دسترسی</span>
              </h3>
              <ul>
                <li>
                  <a href="#">خدمات مشتریان</a>
                </li>
                <li>
                  <a href="#">پرسش و پاسخ</a>
                </li>
                <li>
                  <a href="#">همکاری با ما</a>
                </li>
                <li>
                  <a href="#">خدمات مشتریان</a>
                </li>
                <li>
                  <a href="#">درباره ما</a>
                </li>
                <li>
                  <a href="#">پرسش و پاسخ</a>
                </li>
                <li>
                  <a href="#">همکاری با ما</a>
                </li>
              </ul>
            </section>
            <section className="left__side">
              <h3 style={{ color: "#707070" }} className="text-bold">
                تماس <span className="text__purple">با ما</span>
              </h3>
              <section className="social__media__box">
                <a href="#">
                  <img
                    src="assets/images/social__media/whatsapp.png"
                    alt="whatsapp app"
                  />
                </a>
                <a href="#">
                  <img
                    src="assets/images/social__media/instagram.png"
                    alt="instagram app"
                  />
                </a>
                <a href="#">
                  <img
                    src="assets/images/social__media/telegram.png"
                    alt="telegram app"
                  />
                </a>
              </section>

              <section className="contact__us">
                <div>
                  <span>شماره</span>
                  <span className="text__purple"> تماس </span>
                </div>
                <p>09121234567</p>
              </section>

              <section className="contact__us">
                <div>
                  <span>پست</span>
                  <span className="text__purple"> الکترونیک </span>
                </div>
                <p>info@example.com</p>
              </section>

              <section className="electronic__symbol">
                <img
                  src="assets/images/electronic_symbol/samandehi.png"
                  alt="samandehi"
                />
                <img
                  src="assets/images/electronic_symbol/enamad.png"
                  alt="enamad"
                />
              </section>
            </section>
          </section>
        </section>
        <section className="end__footer">
          <h2>تمامی حقوق برای وب سایت محفوظ می باشد 1401</h2>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
