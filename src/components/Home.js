import React from 'react'
import Sidebar from './Sidebar'
import '../css/bootstrap.css'

function Home() {
  return (
    <div>
      <body className="baxa g-sidenav-show  bg-gray-200">
        <main className="">
            <div className="aaju_baju">
                {/* <Sidebar/> */}
                {/* make divs side by side */}
                <div className="row">
                    <div className="col-2">
                        <Sidebar/>
                    </div>
                    <div className="col-10">
                        <div className="container">
                            <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur"
                            navbar-scroll="true">
                                <div className="container-fluid py-1 px-3">
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                                            <li className="breadcrumb-item text-sm"><a className="opacity-5 text-dark" href="">Pages</a>
                                            </li>
                                            <li className="breadcrumb-item text-sm text-dark active" aria-current="page">Home</li>
                                        </ol>
                                        <h6 className="baju font-weight-bolder mb-0">Home</h6>
                                    </nav>
                                </div>
                            </nav>

                            <div className="container-fluid py-4">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
      </body>
    </div>
  )
}

export default Home
