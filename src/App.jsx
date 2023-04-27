import { useState } from 'react'
import './App.css'
import allBikes from './trial'
import allOffers from './offers'

function App() {
  const [notification, setNotification] = useState(0)
  const [sells, setSells] = useState(0)

  function changeNotification() {
    setNotification(notification + 1)
  }

  function changeSells() {
    setSells(sells + 1)
  }

  return (
    <main>
      <Navs notification={notification} sells={sells} />
      <Main />
      <Items setNotification={changeNotification} setSells={changeSells} />
      <Offers />
      <Footer />
    </main>
  )
}

function Navs(props) {

  function goToOffers() {
    const offerss = document.getElementById("offers-containersss")
    offerss.scrollIntoView({ behavior: "smooth" })
  }

  function goToFooter() {
    const footersss = document.getElementById("contact-us-footer")
    footersss.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main>
      {/* nav start */}
      <div className="navbar bg-base-100" id='nav-bar'>
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-40">
              <li tabIndex={0}>
                <a className="justify-between">
                  About Us
                  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                </a>
                <ul className="p-2 w-52 bg-zinc-800 text-ellipsis">
                  <h2>
                    It's Dr. Ahmed Adel Rashad, a Clinical Pharmacist, who managed to shift
                    career into a certified Frontend Web Developer, having a wide experience
                    in the field and a lot of works done such as this website here.
                    I'm dedicated to design websites that suits every client specifically, and give more
                    advices to the client, if needed, that matches the right-in-moment
                    trends. <br /> <br />
                    Thank you so much for your support! <br />
                    Dr. Ahmed Adel Rashad
                  </h2>
                </ul>
              </li>
              <li><a onClick={goToOffers}>Offers and Deals</a></li>
              <li><a onClick={goToFooter}>Contact Us</a></li>
            </ul>
          </div>
          <img src="public\Rashad's name.jpeg" id='rashads-name' />
        </div>


        {/* nav center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a className='font-semibold text-gray-600' onClick={goToOffers}>Offers and Deals</a></li>
            <li tabIndex={0}>
              <a className=' font-semibold text-gray-600'>
                About Us
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
              </a>
              <ul className="p-2 w-60 bg-slate-900 text-ellipsis absolute z-20">
                <h2>It's Dr. Ahmed Adel Rashad, a Clinical Pharmacist, who managed to shift
                  career into a certified Frontend Web Developer, having a wide experience
                  in the field and a lot of works done such as this website here.
                  I'm dedicated to design websites that suits every client specifically, and give more
                  advices to the client, if needed, that matches the right-in-moment
                  trends. <br /> <br />
                  Thank you so much for your support! <br />
                  Dr. Ahmed Adel Rashad</h2>
              </ul>
            </li>
            <li><a className=' font-semibold text-gray-600' onClick={goToFooter}>Contact Us</a></li>
          </ul>
        </div>


        {/* the end of nav */}
        <div className="navbar-end">
          <div className="dropdown dropdown-end ">
          { props.notification ===0?
            <label tabIndex={0}>
              <img className="w-8" src="public/notification-icon.svg" />
            </label>
            :
            <label tabIndex={0}>
            <div className='indicator mr-3'>
              <span className="indicator-item indicator-end badge badge-secondary w-7 ml-3">{props.notification}</span> 
              <img className="indicator-top w-8" src="public/notification-icon.svg" />
            </div>
            </label>
            }
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-auto">
              <li><a>{props.notification === 0 ? "You have no notifications" : `You have ${props.notification} notification${props.notification===1? "" : "s"}`}</a></li>
            </ul>
          </div>


          <div className="dropdown dropdown-end ">
          { props.sells ===0?
            <label tabIndex={0}>
              <img className="w-9" src="public/cart-icon.svg" />
            </label>
            :
            <label tabIndex={0}>
            <div className='indicator mr-3'>
              <span className="indicator-item indicator-end badge badge-secondary w-7 ml-3">{props.sells}</span> 
              <img className="indicator-top w-8" src="public/notification-icon.svg" />
            </div>
            </label>
            }
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-44 ">
              <li><a>{props.sells === 0 ? "You have nothing in buying cart" : `You have ${props.sells} item${props.sells===1? "" : "s"} to buy!`}</a></li>
            </ul>
          </div>

        </div>
      </div>
    </main>
  )
}

function Main() {

  return (
    <main id='carosell-section'>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="bike 1.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src="bike 2.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src="bike 3.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
      <h1 className='join-community text-gray-600'>Join Our <a
      href="https://rashads-social-media-app.vercel.app/"
      className="link link-hover font-semibold" target='_blank'>
      Community</a> to See More From Our Updates!</h1>
    </main>
  )
}

function Sales(props) {
  const [fav, setFav] = useState(false)

  function changeFav() {
    setFav(!fav)
    { fav ? "" : props.setNotification() }
  }
  function theSells() {
    { props.setSells() }
  }

  return (
    <div className="all-ride-container">
      <img className="bike-carousel" src={props.url} />
      <h2 className="bike-description">{props.desc}</h2>
      <div className="the-sell-icons">
        <img className="like-icon" onClick={changeFav} src={fav ? "Star-icon-on.png" : "Star-icon-off.png"} />
        <img className="shop-icon" onClick={theSells} src="shop-icon.png" />
      </div>
    </div>
  )
}

function Items(props) {

  const displayAllBikes = allBikes.map((bike, index) => (
    <Sales key={index} url={bike.url} desc={bike.desc} setNotification={props.setNotification} setSells={props.setSells} />
  ))

  return (
    <main className="whole-items">
      <h2 className="join-rides">Our Fancy Rides...</h2>
      <div className="items-to-sell">
        {displayAllBikes}
      </div>
    </main>
  )
}

function Offers() {

  const allTheOffers = allOffers.map((offer, index) => (
    <div className="offer-sticker" key={index}>
      <img src={offer.url} />
      <div className="offer-desc">
        <h2><span className="price-now">{offer.price}</span> instead of <span className="old-price">{offer.oldPrice}</span></h2>
      </div>
    </div>
  ))

  return (
    <main id="offers-containersss"
      className="whole-items">
      <h2 className="join-rides">Offers and Deals...</h2>
      <div id="offers-container">
        {allTheOffers}
      </div>
    </main>
  )
}

function Footer() {
  return (
    <main id="contact-us-footer">
      <footer className="text-center text-white dark:bg-neutral-600">
        <div className="container pt-9"
          id="footer-container">
          <div
            className="mb-9 flex justify-center">
            <a href="https://www.facebook.com/supermody1997/" target="_blank" className="mr-9 text-neutral-800 dark:text-neutral-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                  d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
            <a href="https://twitter.com/supermody1997" target="_blank" className="mr-9 text-neutral-800 dark:text-neutral-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                  d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" target="_blank" className="mr-9 text-neutral-800 dark:text-neutral-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                  d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                  fillRule="evenodd"
                  clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://www.instagram.com/ahmedrashad_97/" target="_blank" className="mr-9 text-neutral-800 dark:text-neutral-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/ahmed-adel-20/" target="_blank" className="mr-9 text-neutral-800 dark:text-neutral-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                  d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </a>
            <a href="https://github.com/ahmed-adel2" target="_blank" className="text-neutral-800 dark:text-neutral-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>

        {/* <!--Copyright section--> */}
        <div
          className="bg-neutral-300 p-4 text-center text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
          © 2023 Copyright:
          <a
            className="text-neutral-800 dark:text-neutral-400"
            href="https://rashads-web-dev-portofolio.netlify.app/" target="_blank"> Rashad's</a>
        </div>
      </footer>
    </main>
  )
}

export default App
