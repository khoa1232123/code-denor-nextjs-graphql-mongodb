type Props = {};

const HeaderTop = (props: Props) => {
  return (
    <div className="header-top header-top-ptb-1 d-none d-lg-block">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-3 col-lg-4">
            <div className="header-info">
              <ul>
                <li className="abc">
                  <a href="page-about.htlm">About Us</a>
                </li>
                <li>
                  <a href="page-account.html">My Account</a>
                </li>

                <li>
                  <a href="shop-wishlist.html">Wishlist</a>
                </li>
                <li>
                  <a href="shop-order.html">Order Tracking</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-6 col-lg-4">
            <div className="text-center">
              <div id="news-flash" className="d-inline-block">
                <ul>
                  <li>100% Secure delivery without contacting the courier</li>
                  {/* <li>Supper Value Deals - Save more with coupons</li>
                    <li>Trendy 25silver jewelry, save up 35% off today</li> */}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4">
            <div className="header-info header-info-right">
              <ul>
                <li>
                  Need help? Call Us:{" "}
                  <strong className="text-brand"> + 1800 900</strong>
                </li>
                <li>
                  <a className="language-dropdown-active" href="#">
                    English <i className="fi-rs-angle-small-down"></i>
                  </a>
                  <ul className="language-dropdown">
                    <li>
                      <a href="#">
                        <img src="/assets-user/imgs/theme/flag-fr.png" alt="" />
                        Français
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/assets-user/imgs/theme/flag-dt.png" alt="" />
                        Deutsch
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/assets-user/imgs/theme/flag-ru.png" alt="" />
                        Pусский
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="language-dropdown-active" href="#">
                    USD <i className="fi-rs-angle-small-down"></i>
                  </a>
                  <ul className="language-dropdown">
                    <li>
                      <a href="#">
                        <img src="/assets-user/imgs/theme/flag-fr.png" alt="" />
                        INR
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/assets-user/imgs/theme/flag-dt.png" alt="" />
                        MBP
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/assets-user/imgs/theme/flag-ru.png" alt="" />
                        EU
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
