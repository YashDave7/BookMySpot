import React from "react";
import ReactDOM from "react-dom";
import './Prohomepage.css';
function Main() {
    return (
        <main>
        <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
          {/* Vertical Navbar */}
          <nav className="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0 border-end-lg" id="navbarVertical">
            <div className="container-fluid">
              {/* Toggler */}
              <button className="navbar-toggler ms-n2" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarCollapse" aria-controls="sidebarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              {/* Brand */}
              <a className="navbar-brand py-lg-2 mb-lg-5 px-lg-6 me-0" href="#">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARwAAACxCAMAAAAh3/JWAAABaFBMVEX///8EdW/ZAAD/jADWAAAEd3H/jwD/iwD/jgD/iQAAaWL/hwD/ggAAa2X/hQD/kwDeAAADTUd8AAAASU11AACCAAAAcGn//v7hVlbcJyekAAAEYlwAQjsDUUsATErr9PP75ubvrKzkbW3/xJP/kRjmeHj/9On/mzboh4dvo5/nUADwuLj/6ti5AADS4uGSAADLAACuRAAAPTWIsq/fOzv529v/3b3/sWn/eQD/zabtnp7bHR3/qlzrlZX/5tLzwsLfRkb2z8/98vL/uH7/o0/ePz//yJrjYWFaZEAAaGrSdQA4X070iUa4dyH/vIWicSrpVAB2Zji4fn620M7TtrbgNADwZwBLj4v/q2IAW17HfB2XQ0NtYDntxq8vhH+VbS/newDHXwCMGQDFWwCzPQCvJSFsOzabvrutUADDUU9Rd3PXbwDku5VmiISsAACXMQA6Z2JGWUKHs7B/nJvYkULSoW7Br5Outacu0aoNAAAHiElEQVR4nO2a+1faSBSAyZNAEiAIQUHAB8VSFbW+trXVPtzWulu7lm3dul20tru6uqu13ce/vzOTAEkIIaBnk+D9fnNOyJn5zr137kwMhQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPzImNcT8DPjXk/Az9zyegJ+ZsnrCfiYDOv1DHzMMshpsNI2Ms5mPJiHH8mstg1NgBydcqxtiKY9mIcvmflmxjKyzIIcnRXpnmXkPrvmyUx8yGTMWnSWaOhzdB6IJfPAGEsPezMV/yGEpbJp4CFLw/FBoywx0rppZI2mH3o0Gb9xL8bETBV5g6XZaa9m4zMeRBhx0jjwiKbZZa9m4y8yMYYRjdsVanJoaJA1VpCcyAPDAAocesSz6fiLzQiSM9X6+zEKHNisNNBexTBhQ6OzhNxAPdbYEc1yxnHgsGPeTchPiGGTnCc0Bk5WhElUjo1yhomc215OyTdkiJuWHJJUNPvY00n5hacikdPYrZaJGxoukDEzEqPJ2SR/ZjQ3kFWEqYguR+uQv9XcwF6FeaZVHEY/Wz3XA+eRt7PyB42kYrRT+YTuht3wemI9sljs+kjP5+gME27Iwfc5DTeBO1dV5K1yl0em2YkeX7oZYZqRkwkNN9wE7ehQkbkX2+2fJY1Ms722J09jTTfhqSdLNB3MwKnIFMV9F3vq8Mi01rxNPHH90p2WGyb+/VrTTcAaQOyGol68FKc6ptZ0Iyfo+y5fOikZ3Nxp/pymn1/TrP8fNDcUl+MjbR/fdFpuaHbNVcnYabmJS6zBDes+9nyA7gbxSmCkTbvgMbjByxvprme1mVN85I3x12yg/t2t5YbLCaiVjT1re8TshkTPuOMVcGaq4SYu/GD+caC+5bXcIHZ5vOuW1i3PvLbKQXroW53bnnVR28OFuHiHtfw2SPfqtajBDdrOyb4rbZr/KeLHJJto04Oy66G9nx0J9358nH/7pi3kAvVBpmiUQ3F5XjsmSj8ZS89YKjlvYwetlb21Ya2v6yVR4ONxEZlpC7igtX97qtGOvMszDT2G6Emmk7O2drCfkYn7G2MNReXVCCN+8/YN3W4GPeu2DfALNdkUOu/2BaahZ7PZMv+cTiezHewQQUjFyKNhROMv28eCd4tjyiuKK5Sa/UkkJkxq2fU6iezM2RWeHgigm1DFlFecesm3OtuwKE3dK+OKnEZ0TC13boKWU5iqJXRevDfYweEjTU3+kkphPck5um89QavFOnXKbOfdgckO8iOK/OGHhaNkKpXqM3gSwdrDW5hLMrIz9NJih5wC4nHm8OzjySf7Tb2Lm1/rXq+yXygrtnZIy8sjR596LcyJxG9qxetF9suxNXTUjnbIcekk25OexO9KTj32epF9o1oih5Od7Zwls66Ti32+nFM4ueb1GvvGGjrYzisHO7ywkJqbTbjww04shz6Pyly0+/W9b7GGDraz62CHiR8epXD4OPpJzN9Gp4rT0RxHUV6v8ApYNyxiZ0twsINy6yiVSmdnWXtBiQR7nv0DvfrP0TxHBbceY+pWOagqF5Rtp+AR4mcXqWQyOZednUcujNDzs9n00Ud8a0bcUAEuOaG2NpnYofKOhQfrOTxJYz/JZHoumz0/n509Pz/PzqVRt3hxJuLr6NNRBb8ryCUnZD1haXa4/NBWyTG3UGt4eHKk+WmCzHwo8eJ6KJT5jNygwKEC2wLqtMvBl8qFgtOeTsKHj4fPPi5cHKVxAB1dLHw4FOJ8DH/kqSpKnrgJcJejUWtPLFyWlaFLx8qjC0KNM08CKc7zAhORdtAbj+/qboKeVSHbxMKplSsM7Za66jERK82EQsVT5IbT3rLn9dqujo0bEjz5wtBBD3pE8m0HhY2S090Ee6/SsNmx9OBRUPQcutITFmM7GZSj+VFFkXU3lOr1yq6DY3s7qG5gPVv7fDc/kZi4U8ZqSNg03Sx6vbBrwbbsED0q1qMcbPOdd3ZypYpqzVcFRU2+GTYoqwJfjjXqnewQPchP/mBfsBEUjsSk0mQ5VDw+vYvVRLmWG/WL16u6Jood5ZDak8d+hi4P9ks82rGFpplIaXWlXKx9zWEzZjUDUnEIHYpyQ4+K/SiFwlDh8v3Bq5f724i//v7n38Wvp4W7o9iMklNNaig56A2gAUc7LT/YEHJEKIxqWlDM5GSzGSr4JwcTtp2y2Q8SlMtrilrkc1EUM1Y1VLTq9YKulVquix3iB2lQZTmaQ0SjskqGbJ6UB2Mbb9E1dkyOuA5aCOpAJRWh/V6wXwalxTFSvSY7A1ZwdIqcQ8Pj3s0A7eIm9q4ePNFBK8Ytvrgtyx3dDMqxwY6qeqXUGuC4IexdIXgGtt40qfUbPOogXP51pdJX8Mj1AexvbKjWe9cTDfTH356ocb3t6jI3kK1fJ2r1qOvaowb+A17P1Pbc6VEH7hTuiuIi1c2PGuVuXNQ0qVaQn06CVFmu3ITt24Hq8Z4alS2GVFWOcjfdjE6xtlipU3JUQ+bqlePazWhr3FMsVqvVIlgBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC4qfwHs/HFCNL9ugIAAAAASUVORK5CYII=" style={{width: '75%'}} alt="..." />
              </a>
              {/* User menu (mobile) */}
              <div className="navbar-user d-lg-none">
                {/* Dropdown */}
                <div className="dropdown">
                  {/* Toggle */}
                  <a href="#" id="sidebarAvatar" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <div className="avatar-parent-child">
                      <img alt="Image Placeholder" src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar- rounded-circle" />
                      <span className="avatar-child avatar-badge bg-success" />
                    </div>
                  </a>
                  {/* Menu */}
                  <div className="dropdown-menu dropdown-menu-end" aria-labelledby="sidebarAvatar">
                    <a href="#" className="dropdown-item">Profile</a>
                    <a href="#" className="dropdown-item">Settings</a>
                    <a href="#" className="dropdown-item">Billing</a>
                    <hr className="dropdown-divider" />
                    <a href="#" className="dropdown-item">Logout</a>
                  </div>
                </div>
              </div>
              {/* Collapse */}
              <div className="collapse navbar-collapse" id="sidebarCollapse">
                {/* Navigation */}
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i className="bi bi-house" /> Dashboard
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i className="bi bi-bar-chart" /> Analitycs
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i className="bi bi-chat" /> Messages
                      <span className="badge bg-soft-primary text-primary rounded-pill d-inline-flex align-items-center ms-auto">6</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i className="bi bi-bookmarks" /> Collections
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i className="bi bi-people" /> Users
                    </a>
                  </li>
                </ul>
                {/* Divider */}
                <hr className="navbar-divider my-5 opacity-20" />
                {/* Push content down */}
                <div className="mt-auto" />
                {/* User (md) */}
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i className="bi bi-person-square" /> Account
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i className="bi bi-box-arrow-left" /> Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          {/* Main content */}
          <div className="h-screen flex-grow-1 overflow-y-lg-auto">
            {/* Header */}
            <header className="bg-surface-primary border-bottom pt-6">
              <div className="container-fluid">
                <div className="mb-npx">
                  <div className="row align-items-center">
                    <div className="col-sm-6 col-12 mb-4 mb-sm-0">
                      {/* Title */}
                      <h1 className="h2 mb-0 ls-tight">Dr Kristin watson</h1>
                    </div>
                    {/* Actions */}
                    <div className="col-sm-6 col-12 text-sm-end">
                      <div className="mx-n1">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </header>
            {/* Main */}
            <main className="py-6 bg-surface-secondary">
              <div className="container-fluid">
                {/* Card stats */}
                <div className="row g-6 mb-6">
                  <div className="col-xl-3 col-sm-6 col-12">
                    <div className="card shadow border-0">
                      <div className="card-body">
                        <div className="row">
                          <div className="col">
                            <span className="h6 font-semibold text-muted text-sm d-block mb-2">Wallet</span>
                            <span className="h3 font-bold mb-0">$750.90</span>
                          </div>
                          <div className="col-auto">
                            <div className="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
                              <i className="bi bi-credit-card" />
                            </div>
                          </div>
                        </div>
                        <div className="mt-2 mb-0 text-sm">
                          <span className="badge badge-pill bg-soft-success text-success me-2">
                            <i className="bi bi-arrow-up me-1" />13%
                          </span>
                          <span className="text-nowrap text-xs text-muted">Since last month</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6 col-12">
                    <div className="card shadow border-0">
                      <div className="card-body">
                        <div className="row">
                          <div className="col">
                            <span className="h6 font-semibold text-muted text-sm d-block mb-2">Customers</span>
                            <span className="h3 font-bold mb-0">215</span>
                          </div>
                          <div className="col-auto">
                            <div className="icon icon-shape bg-primary text-white text-lg rounded-circle">
                              <i className="bi bi-people" />
                            </div>
                          </div>
                        </div>
                        <div className="mt-2 mb-0 text-sm">
                          <span className="badge badge-pill bg-soft-success text-success me-2">
                            <i className="bi bi-arrow-up me-1" />30%
                          </span>
                          <span className="text-nowrap text-xs text-muted">Since last month</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6 col-12">
                    <div className="card shadow border-0">
                      <div className="card-body">
                        <div className="row">
                          <div className="col">
                            <span className="h6 font-semibold text-muted text-sm d-block mb-2">Your Ratings</span>
                            <span className="h3 font-bold mb-0">4.5/5</span>
                          </div>
                          <div className="col-auto">
                            <div className="icon icon-shape bg-info text-white text-lg rounded-circle">
                              <i className="bi bi-clock-history" />
                            </div>
                          </div>
                        </div>
                        <div className="mt-2 mb-0 text-sm">
                          <span className="badge badge-pill bg-soft-danger text-danger me-2">
                            <i className="bi bi-arrow-down me-1" />-5%
                          </span>
                          <span className="text-nowrap text-xs text-muted">Since last month</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
                {/* <div id="demo"></div> */}
                <div id="demo-timegrid" />
                <div className="card shadow border-0 mb-7">
                  <div className="card-header">
                    <h5 className="mb-0">Appointments</h5>
                  </div>
                  <div className="table-responsive">
                    <table className="table table-hover table-nowrap">
                      <thead className="thead-light">
                        <tr>
                          <th scope="col">Name</th>
                          <th scope="col">Date</th>
                          <th scope="col">Time</th>
                          <th scope="col">Status</th>
                          <th />
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <img alt="..." src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar-sm rounded-circle me-2" />
                            <a className="text-heading font-semibold" href="#">
                              Robert Fox
                            </a>
                          </td>
                          <td>
                            Feb 15, 2021
                          </td>
                          {/* <td>
                                        <img alt="..." src="https://preview.webpixels.io/web/img/other/logos/logo-1.png" class="avatar avatar-xs rounded-circle me-2">
                                        <a class="text-heading font-semibold" href="#">
                                            Dribbble
                                        </a>
                                    </td> */}
                          <td>
                            $3.500
                          </td>
                          <td>
                            <span className="badge badge-lg badge-dot">
                              <i className="bg-success" />Scheduled
                            </span>
                          </td>
                          <td className="text-end">
                            <a href="#" className="btn btn-sm btn-neutral">Accept</a>
                            <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                              <i className="bi bi-trash" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img alt="..." src="https://images.unsplash.com/photo-1610271340738-726e199f0258?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar-sm rounded-circle me-2" />
                            <a className="text-heading font-semibold" href="#">
                              Darlene Robertson
                            </a>
                          </td>
                          <td>
                            Apr 15, 2021
                          </td>
                          {/* <td>
                                        <img alt="..." src="https://preview.webpixels.io/web/img/other/logos/logo-2.png" class="avatar avatar-xs rounded-circle me-2">
                                        <a class="text-heading font-semibold" href="#">
                                            Netguru
                                        </a>
                                    </td> */}
                          <td>
                            $2.750
                          </td>
                          <td>
                            <span className="badge badge-lg badge-dot">
                              <i className="bg-warning" />Postponed
                            </span>
                          </td>
                          <td className="text-end">
                            <a href="#" className="btn btn-sm btn-neutral">Accept</a>
                            <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                              <i className="bi bi-trash" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img alt="..." src="https://images.unsplash.com/photo-1610878722345-79c5eaf6a48c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar-sm rounded-circle me-2" />
                            <a className="text-heading font-semibold" href="#">
                              Theresa Webb
                            </a>
                          </td>
                          <td>
                            Mar 20, 2021
                          </td>
                          {/* <td>
                                        <img alt="..." src="https://preview.webpixels.io/web/img/other/logos/logo-3.png" class="avatar avatar-xs rounded-circle me-2">
                                        <a class="text-heading font-semibold" href="#">
                                            Figma
                                        </a>
                                    </td> */}
                          <td>
                            $4.200
                          </td>
                          <td>
                            <span className="badge badge-lg badge-dot">
                              <i className="bg-success" />Scheduled
                            </span>
                          </td>
                          <td className="text-end">
                            <a href="#" className="btn btn-sm btn-neutral">Accept</a>
                            <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                              <i className="bi bi-trash" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img alt="..." src="https://images.unsplash.com/photo-1612422656768-d5e4ec31fac0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar-sm rounded-circle me-2" />
                            <a className="text-heading font-semibold" href="#">
                              Kristin Watson
                            </a>
                          </td>
                          <td>
                            Feb 15, 2021
                          </td>
                          {/* <td>
                                        <img alt="..." src="https://preview.webpixels.io/web/img/other/logos/logo-4.png" class="avatar avatar-xs rounded-circle me-2">
                                        <a class="text-heading font-semibold" href="#">
                                            Mailchimp
                                        </a>
                                    </td> */}
                          <td>
                            $3.500
                          </td>
                          <td>
                            <span className="badge badge-lg badge-dot">
                              <i className="bg-dark" />Not discussed
                            </span>
                          </td>
                          <td className="text-end">
                            <a href="#" className="btn btn-sm btn-neutral">Accept</a>
                            <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                              <i className="bi bi-trash" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img alt="..." src="https://images.unsplash.com/photo-1608976328267-e673d3ec06ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar-sm rounded-circle me-2" />
                            <a className="text-heading font-semibold" href="#">
                              Cody Fisher
                            </a>
                          </td>
                          <td>
                            Apr 10, 2021
                          </td>
                          {/* <td>
                                        <img alt="..." src="https://preview.webpixels.io/web/img/other/logos/logo-5.png" class="avatar avatar-xs rounded-circle me-2">
                                        <a class="text-heading font-semibold" href="#">
                                            Webpixels
                                        </a>
                                    </td> */}
                          <td>
                            $1.500
                          </td>
                          <td>
                            <span className="badge badge-lg badge-dot">
                              <i className="bg-danger" />Canceled
                            </span>
                          </td>
                          <td className="text-end">
                            <a href="#" className="btn btn-sm btn-neutral">Accept</a>
                            <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                              <i className="bi bi-trash" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img alt="..." src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar-sm rounded-circle me-2" />
                            <a className="text-heading font-semibold" href="#">
                              Robert Fox
                            </a>
                          </td>
                          <td>
                            Feb 15, 2021
                          </td>
                          {/* <td>
                                        <img alt="..." src="https://preview.webpixels.io/web/img/other/logos/logo-1.png" class="avatar avatar-xs rounded-circle me-2">
                                        <a class="text-heading font-semibold" href="#">
                                            Dribbble
                                        </a>
                                    </td> */}
                          <td>
                            $3.500
                          </td>
                          <td>
                            <span className="badge badge-lg badge-dot">
                              <i className="bg-success" />Scheduled
                            </span>
                          </td>
                          <td className="text-end">
                            <a href="#" className="btn btn-sm btn-neutral">Accept</a>
                            <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                              <i className="bi bi-trash" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img alt="..." src="https://images.unsplash.com/photo-1610271340738-726e199f0258?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar-sm rounded-circle me-2" />
                            <a className="text-heading font-semibold" href="#">
                              Darlene Robertson
                            </a>
                          </td>
                          <td>
                            Apr 15, 2021
                          </td>
                          {/* <td>
                                        <img alt="..." src="https://preview.webpixels.io/web/img/other/logos/logo-2.png" class="avatar avatar-xs rounded-circle me-2">
                                        <a class="text-heading font-semibold" href="#">
                                            Netguru
                                        </a>
                                    </td> */}
                          <td>
                            $2.750
                          </td>
                          <td>
                            <span className="badge badge-lg badge-dot">
                              <i className="bg-warning" />Postponed
                            </span>
                          </td>
                          <td className="text-end">
                            <a href="#" className="btn btn-sm btn-neutral">Accept</a>
                            <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                              <i className="bi bi-trash" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img alt="..." src="https://images.unsplash.com/photo-1610878722345-79c5eaf6a48c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar-sm rounded-circle me-2" />
                            <a className="text-heading font-semibold" href="#">
                              Theresa Webb
                            </a>
                          </td>
                          <td>
                            Mar 20, 2021
                          </td>
                          {/* <td>
                                        <img alt="..." src="https://preview.webpixels.io/web/img/other/logos/logo-3.png" class="avatar avatar-xs rounded-circle me-2">
                                        <a class="text-heading font-semibold" href="#">
                                            Figma
                                        </a>
                                    </td> */}
                          <td>
                            $4.200
                          </td>
                          <td>
                            <span className="badge badge-lg badge-dot">
                              <i className="bg-success" />Scheduled
                            </span>
                          </td>
                          <td className="text-end">
                            <a href="#" className="btn btn-sm btn-neutral">Accept</a>
                            <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                              <i className="bi bi-trash" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img alt="..." src="https://images.unsplash.com/photo-1612422656768-d5e4ec31fac0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar-sm rounded-circle me-2" />
                            <a className="text-heading font-semibold" href="#">
                              Kristin Watson
                            </a>
                          </td>
                          <td>
                            Feb 15, 2021
                          </td>
                          {/* <td>
                                        <img alt="..." src="https://preview.webpixels.io/web/img/other/logos/logo-4.png" class="avatar avatar-xs rounded-circle me-2">
                                        <a class="text-heading font-semibold" href="#">
                                            Mailchimp
                                        </a>
                                    </td> */}
                          <td>
                            $3.500
                          </td>
                          <td>
                            <span className="badge badge-lg badge-dot">
                              <i className="bg-dark" />Not discussed
                            </span>
                          </td>
                          <td className="text-end">
                            <a href="#" className="btn btn-sm btn-neutral">Accept</a>
                            <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                              <i className="bi bi-trash" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img alt="..." src="https://images.unsplash.com/photo-1608976328267-e673d3ec06ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar-sm rounded-circle me-2" />
                            <a className="text-heading font-semibold" href="#">
                              Cody Fisher
                            </a>
                          </td>
                          <td>
                            Apr 10, 2021
                          </td>
                          {/* <td>
                                        <img alt="..." src="https://preview.webpixels.io/web/img/other/logos/logo-5.png" class="avatar avatar-xs rounded-circle me-2">
                                        <a class="text-heading font-semibold" href="#">
                                            Webpixels
                                        </a>
                                    </td> */}
                          <td>
                            $1.500
                          </td>
                          <td>
                            <span className="badge badge-lg badge-dot">
                              <i className="bg-danger" />Canceled
                            </span>
                          </td>
                          <td className="text-end">
                            <a href="#" className="btn btn-sm btn-neutral">Accept</a>
                            <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                              <i className="bi bi-trash" />
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="card-footer border-0 py-5">
                    <span className="text-muted text-sm">Showing 10 items out of 250 results found</span>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </main>
    );
}
export default Main;