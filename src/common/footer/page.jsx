import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="">
      <div className="flex justify-center relative">
        <div className="__centerBlur"></div>
      </div>

      <div className="_mainfooter ">
        <div className="__mainContainer">
          <div className="flex pt-[80px] lg:pt-[100px] pb-10 justify-start lg:justify-between flex-wrap gap-y-10">
            <div className="basis-full sm:basis-[50%] lg:basis-[266px]">
              <div className="mb-7">
                <img src="/assets/img/footer_logo.svg" alt="" />
                <p className="mt-2.5 text-base">© solresoltechonologies</p>
              </div>

              <ul>
                <li className="mb-3.5"><Link href="#" className="font-medium text-base">Terms of Use</Link></li>
                <li className="mb-3.5"><Link href="#" className="font-medium text-base">Privacy Policy</Link></li>
                <li className="mb-3.5"><Link href="#" className="font-medium text-base">Solresol Technologies</Link></li>
                <li className="mb-4"><Link href="#" className="font-medium text-base">Community</Link></li>
              </ul>

              <div>
                <ul className="flex gap-5">
                  <li className="min-w-[24px]"><Link href="#" className="text-2xl"><i className="fa-brands fa-facebook-f"></i></Link></li>
                  <li className="min-w-[24px]"><Link href="#" className="text-2xl"><i className="fa-brands fa-x-twitter"></i></Link></li>
                  <li className="min-w-[24px]"><Link href="#" className="text-2xl"><i className="fa-brands fa-instagram"></i></Link></li>
                  <li className="min-w-[24px]"><Link href="#" className="text-2xl"><i className="fa-brands fa-linkedin"></i></Link></li>
                </ul>
              </div>

            </div>

            <div className='basis-full sm:basis-[50%] lg:basis-[266px] sm:mt-12 lg:mt-0'>
              <h6 className="text-2xl font-medium mb-7">Menu</h6>
              <ul>
                <li className="mb-6"><Link href="/" className="text-base">Home</Link></li>
                <li className="mb-6"><Link href="/about" className="text-base">About</Link></li>
                <li className="mb-6"><Link href="/faq" className="text-base">FAQs</Link></li>
                <li className="mb-6"><Link href="/kyb" className="text-base">Know Your Bird</Link></li>
              </ul>
            </div>

            <div className="basis-full sm:basis-[65%] lg:basis-96">
              <h6 className="text-2xl font-medium mb-7">Drop your email to get invitation to the newest version of the app</h6>
              <div className="flex gap-4">
                <input type="email" className="__nwsInput " placeholder="pat@shuffle.dev" />
                <button className="_joinBtn ">join now</button>
              </div>

              <div className="flex gap-5 mt-6 lg:mt-8">
                <Link href="#"><img src="/assets/img/GooglePlayBtn.svg" className="w-[169px]" /></Link>
                <Link href="#"><img src="/assets/img/appleBtn.svg" className="w-[169px]" /></Link>
              </div>
            </div>
          </div>

          <div className="border-t border-[#ffffff80] pt-5 pb-11">
            <p className="text-[14px] text-center">© solresoltechonologies. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer