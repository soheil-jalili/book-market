import React from 'react';

const Main: React.FC = () => {
  return (
    <main>
      {/* Sub Menu Images */}
      <div className="container">
        <section className="sub__menu__images">
          <section>
            <img src="assets/images/sub__menu/share (1).png" alt="Share Image" />
            <a href="#">دانش خود را به اشتراک بگذارید</a>
          </section>
          <section>
            <img src="assets/images/sub__menu/hand.png" alt="Hand Image" />
            <a href="#">با دانش خود کسب درآمد کنید</a>
          </section>
          <section>
            <img src="assets/images/sub__menu/study.png" alt="Study Image" />
            <a href="#">از تجربه سایر دوستان بیاموزید</a>
          </section>
          <section>
            <img src="assets/images/sub__menu/rising.png" alt="Rising Image" />
            <a href="#">رشد کنید و برند خود را بسازید</a>
          </section>
        </section>
      </div>

      {/* product */}
      <section className="product">
        <h2>محصول و فروشگاه ویژه</h2>
        <img src="assets/images/line.png" alt="Line" />
      </section>

      {/* Main product */}
      <section className="main__product">
        <div className="container">
          <section className="products">
            <section className="product__one">
              <img src="assets/images/main__product/334.png" alt="Product one" />
              <ul>
                <li>نام محصول</li>
                <li>نام فروشگاه</li>
                <li>
                  <a href="#" className="text__purple">نوع فایل</a>
                </li>
                <li>موضوع</li>
                <li>منابع</li>
                <li>مناسب برای پایه</li>
                <div className="product__one__cart">
                  <p>120,000 تومان</p>
                  <div className="star__icon">
                    <i className="fa-regular fa-bookmark"></i>
                    <img src="assets/images/star/Group 38.png" alt="star" />
                  </div>
                  <button className="p-20 w-100" type="submit">افزودن به سبد خرید</button>
                </div>
              </ul>
            </section>
            <section className="product__two">
              <img src="assets/images/main__product/3851259.png" alt="Product two" />
              <ul>
                <li>نام فروشگاه</li>
                <li>موضوع مورد فعالیت</li>
                <li>
                  <a href="#" className="text__purple">پایه</a>
                </li>
                <li><span className="text__purple">29</span> دنبال کننده</li>
                <li><span className="text__purple">29</span> نظر</li>
                <li><span className="text__purple">27</span> محصول</li>
                <li>مناسب برای پایه</li>
                <div className="product__two__cart">
                  <div className="star__icon">
                    <i className="fa-regular fa-user"></i>
                    <img src="assets/images/star/Group 38.png" alt="star" />
                  </div>
                  <button className="p-20 w-100" type="submit">رفتن به فروشگاه</button>
                </div>
              </ul>
            </section>
          </section>
        </div>
      </section>

      {/* top store */}
      <section className="store">
        <h2 className="text-bold">فروشگاه های برتر هفته</h2>
        <img src="assets/images/line.png" alt="Line" />
      </section>

      {/* product shop */}
      <div className="container">
        <section className="main__product__shop">
          <section className="product_1">
            <img src="assets/images/store_name/1-01.png" alt="product1" />
            <section className="sub__product__shop">
              <ul>
                <li>نام فروشگاه</li>
                <li>موضوع مورد فعالیت</li>
                <li>پایه</li>
              </ul>
            </section>
            <section className="sub__product__following">
              <p><span className="text__purple">29</span> دنبال کننده</p>
              <p><span className="text__purple">29</span> نظر</p>
              <div style={{ display: 'flex', textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
                <p className="text-right">27&nbsp;</p>
                <span className="text__purple"> محصول </span>
              </div>
              <div style={{ display: 'flex', textAlign: 'center', justifyContent: 'center' }}>
                <p>27&nbsp;</p>
                <span className="text__purple"> رتبه </span>
              </div>
            </section>
            <section className="p-4">
              <section className="latest__btn">
                <div className="star__img">
                  <img src="assets/images/star/Group 38.png" alt="star" />
                </div>
                <div className="icons">
                  <i className="fa-regular fa-bookmark"></i>
                  <i className="fa-regular fa-user"></i>
                </div>
              </section>
              <button className="w-100 w__100" type="submit">رفتن به فروشگاه</button>
            </section>
          </section>

          <section className="product_2">
            <img src="assets/images/store_name/2-01.png" alt="product2" />
            <section className="sub__product__shop">
              <ul>
                <li>نام فروشگاه</li>
                <li>موضوع مورد فعالیت</li>
                <li>پایه</li>
              </ul>
            </section>
            <section className="sub__product__following">
              <p><span className="text__purple">29</span> دنبال کننده</p>
              <p><span className="text__purple">29</span> نظر</p>
              <div style={{ display: 'flex', textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
                <p>27&nbsp;</p>
                <span className="text__purple"> محصول </span>
              </div>
              <div style={{ display: 'flex', textAlign: 'center', justifyContent: 'center' }}>
                <p>27&nbsp;</p>
                <span className="text__purple"> رتبه </span>
              </div>
            </section>
            <section className="p-4">
              <section className="latest__btn">
                <div className="star__img">
                  <img src="assets/images/star/Group 38.png" alt="star" />
                </div>
                <div className="icons">
                  <i className="fa-regular fa-bookmark"></i>
                  <i className="fa-regular fa-user"></i>
                </div>
              </section>
              <button className="w-100 w__100" type="submit">رفتن به فروشگاه</button>
            </section>
          </section>

          <section className="product_3">
            <img src="assets/images/store_name/3-01.png" alt="product3" />
            <section className="sub__product__shop">
              <ul>
                <li>نام فروشگاه</li>
                <li>موضوع مورد فعالیت</li>
                <li>پایه</li>
              </ul>
            </section>
            <section className="sub__product__following">
              <p><span className="text__purple">29</span> دنبال کننده</p>
              <p><span className="text__purple">29</span> نظر</p>
              <div style={{ display: 'flex', textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
                <p>27&nbsp;</p>
                <span className="text__purple"> محصول </span>
              </div>
              <div style={{ display: 'flex', textAlign: 'center', justifyContent: 'center' }}>
                <p>27&nbsp;</p>
                <span className="text__purple"> رتبه </span>
              </div>
            </section>
            <section className="p-4">
              <section className="latest__btn">
                <div className="star__img">
                  <img src="assets/images/star/Group 38.png" alt="star" />
                </div>
                <div className="icons">
                  <i className="fa-regular fa-bookmark"></i>
                  <i className="fa-regular fa-user"></i>
                </div>
              </section>
              <button className="w-100 w__100" type="submit">رفتن به فروشگاه</button>
            </section>
          </section>

          <section className="product_4">
            <img src="assets/images/store_name/4-01.png" alt="product4" />
            <section className="sub__product__shop">
              <ul>
                <li>نام فروشگاه</li>
                <li>موضوع مورد فعالیت</li>
                <li>پایه</li>
              </ul>
            </section>
            <section className="sub__product__following">
              <p><span className="text__purple">29</span> دنبال کننده</p>
              <p><span className="text__purple">29</span> نظر</p>
              <div style={{ display: 'flex', textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
                <p>27&nbsp;</p>
                <span className="text__purple"> محصول </span>
              </div>
              <div style={{ display: 'flex', textAlign: 'center', justifyContent: 'center' }}>
                <p>27&nbsp;</p>
                <span className="text__purple"> رتبه </span>
              </div>
            </section>
            <section className="p-4">
              <section className="latest__btn">
                <div className="star__img">
                  <img src="assets/images/star/Group 38.png" alt="star" />
                </div>
                <div className="icons">
                  <i className="fa-regular fa-bookmark"></i>
                  <i className="fa-regular fa-user"></i>
                </div>
              </section>
              <button className="w-100 w__100" type="submit">رفتن به فروشگاه</button>
            </section>
          </section>
        </section>
      </div>

      {/* Ready */}
      <section className="main__product__ready">
        <div className="container">
          <section className="products__ready">
            <img src="assets/images/mobile/Group 290.png" alt="mobile" />
            <div className="main__info">
              <h2>آماده پیوستن به ما هستی؟</h2>
              <button className="w-100 p-20 mt-25" type="submit">ایجاد فروشگاه رایگان</button>
            </div>
          </section>
        </div>
      </section>

      {/* Access Product */}
      <section className="access">
        <h2 className="text-bold">دسترسی محصولات براساس</h2>
        <img src="assets/images/line.png" alt="Line" />
      </section>

      {/* Main Access Product */}
      <div className="container">
        <section className="main__access_product">
          <section style={{ padding: '57px 60px' }}>
            <img src="assets/images/access/donation.png" alt="img" />
            <h2 className="text-bold"><span className="text__purple text-bold">محبوب</span> ترین محصولات رایگان</h2>
          </section>
          <section>
            <img src="assets/images/access/XMLID_1220_.png" alt="img2" />
            <h2 className="text-bold"><span className="text__purple text-bold">پرفروش</span> ترین محصولات</h2>
          </section>
          <section style={{ padding: '58px 60px' }}>
            <img src="assets/images/access/XMLID_1535_.png" alt="img3" />
            <h2 className="text-bold"><span className="text__purple text-bold">قرعه </span>کشی ها</h2>
          </section>
          <section>
            <img src="assets/images/access/podium.png" alt="img4" />
            <h2 className="text-bold"><span className="text__purple text-bold">بهترین</span> فروشنده ها</h2>
          </section>
        </section>
      </div>

      {/* Category */}
      <section className="container">
        <section className="after__before">
          <section className="main__category">
            <a href="#">
              <h2 className="text__purple border__left">بهترین منابع در سایت</h2>
            </a>
            <a href="#">
              <h2 className="border__left">دسته بندی براساس موضوع</h2>
            </a>
            <a href="#">
              <h2>دسته بندی بر اساس پایه تحصیلی</h2>
            </a>
          </section>
        </section>
      </section>

      {/* Activity */}
      <section className="container">
        <section className="main__activity">
          <section>
            <img src="assets/images/activity/tracking.png" alt="activity_1" />
            <p>فعالیت ها</p>
          </section>
          <section>
            <img src="assets/images/activity/evaluation.png" alt="activity_2" />
            <p>ارزیابی</p>
          </section>
          <section>
            <img src="assets/images/activity/painting-roller.png" alt="activity_3" />
            <p>دکوراسیون کلاس درس</p>
          </section>
          <section>
            <img src="assets/images/activity/poster.png" alt="activity_4" />
            <p>پوستر کلاس درس</p>
          </section>
          <section>
            <img src="assets/images/activity/planning.png" alt="activity_5" />
            <p>برنامه ریزی درسی</p>
          </section>
          <section>
            <img src="assets/images/activity/movie-player.png" alt="activity_6" />
            <p>فیلم های آموزشی</p>
          </section>
          <section>
            <img src="assets/images/activity/homework.png" alt="activity_7" />
            <p>تکلیف منزل</p>
          </section>
          <section>
            <img src="assets/images/activity/family (2).png" alt="activity_7" />
            <p>برای والدین</p>
          </section>
          <section>
            <img src="assets/images/activity/idea.png" alt="activity_8" />
            <p>ایده های پژوهشی</p>
          </section>
          <section>
            <img src="assets/images/activity/calendar (1).png" alt="activity_9" />
            <p>تعطیلات فصلی</p>
          </section>
          <section>
            <img src="assets/images/activity/online-course.png" alt="activity_9" />
            <p>تکنولوژی در تدریس</p>
          </section>
          <section>
            <img src="assets/images/activity/document.png" alt="activity_10" />
            <p>کاربرگ</p>
          </section>
        </section>
      </section>

      {/* MainLine */}
      <div className="container">
        <section className="main__line">
          <img src="assets/images/main__line/Group 290.png" alt="MainLine" />
        </section>
      </div>

      {/* Warranty */}
      <div className="container">
        <section className="warranty">
          <section>
            <img src="assets/images/warranty/helpline.png" alt="1" />
            <p>پشتیبانی 24/7</p>
          </section>
          <section>
            <img src="assets/images/warranty/guarantee.png" alt="2" />
            <p>تضمین کیفیت منابع</p>
          </section>
          <section>
            <img src="assets/images/warranty/XMLID_1487_.png" alt="3" />
            <p>گارانتی برگشت پول</p>
          </section>
          <section>
            <img src="assets/images/warranty/certificate.png" alt="4" />
            <p>تضمین تخصص مدرسین</p>
          </section>
        </section>
      </div>

      {/* Off */}
      <section className="main__product__ready">
        <div className="container">
          <section className="products__ready row__reverse">
            <img src="assets/images/percent/Group 290.png" alt="percent" className="w-46" />
            <div className="btn__center__flex">
              <h2>تخفیف های یک روزه با <span className="size__40">&nbsp;40%</span> &nbsp;تخفیف</h2>
              <button className="w-100 p-20 mt-25 w-50 m-50px" type="submit">محصولات با تخفیف</button>
            </div>
          </section>
        </div>
      </section>

      {/* Product Lottery */}
      <section className="container">
        <section className="after__before m-50px">
          <section className="main__category">
            <h2 className="text__purple border__left">
              <a href="#" className="text__purple">
                محصولات قرعه کشی
              </a>
            </h2>
            <h2>
              <a href="#">
                محصولات با تخفیف ویژه
              </a>
            </h2>
          </section>
        </section>
      </section>

      {/* ProductName And Store */}
      <div className="container">
        <section className="main__product__shop">
          <section className="product_1">
            <img src="assets/images/store_name/1-01.png" alt="product1" />

            <section className="name__shop">
              <p>نام محصول</p>
              <p>نام فروشگاه</p>
            </section>

            <section className="category__name__shop">
              <ul>
                <li><a href="#" className="text__purple">نوع فایل</a></li>
                <li><a href="#">موضوع</a></li>
                <li><a href="#">منابع</a></li>
                <li><a href="#">مناسب برای پایه</a></li>
              </ul>
            </section>
            <section className="name__shop__price">
              <p className="line__through">220,000 تومان</p>
              <p>120,000 تومان</p>
              <img src="assets/images/orange/XMLID_1535_.png" alt="orange icon" />
            </section>

            <section className="name__shop__price__icons">
              <i className="fa-regular fa-share-nodes text__purple"></i>
              <img src="assets/images/star/Group 38.png" alt="stars" />
            </section>
          </section>

          <section className="product_2">
            <img src="assets/images/store_name/2-01.png" alt="product2" />
            <section className="name__shop">
              <p>نام محصول</p>
              <p>نام فروشگاه</p>
            </section>

            <section className="category__name__shop">
              <ul>
                <li><a href="#" className="text__purple">نوع فایل</a></li>
                <li><a href="#">موضوع</a></li>
                <li><a href="#">منابع</a></li>
                <li><a href="#">مناسب برای پایه</a></li>
              </ul>
            </section>
            <section className="name__shop__price">
              <p className="line__through">220,000 تومان</p>
              <p>120,000 تومان</p>
              <img src="assets/images/orange/XMLID_1535_.png" alt="orange icon" />
            </section>

            <section className="name__shop__price__icons">
              <i className="fa-regular fa-share-nodes text__purple"></i>
              <img src="assets/images/star/Group 38.png" alt="stars" />
            </section>
          </section>

          <section className="product_3">
            <img src="assets/images/store_name/3-01.png" alt="product3" />
            <section className="name__shop">
              <p>نام محصول</p>
              <p>نام فروشگاه</p>
            </section>

            <section className="category__name__shop">
              <ul>
                <li><a href="#" className="text__purple">نوع فایل</a></li>
                <li><a href="#">موضوع</a></li>
                <li><a href="#">منابع</a></li>
                <li><a href="#">مناسب برای پایه</a></li>
              </ul>
            </section>
            <section className="name__shop__price">
              <p>120,000 تومان</p>
              <img src="assets/images/orange/XMLID_1535_.png" alt="orange icon" />
            </section>

            <section className="name__shop__price__icons">
              <i className="fa-regular fa-share-nodes text__purple"></i>
              <img src="assets/images/star/Group 38.png" alt="stars" />
            </section>
          </section>

          <section className="product_4">
            <img src="assets/images/store_name/4-01.png" alt="product4" />
            <section className="name__shop">
              <p>نام محصول</p>
              <p>نام فروشگاه</p>
            </section>

            <section className="category__name__shop">
              <ul>
                <li><a href="#" className="text__purple">نوع فایل</a></li>
                <li><a href="#">موضوع</a></li>
                <li><a href="#">منابع</a></li>
                <li><a href="#">مناسب برای پایه</a></li>
              </ul>
            </section>
            <section className="name__shop__price">
              <p>120,000 تومان</p>
              <img src="assets/images/orange/XMLID_1535_.png" alt="orange icon" />
            </section>

            <section className="name__shop__price__icons">
              <i className="fa-regular fa-share-nodes text__purple"></i>
              <img src="assets/images/star/Group 38.png" alt="stars" />
            </section>
          </section>
        </section>
      </div>

      {/* Btn show more */}
      <div className="container">
        <section className="btn__parent">
          <button className="btn__show" type="submit">نمایش بیشتر</button>
        </section>
      </div>

      {/* Latest Content */}
      <section className="product">
        <h2>آخرین مطالب </h2>
        <img src="assets/images/line.png" alt="Line" />
      </section>

      {/* History Content */}
      <div className="container">
        <section className="main__product__shop">
          <section className="product_1">
            <img src="assets/images/store_name/1-01.png" alt="product1" />
            <section className="history__main">
              <h6>عنوان مطلب</h6>
              <p>
                طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح استفاده می نماید.
              </p>
            </section>
            <section className="history">
              <p>1399/06/07</p>
              <p>بیشتر ...</p>
            </section>
          </section>

          <section className="product_2">
            <img src="assets/images/store_name/2-01.png" alt="product2" />
            <section className="history__main">
              <h6>عنوان مطلب</h6>
              <p>
                طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح استفاده می نماید.
              </p>
            </section>
            <section className="history">
              <p>1399/06/07</p>
              <p>بیشتر ...</p>
            </section>
          </section>

          <section className="product_3">
            <img src="assets/images/store_name/3-01.png" alt="product3" />
            <section className="history__main">
              <h6>عنوان مطلب</h6>
              <p>
                طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح استفاده می نماید.
              </p>
            </section>
            <section className="history">
              <p>1399/06/07</p>
              <p>بیشتر ...</p>
            </section>
          </section>

          <section className="product_4">
            <img src="assets/images/store_name/4-01.png" alt="product4" />
            <section className="history__main">
              <h6>عنوان مطلب</h6>
              <p>
                طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح استفاده می نماید.
              </p>
            </section>
            <section className="history">
              <p>1399/06/07</p>
              <p>بیشتر ...</p>
            </section>
          </section>
        </section>
      </div>
    </main>
  );
};

export default Main;