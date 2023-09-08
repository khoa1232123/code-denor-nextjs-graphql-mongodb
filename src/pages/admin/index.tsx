import React from "react";

type Props = {};

const AdminPage = (props: Props) => {
  return (
    <>
      <aside className="navbar-aside" id="offcanvas_aside">
        <div className="aside-top">
          <a href="index.html" className="brand-wrap">
            <img
              src="assets/imgs/theme/logo.svg"
              className="logo"
              alt="Nest Dashboard"
            />
          </a>
          <div>
            <button className="btn btn-icon btn-aside-minimize">
              <i className="text-muted material-icons md-menu_open"></i>
            </button>
          </div>
        </div>
        <nav>
          <ul className="menu-aside">
            <li className="menu-item active">
              <a className="menu-link" href="index.html">
                <i className="icon material-icons md-home"></i>
                <span className="text">Dashboard</span>
              </a>
            </li>
            <li className="menu-item has-submenu">
              <a className="menu-link" href="page-products-list.html">
                <i className="icon material-icons md-shopping_bag"></i>
                <span className="text">Products</span>
              </a>
              <div className="submenu">
                <a href="page-products-list.html">Product List</a>
                <a href="page-products-grid.html">Product grid</a>
                <a href="page-products-grid-2.html">Product grid 2</a>
                <a href="page-categories.html">Categories</a>
              </div>
            </li>
            <li className="menu-item has-submenu">
              <a className="menu-link" href="page-orders-1.html">
                <i className="icon material-icons md-shopping_cart"></i>
                <span className="text">Orders</span>
              </a>
              <div className="submenu">
                <a href="page-orders-1.html">Order list 1</a>
                <a href="page-orders-2.html">Order list 2</a>
                <a href="page-orders-detail.html">Order detail</a>
              </div>
            </li>
            <li className="menu-item has-submenu">
              <a className="menu-link" href="page-sellers-cards.html">
                <i className="icon material-icons md-store"></i>
                <span className="text">Sellers</span>
              </a>
              <div className="submenu">
                <a href="page-sellers-cards.html">Sellers cards</a>
                <a href="page-sellers-list.html">Sellers list</a>
                <a href="page-seller-detail.html">Seller profile</a>
              </div>
            </li>
            <li className="menu-item has-submenu">
              <a className="menu-link" href="page-form-product-1.html">
                <i className="icon material-icons md-add_box"></i>
                <span className="text">Add product</span>
              </a>
              <div className="submenu">
                <a href="page-form-product-1.html">Add product 1</a>
                <a href="page-form-product-2.html">Add product 2</a>
                <a href="page-form-product-3.html">Add product 3</a>
                <a href="page-form-product-4.html">Add product 4</a>
              </div>
            </li>
            <li className="menu-item has-submenu">
              <a className="menu-link" href="page-transactions-1.html">
                <i className="icon material-icons md-monetization_on"></i>
                <span className="text">Transactions</span>
              </a>
              <div className="submenu">
                <a href="page-transactions-1.html">Transaction 1</a>
                <a href="page-transactions-2.html">Transaction 2</a>
              </div>
            </li>
            <li className="menu-item has-submenu">
              <a className="menu-link" href="#">
                <i className="icon material-icons md-person"></i>
                <span className="text">Account</span>
              </a>
              <div className="submenu">
                <a href="page-account-login.html">User login</a>
                <a href="page-account-register.html">User registration</a>
                <a href="page-error-404.html">Error 404</a>
              </div>
            </li>
            <li className="menu-item">
              <a className="menu-link" href="page-reviews.html">
                <i className="icon material-icons md-comment"></i>
                <span className="text">Reviews</span>
              </a>
            </li>
            <li className="menu-item">
              <a className="menu-link" href="page-brands.html">
                {" "}
                <i className="icon material-icons md-stars"></i>{" "}
                <span className="text">Brands</span>{" "}
              </a>
            </li>
            <li className="menu-item">
              <a className="menu-link" aria-disabled href="#">
                <i className="icon material-icons md-pie_chart"></i>
                <span className="text">Statistics</span>
              </a>
            </li>
          </ul>
          <hr />
          <ul className="menu-aside">
            <li className="menu-item has-submenu">
              <a className="menu-link" href="#">
                <i className="icon material-icons md-settings"></i>
                <span className="text">Settings</span>
              </a>
              <div className="submenu">
                <a href="page-settings-1.html">Setting sample 1</a>
                <a href="page-settings-2.html">Setting sample 2</a>
              </div>
            </li>
            <li className="menu-item">
              <a className="menu-link" href="page-blank.html">
                <i className="icon material-icons md-local_offer"></i>
                <span className="text"> Starter page </span>
              </a>
            </li>
          </ul>
          <br />
          <br />
        </nav>
      </aside>
      <main className="main-wrap">
        <header className="main-header navbar">
          <div className="col-search">
            <form className="searchform">
              <div className="input-group">
                <input
                  list="search_terms"
                  type="text"
                  className="form-control"
                  placeholder="Search term"
                />
                <button className="btn btn-light bg" type="button">
                  <i className="material-icons md-search"></i>
                </button>
              </div>
              <datalist id="search_terms">
                <option value="Products"></option>
                <option value="New orders"></option>
                <option value="Apple iphone"></option>
                <option value="Ahmed Hassan"></option>
              </datalist>
            </form>
          </div>
          <div className="col-nav">
            <button
              className="btn btn-icon btn-mobile me-auto"
              data-trigger="#offcanvas_aside"
            >
              <i className="material-icons md-apps"></i>
            </button>
            <ul className="nav">
              <li className="nav-item">
                <a className="nav-link btn-icon" href="#">
                  <i className="material-icons md-notifications animation-shake"></i>
                  <span className="badge rounded-pill">3</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link btn-icon darkmode" href="#">
                  {" "}
                  <i className="material-icons md-nights_stay"></i>{" "}
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="requestfullscreen nav-link btn-icon">
                  <i className="material-icons md-cast"></i>
                </a>
              </li>
              <li className="dropdown nav-item">
                <a
                  className="dropdown-toggle"
                  data-bs-toggle="dropdown"
                  href="#"
                  id="dropdownLanguage"
                  aria-expanded="false"
                >
                  <i className="material-icons md-public"></i>
                </a>
                <div
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="dropdownLanguage"
                >
                  <a className="dropdown-item text-brand" href="#">
                    <img src="assets/imgs/theme/flag-us.png" alt="English" />
                    English
                  </a>
                  <a className="dropdown-item" href="#">
                    <img src="assets/imgs/theme/flag-fr.png" alt="Français" />
                    Français
                  </a>
                  <a className="dropdown-item" href="#">
                    <img src="assets/imgs/theme/flag-jp.png" alt="Français" />
                    日本語
                  </a>
                  <a className="dropdown-item" href="#">
                    <img src="assets/imgs/theme/flag-cn.png" alt="Français" />
                    中国人
                  </a>
                </div>
              </li>
              <li className="dropdown nav-item">
                <a
                  className="dropdown-toggle"
                  data-bs-toggle="dropdown"
                  href="#"
                  id="dropdownAccount"
                  aria-expanded="false"
                >
                  {" "}
                  <img
                    className="img-xs rounded-circle"
                    src="assets/imgs/people/avatar-2.png"
                    alt="User"
                  />
                </a>
                <div
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="dropdownAccount"
                >
                  <a className="dropdown-item" href="#">
                    <i className="material-icons md-perm_identity"></i>Edit
                    Profile
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="material-icons md-settings"></i>Account
                    Settings
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="material-icons md-account_balance_wallet"></i>
                    Wallet
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="material-icons md-receipt"></i>Billing
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="material-icons md-help_outline"></i>Help
                    center
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item text-danger" href="#">
                    <i className="material-icons md-exit_to_app"></i>Logout
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </header>
        <section className="content-main">
          <div className="content-header">
            <div>
              <h2 className="content-title card-title">Dashboard</h2>
              <p>Whole data about your business here</p>
            </div>
            <div>
              <a href="#" className="btn btn-primary">
                <i className="text-muted material-icons md-post_add"></i>Create
                report
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <div className="card card-body mb-4">
                <article className="icontext">
                  <span className="icon icon-sm rounded-circle bg-primary-light">
                    <i className="text-primary material-icons md-monetization_on"></i>
                  </span>
                  <div className="text">
                    <h6 className="mb-1 card-title">Revenue</h6>
                    <span>$13,456.5</span>
                    <span className="text-sm">
                      {" "}
                      Shipping fees are not included{" "}
                    </span>
                  </div>
                </article>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card card-body mb-4">
                <article className="icontext">
                  <span className="icon icon-sm rounded-circle bg-success-light">
                    <i className="text-success material-icons md-local_shipping"></i>
                  </span>
                  <div className="text">
                    <h6 className="mb-1 card-title">Orders</h6>
                    <span>53.668</span>
                    <span className="text-sm">
                      {" "}
                      Excluding orders in transit{" "}
                    </span>
                  </div>
                </article>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card card-body mb-4">
                <article className="icontext">
                  <span className="icon icon-sm rounded-circle bg-warning-light">
                    <i className="text-warning material-icons md-qr_code"></i>
                  </span>
                  <div className="text">
                    <h6 className="mb-1 card-title">Products</h6>
                    <span>9.856</span>
                    <span className="text-sm"> In 19 Categories </span>
                  </div>
                </article>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card card-body mb-4">
                <article className="icontext">
                  <span className="icon icon-sm rounded-circle bg-info-light">
                    <i className="text-info material-icons md-shopping_basket"></i>
                  </span>
                  <div className="text">
                    <h6 className="mb-1 card-title">Monthly Earning</h6>
                    <span>$6,982</span>
                    <span className="text-sm"> Based in your local time. </span>
                  </div>
                </article>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-8 col-lg-12">
              <div className="card mb-4">
                <article className="card-body">
                  <h5 className="card-title">Sale statistics</h5>
                  <canvas id="myChart" height="120px"></canvas>
                </article>
              </div>
              <div className="row">
                <div className="col-lg-5">
                  <div className="card mb-4">
                    <article className="card-body">
                      <h5 className="card-title">New Members</h5>
                      <div className="new-member-list">
                        <div className="d-flex align-items-center justify-content-between mb-4">
                          <div className="d-flex align-items-center">
                            <img
                              src="assets/imgs/people/avatar-4.png"
                              alt=""
                              className="avatar"
                            />
                            <div>
                              <h6>Patric Adams</h6>
                              <p className="text-muted font-xs">Sanfrancisco</p>
                            </div>
                          </div>
                          <a href="#" className="btn btn-xs">
                            <i className="material-icons md-add"></i> Add
                          </a>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-4">
                          <div className="d-flex align-items-center">
                            <img
                              src="assets/imgs/people/avatar-2.png"
                              alt=""
                              className="avatar"
                            />
                            <div>
                              <h6>Dilan Specter</h6>
                              <p className="text-muted font-xs">Sanfrancisco</p>
                            </div>
                          </div>
                          <a href="#" className="btn btn-xs">
                            <i className="material-icons md-add"></i> Add
                          </a>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-4">
                          <div className="d-flex align-items-center">
                            <img
                              src="assets/imgs/people/avatar-3.png"
                              alt=""
                              className="avatar"
                            />
                            <div>
                              <h6>Tomas Baker</h6>
                              <p className="text-muted font-xs">Sanfrancisco</p>
                            </div>
                          </div>
                          <a href="#" className="btn btn-xs">
                            <i className="material-icons md-add"></i> Add
                          </a>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="card mb-4">
                    <article className="card-body">
                      <h5 className="card-title">Recent activities</h5>
                      <ul className="verti-timeline list-unstyled font-sm">
                        <li className="event-list">
                          <div className="event-timeline-dot">
                            <i className="material-icons md-play_circle_outline font-xxl"></i>
                          </div>
                          <div className="media">
                            <div className="me-3">
                              <h6>
                                <span>Today</span>{" "}
                                <i className="material-icons md-trending_flat text-brand ml-15 d-inline-block"></i>
                              </h6>
                            </div>
                            <div className="media-body">
                              <div>Lorem ipsum dolor sit amet consectetur</div>
                            </div>
                          </div>
                        </li>
                        <li className="event-list active">
                          <div className="event-timeline-dot">
                            <i className="material-icons md-play_circle_outline font-xxl animation-fade-right"></i>
                          </div>
                          <div className="media">
                            <div className="me-3">
                              <h6>
                                <span>17 May</span>{" "}
                                <i className="material-icons md-trending_flat text-brand ml-15 d-inline-block"></i>
                              </h6>
                            </div>
                            <div className="media-body">
                              <div>
                                Debitis nesciunt voluptatum dicta reprehenderit
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="event-list">
                          <div className="event-timeline-dot">
                            <i className="material-icons md-play_circle_outline font-xxl"></i>
                          </div>
                          <div className="media">
                            <div className="me-3">
                              <h6>
                                <span>13 May</span>{" "}
                                <i className="material-icons md-trending_flat text-brand ml-15 d-inline-block"></i>
                              </h6>
                            </div>
                            <div className="media-body">
                              <div>Accusamus voluptatibus voluptas.</div>
                            </div>
                          </div>
                        </li>
                        <li className="event-list">
                          <div className="event-timeline-dot">
                            <i className="material-icons md-play_circle_outline font-xxl"></i>
                          </div>
                          <div className="media">
                            <div className="me-3">
                              <h6>
                                <span>05 April</span>{" "}
                                <i className="material-icons md-trending_flat text-brand ml-15 d-inline-block"></i>
                              </h6>
                            </div>
                            <div className="media-body">
                              <div>
                                At vero eos et accusamus et iusto odio dignissi
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="event-list">
                          <div className="event-timeline-dot">
                            <i className="material-icons md-play_circle_outline font-xxl"></i>
                          </div>
                          <div className="media">
                            <div className="me-3">
                              <h6>
                                <span>26 Mar</span>{" "}
                                <i className="material-icons md-trending_flat text-brand ml-15 d-inline-block"></i>
                              </h6>
                            </div>
                            <div className="media-body">
                              <div>Responded to need “Volunteer Activities</div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </article>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-12">
              <div className="card mb-4">
                <article className="card-body">
                  <h5 className="card-title">Revenue Base on Area</h5>
                  <canvas id="myChart2" height="217"></canvas>
                </article>
              </div>
              <div className="card mb-4">
                <article className="card-body">
                  <h5 className="card-title">Marketing Chanel</h5>
                  <span className="text-muted font-xs">Facebook</span>
                  <div className="progress mb-3">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "15%" }}
                    >
                      15%
                    </div>
                  </div>
                  <span className="text-muted font-xs">Instagram</span>
                  <div className="progress mb-3">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "65%" }}
                    >
                      65%
                    </div>
                  </div>
                  <span className="text-muted font-xs">Google</span>
                  <div className="progress mb-3">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "51%" }}
                    >
                      51%
                    </div>
                  </div>
                  <span className="text-muted font-xs">Twitter</span>
                  <div className="progress mb-3">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "80%" }}
                    >
                      80%
                    </div>
                  </div>
                  <span className="text-muted font-xs">Other</span>
                  <div className="progress mb-3">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "80%" }}
                    >
                      80%
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
          <div className="card mb-4">
            <header className="card-header">
              <h4 className="card-title">Latest orders</h4>
              <div className="row align-items-center">
                <div className="col-md-3 col-12 me-auto mb-md-0 mb-3">
                  <div className="custom_select">
                    <select className="form-select select-nice">
                      <option selected>All Categories</option>
                      <option>Women's Clothing</option>
                      <option>Men's Clothing</option>
                      <option>Cellphones</option>
                      <option>Computer & Office</option>
                      <option>Consumer Electronics</option>
                      <option>Jewelry & Accessories</option>
                      <option>Home & Garden</option>
                      <option>Luggage & Bags</option>
                      <option>Shoes</option>
                      <option>Mother & Kids</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-2 col-6">
                  <input
                    type="date"
                    value="02.05.2021"
                    className="form-control"
                  />
                </div>
                <div className="col-md-2 col-6">
                  <div className="custom_select">
                    <select className="form-select select-nice">
                      <option selected>Status</option>
                      <option>All</option>
                      <option>Paid</option>
                      <option>Chargeback</option>
                      <option>Refund</option>
                    </select>
                  </div>
                </div>
              </div>
            </header>
            <div className="card-body">
              <div className="table-responsive">
                <div className="table-responsive">
                  <table className="table align-middle table-nowrap mb-0">
                    <thead className="table-light">
                      <tr>
                        <th scope="col" className="text-center">
                          <div className="form-check align-middle">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="transactionCheck01"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="transactionCheck01"
                            ></label>
                          </div>
                        </th>
                        <th className="align-middle" scope="col">
                          Order ID
                        </th>
                        <th className="align-middle" scope="col">
                          Billing Name
                        </th>
                        <th className="align-middle" scope="col">
                          Date
                        </th>
                        <th className="align-middle" scope="col">
                          Total
                        </th>
                        <th className="align-middle" scope="col">
                          Payment Status
                        </th>
                        <th className="align-middle" scope="col">
                          Payment Method
                        </th>
                        <th className="align-middle" scope="col">
                          View Details
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-center">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="transactionCheck02"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="transactionCheck02"
                            ></label>
                          </div>
                        </td>
                        <td>
                          <a href="#" className="fw-bold">
                            #SK2540
                          </a>
                        </td>
                        <td>Neal Matthews</td>
                        <td>07 Oct, 2021</td>
                        <td>$400</td>
                        <td>
                          <span className="badge badge-pill badge-soft-success">
                            Paid
                          </span>
                        </td>
                        <td>
                          <i className="material-icons md-payment font-xxl text-muted mr-5"></i>{" "}
                          Mastercard
                        </td>
                        <td>
                          <a href="#" className="btn btn-xs">
                            {" "}
                            View details
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="transactionCheck03"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="transactionCheck03"
                            ></label>
                          </div>
                        </td>
                        <td>
                          <a href="#" className="fw-bold">
                            #SK2541
                          </a>
                        </td>
                        <td>Jamal Burnett</td>
                        <td>07 Oct, 2021</td>
                        <td>$380</td>
                        <td>
                          <span className="badge badge-pill badge-soft-danger">
                            Chargeback
                          </span>
                        </td>
                        <td>
                          <i className="material-icons md-payment font-xxl text-muted mr-5"></i>{" "}
                          Visa
                        </td>
                        <td>
                          <a href="#" className="btn btn-xs">
                            {" "}
                            View details
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="transactionCheck04"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="transactionCheck04"
                            ></label>
                          </div>
                        </td>
                        <td>
                          <a href="#" className="fw-bold">
                            #SK2542
                          </a>
                        </td>
                        <td>Juan Mitchell</td>
                        <td>06 Oct, 2021</td>
                        <td>$384</td>
                        <td>
                          <span className="badge badge-pill badge-soft-success">
                            Paid
                          </span>
                        </td>
                        <td>
                          <i className="material-icons md-payment font-xxl text-muted mr-5"></i>{" "}
                          Paypal
                        </td>
                        <td>
                          <a href="#" className="btn btn-xs">
                            {" "}
                            View details
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="transactionCheck05"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="transactionCheck05"
                            ></label>
                          </div>
                        </td>
                        <td>
                          <a href="#" className="fw-bold">
                            #SK2543
                          </a>
                        </td>
                        <td>Barry Dick</td>
                        <td>05 Oct, 2021</td>
                        <td>$412</td>
                        <td>
                          <span className="badge badge-pill badge-soft-success">
                            Paid
                          </span>
                        </td>
                        <td>
                          <i className="material-icons md-payment font-xxl text-muted mr-5"></i>{" "}
                          Mastercard
                        </td>
                        <td>
                          <a href="#" className="btn btn-xs">
                            {" "}
                            View details
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="transactionCheck06"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="transactionCheck06"
                            ></label>
                          </div>
                        </td>
                        <td>
                          <a href="#" className="fw-bold">
                            #SK2544
                          </a>
                        </td>
                        <td>Ronald Taylor</td>
                        <td>04 Oct, 2021</td>
                        <td>$404</td>
                        <td>
                          <span className="badge badge-pill badge-soft-warning">
                            Refund
                          </span>
                        </td>
                        <td>
                          <i className="material-icons md-payment font-xxl text-muted mr-5"></i>{" "}
                          Visa
                        </td>
                        <td>
                          <a href="#" className="btn btn-xs">
                            {" "}
                            View details
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="transactionCheck07"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="transactionCheck07"
                            ></label>
                          </div>
                        </td>
                        <td>
                          <a href="#" className="fw-bold">
                            #SK2545
                          </a>
                        </td>
                        <td>Jacob Hunter</td>
                        <td>04 Oct, 2021</td>
                        <td>$392</td>
                        <td>
                          <span className="badge badge-pill badge-soft-success">
                            Paid
                          </span>
                        </td>
                        <td>
                          <i className="material-icons md-payment font-xxl text-muted mr-5"></i>{" "}
                          Paypal
                        </td>
                        <td>
                          <a href="#" className="btn btn-xs">
                            {" "}
                            View details
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="pagination-area mt-30 mb-50">
            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-start">
                <li className="page-item active">
                  <a className="page-link" href="#">
                    01
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    02
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    03
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link dot" href="#">
                    ...
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    16
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    <i className="material-icons md-chevron_right"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </section>
        <footer className="main-footer font-xs">
          <div className="row pb-30 pt-15">
            <div className="col-sm-6">
              &copy; Nest - HTML Ecommerce Template .
            </div>
            <div className="col-sm-6">
              <div className="text-sm-end">All rights reserved</div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
};

export default AdminPage;
