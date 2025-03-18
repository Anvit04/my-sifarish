import React from 'react'
// import {  } from 'next';


export const metadata = {
  title: "About MySifarish | Trusted, Personalised, and Community-Driven Recommendations",
  description: "MySifarish is redefining trust in recommendations—connecting you with real, reliable insights from your network and community. Discover, save, and share with confidence.",
};

const About = () => {
  return (
    <>
      <section className=" __mainContainer pt-[50px] pb-[80px] lg:pt-[150px] lg:pb-[150px] relative z-[1]">
        <div className='flex flex-col gap-12 lg:gap-20'>
          <div className="max-w-[1055px] lg:max-w-[980px] xl:max-w-[1055px] w-full mx-auto text-center relative">
            {/* <h4 className="__ldHead">VISION STATEMENT</h4> */}
            <h4 className="__ldHead">“Restoring the lost art of genuine recommendations, empowering decision through community driven experiences and seamlessly connecting the digital and real world”</h4>
            {/* <p className="text-base lg:text-lg">“Restoring the lost art of genuine recommendations, empowering decision through community driven experiences and seamlessly connecting the digital and real world”</p> */}
          </div>

          <div className="max-w-[1055px] lg:max-w-[980px] xl:max-w-[1055px] w-full mx-auto text-center relative">
            <h4 className="__ldHead">Restoring the LOST ART OF GENUINE Recommendations</h4>
            <p className="text-base lg:text-lg">In a world flooded with unreliable reviews and anonymous ratings, making informed decisions about where to eat, stay, or explore has become harder than ever. At MySifarish, we believe that the most valuable recommendations come from real people—your trusted network, your community, and those who truly understand your preferences. <br /> <br /> MySifarish is a platform built to restore trust in recommendations by making it easier than ever to discover, save, and share experiences that genuinely matter to you. Whether it’s the perfect coffee spot, a hidden-gem boutique hotel, or an unforgettable dining experience, real insights from real people create the most meaningful discoveries.</p>
          </div>

          <div className="max-w-[1055px] lg:max-w-[980px] xl:max-w-[1055px] w-full mx-auto text-center relative">
            <h4 className="__ldHead">Why We Built MYSIFARISH</h4>
            <p className="text-base lg:text-lg">MySifarish is a part of Solresol Technologies vision of improving how we experience technology, created with a simple yet powerful vision—to give people control over recommendations that truly matter. We are shifting away from impersonal, unreliable reviews and instead fostering a community-driven ecosystem where people can share their experiences effortlessly and access suggestions they can actually trust. <br /> <br /> To make this even more intuitive, MySifarish categorises users based on their unique discovery style, helping connect them with recommendations that align with how they explore the world. This approach ensures that every experience suggested is tailored, relevant, and trustworthy. (Curious to know your discovery style? Find your bird here)</p>
          </div>


          <div className="max-w-[1055px] lg:max-w-[980px] xl:max-w-[1055px] w-full mx-auto text-center relative">
            <h4 className="__ldHead">What Makes Mysifarish Different?</h4>
            <ul>
              <li className='flex gap-1.5 text-base lg:text-lg mb-1.5'><i className="fa-solid fa-square-check text-[#18b557] mt-1.5"></i><span className='text-left'><strong className=' font-medium'>Personalised & Trusted</strong> – Get recommendations from people who genuinely understand your taste.</span></li>

              <li className='flex gap-1.5 text-base lg:text-lg mb-1.5'><i className="fa-solid fa-square-check text-[#18b557] mt-1.5"></i><span className='text-left'><strong className=' font-medium'>Built Around Your Community</strong> – No fake reviews, just real insights from your network.</span></li>

              <li className='flex gap-1.5 text-base lg:text-lg mb-1.5'><i className="fa-solid fa-square-check text-[#18b557] mt-1.5"></i><span className='text-left'><strong className=' font-medium'>Easy Sharing & Saving</strong> – Create and store your go-to recommendations in one place.</span> </li>

              <li className='flex gap-1.5 text-base lg:text-lg '><i className="fa-solid fa-square-check text-[#18b557] mt-1.5"></i><span className='text-left'><strong className=' font-medium'>Hyper-Local & Relevant</strong> – Discover the best experiences around you, curated to your style.</span></li>
            </ul>
          </div>

          <div className="max-w-[1055px] lg:max-w-[980px] xl:max-w-[1055px] w-full mx-auto text-center relative">
            <h4 className="__ldHead ">Join The Movement</h4>
            <p className="text-base lg:text-lg">With MySifarish, you’re not just getting recommendations—you’re part of a movement that values authenticity, community, and trust. Say goodbye to guesswork and start discovering experiences that truly resonate with you.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About