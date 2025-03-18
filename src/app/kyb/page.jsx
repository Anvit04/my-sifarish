import React from 'react'

export const metadata = {
  title: "Know Your Bird | Discover Personalised & Trusted Recommendations",
  description: "Find out which bird reflects your discovery style and get personalised, trustworthy recommendations on restaurants, hotels, and experiences tailored to you.",
};

const KYB = () => {
  return (
    <>
      <section className=" __mainContainer pt-[50px] pb-[80px] lg:pt-[150px] lg:pb-[150px]">
        <div className='flex flex-col gap-20 lg:gap-26'>
          <div className="max-w-[1055px] lg:max-w-[980px] xl:max-w-[1055px] w-full mx-auto text-center relative">
            <h4 className="__ldHead ">Find Your Bird – Discover Like Never Before</h4>
            <p className="text-base lg:text-lg">Ever wondered how you navigate the world of recommendations? Whether you're a meticulous planner or an adventurous explorer, your discovery style is as unique as you are. At Mysifarish, we’ve categorized different approaches to finding experiences into <b className=' font-medium'>12 distinct bird types</b> , each reflecting a unique way of exploring restaurants, hotels, and local gems. <br /><br />Dive in and identify your bird – your personal guide to uncovering the best spots, curated just for you.</p>
          </div>

          <div className=" w-full mx-auto text-center relative">
            <h4 className="__ldHead ">Which Bird Are You? ✨</h4>
            <div className='flex flex-col mt-10 gap-10 lg:mt-14 lg:gap-14'>
              <div className=' text-left flex'>
                <div className='basis-[calc(100%-180px)]'>
                  <h6 className=' text-[22px] lg:text-2xl xl:text-3xl font-medium mb-3 xl:mb-5'>Eagle – The Go-Getter</h6>
                  <div className='pl-2'>
                    <p className="text-base lg:text-lg mb-2.5">Your vibe:  <b className=' font-medium'>Efficiency, practicality, and results.</b></p>
                    <ul className=' list-disc pl-[25px]'>
                      <li className="text-base lg:text-lg">You prefer quick, no-nonsense recommendations that deliver great <b className=' font-medium'>service</b> at the best <b className=' font-medium'>value</b>.</li>
                      <li className="text-base lg:text-lg">Time is money, and you trust sources that get straight to the point.</li>
                      <li className="text-base lg:text-lg">Your choices are calculated, ensuring a smooth experience every time.</li>
                    </ul>
                  </div>
                </div>

                <div className='basis-[160px]'>
                  <img src="/assets/img/Eagle.png" alt="" className=' invert w-full' />
                </div>
              </div>

              <div className=' text-left flex'>
                <div className='basis-[calc(100%-180px)]'>
                  <h6 className=' text-[22px] lg:text-2xl xl:text-3xl font-medium mb-3 xl:mb-5'>Goose – The Experience Collector</h6>
                  <div className='pl-2'>
                    <p className="text-base lg:text-lg mb-2.5">Your vibe:  <b className=' font-medium'>Moments over material.</b></p>
                    <ul className=' list-disc pl-[25px]'>
                      <li className="text-base lg:text-lg">You value <b className=' font-medium'>memorable experiences</b> over just the product.</li>
                      <li className="text-base lg:text-lg">Ambiance, customer care, and emotional connection matter to you.</li>
                      <li className="text-base lg:text-lg">You seek recommendations that guarantee <b className=' font-medium'>service excellence</b> and a great <b className=' font-medium'>vibe</b>.</li>
                    </ul>
                  </div>
                </div>

                <div className='basis-[160px]'>
                  <img src="/assets/img/Goose.png" alt="" className=' invert w-full' />
                </div>
              </div>

              <div className=' text-left flex'>
                <div className='basis-[calc(100%-180px)]'>
                  <h6 className=' text-[22px] lg:text-2xl xl:text-3xl font-medium mb-3 xl:mb-5'>Owl – The Perfectionist</h6>
                  <div className='pl-2'>
                    <p className="text-base lg:text-lg mb-2.5">Your vibe:  <b className=' font-medium'>Quality is everything.</b></p>
                    <ul className=' list-disc pl-[25px]'>
                      <li className="text-base lg:text-lg">You research extensively and only trust <b className=' font-medium'>highly-rated</b> recommendations.</li>
                      <li className="text-base lg:text-lg">Service and product <b className=' font-medium'>excellence</b> are non-negotiable for you.</li>
                      <li className="text-base lg:text-lg">You're the one people turn to for well-researched, <b className=' font-medium'>expert-backed</b> choices.</li>
                    </ul>
                  </div>
                </div>

                <div className='basis-[160px]'>
                  <img src="/assets/img/Owl.png" alt="" className=' invert w-full' />
                </div>
              </div>

              <div className=' text-left flex'>
                <div className='basis-[calc(100%-180px)]'>
                  <h6 className=' text-[22px] lg:text-2xl xl:text-3xl font-medium mb-3 xl:mb-5'>Peacock – The Luxe Lover</h6>
                  <div className='pl-2'>
                    <p className="text-base lg:text-lg mb-2.5">Your vibe:  <b className=' font-medium'>Why not have it all?</b></p>
                    <ul className=' list-disc pl-[25px]'>
                      <li className="text-base lg:text-lg">You love high-end experiences but <b className=' font-medium'>know how to get the best deals.</b></li>
                      <li className="text-base lg:text-lg">Exceptional <b className=' font-medium'>service and ambiance</b> make or break a recommendation for you.</li>
                      <li className="text-base lg:text-lg">You’re drawn to places that offer the <b className=' font-medium'>best of both worlds—luxury and value.</b></li>
                    </ul>
                  </div>
                </div>

                <div className='basis-[160px]'>
                  <img src="/assets/img/Peacock.png" alt="" className=' invert w-full' />
                </div>
              </div>

              <div className=' text-left flex'>
                <div className='basis-[calc(100%-180px)]'>
                  <h6 className=' text-[22px] lg:text-2xl xl:text-3xl font-medium mb-3 xl:mb-5'>Crane – The Smart Selector</h6>
                  <div className='pl-2'>
                    <p className="text-base lg:text-lg mb-2.5">Your vibe:  <b className=' font-medium'>Luxury on a budget.</b></p>
                    <ul className=' list-disc pl-[25px]'>
                      <li className="text-base lg:text-lg">You know where to find <b className=' font-medium'>high-end experiences at affordable prices.</b></li>
                      <li className="text-base lg:text-lg">You value <b className=' font-medium'>quality over quantity</b> and seek hidden gems.</li>
                      <li className="text-base lg:text-lg">You trust recommendations that offer <b className=' font-medium'>premium experiences without the premium cost.</b></li>
                    </ul>
                  </div>
                </div>

                <div className='basis-[160px]'>
                  <img src="/assets/img/Crane.png" alt="" className=' invert w-full' />
                </div>
              </div>

              <div className=' text-left flex'>
                <div className='basis-[calc(100%-180px)]'>
                  <h6 className=' text-[22px] lg:text-2xl xl:text-3xl font-medium mb-3 xl:mb-5'>Flamingo – The Trendsetter</h6>
                  <div className='pl-2'>
                    <p className="text-base lg:text-lg mb-2.5">Your vibe:  <b className=' font-medium'>If it’s trending, you know about it.</b></p>
                    <ul className=' list-disc pl-[25px]'>
                      <li className="text-base lg:text-lg">You’re always ahead of the curve, discovering <b className=' font-medium'>new hotspots first.</b></li>
                      <li className="text-base lg:text-lg">You value <b className=' font-medium'>service and ambiance</b>, ensuring every experience is Instagram-worthy.</li>
                      <li className="text-base lg:text-lg">Your recommendations influence others, making you a go-to for what’s hot.</li>
                    </ul>
                  </div>
                </div>

                <div className='basis-[160px]'>
                  <img src="/assets/img/Flamingo.png" alt="" className=' invert w-full' />
                </div>
              </div>

              <div className=' text-left flex'>
                <div className='basis-[calc(100%-180px)]'>
                  <h6 className=' text-[22px] lg:text-2xl xl:text-3xl font-medium mb-3 xl:mb-5'>Penguin – The Thoughtful Planner</h6>
                  <div className='pl-2'>
                    <p className="text-base lg:text-lg mb-2.5">Your vibe:  <b className=' font-medium'>Calculated yet spontaneous.</b></p>
                    <ul className=' list-disc pl-[25px]'>
                      <li className="text-base lg:text-lg">You balance between <b className=' font-medium'>budget-friendly choices</b> and incredible <b className=' font-medium'>experiences.</b></li>
                      <li className="text-base lg:text-lg">You carefully research but also love a  <b className=' font-medium'>good, spontaneous adventure.</b></li>
                      <li className="text-base lg:text-lg">You trust recommendations that fit both your <b className=' font-medium'>practical and indulgent side.</b></li>
                    </ul>
                  </div>
                </div>

                <div className='basis-[160px]'>
                  <img src="/assets/img/Penguin.png" alt="" className=' invert w-full' />
                </div>
              </div>

              <div className=' text-left flex'>
                <div className='basis-[calc(100%-180px)]'>
                  <h6 className=' text-[22px] lg:text-2xl xl:text-3xl font-medium mb-3 xl:mb-5'>Macaw – The Experience Connoisseur</h6>
                  <div className='pl-2'>
                    <p className="text-base lg:text-lg mb-2.5">Your vibe:  <b className=' font-medium'>You don’t do average.</b></p>
                    <ul className=' list-disc pl-[25px]'>
                      <li className="text-base lg:text-lg">You seek <b className=' font-medium'>authentic, high-quality</b> experiences that feel  <b className=' font-medium'>one-of-a-kind.</b></li>
                      <li className="text-base lg:text-lg">You avoid mainstream recommendations in favour of <b className=' font-medium'>hidden gems.</b></li>
                      <li className="text-base lg:text-lg">If it’s not special, it’s not worth your time.</li>
                    </ul>
                  </div>
                </div>

                <div className='basis-[160px]'>
                  <img src="/assets/img/Macaw.png" alt="" className=' invert w-full' />
                </div>
              </div>

              <div className=' text-left flex'>
                <div className='basis-[calc(100%-180px)]'>
                  <h6 className=' text-[22px] lg:text-2xl xl:text-3xl font-medium mb-3 xl:mb-5'>Ostrich – The Hidden Gem Hunter</h6>
                  <div className='pl-2'>
                    <p className="text-base lg:text-lg mb-2.5">Your vibe:  <b className=' font-medium'>Off the beaten path.</b></p>
                    <ul className=' list-disc pl-[25px]'>
                      <li className="text-base lg:text-lg">You crave <b className=' font-medium'>unique, lesser-known experiences.</b></li>
                      <li className="text-base lg:text-lg">Your recommendations focus on <b className=' font-medium'>affordability without sacrificing authenticity.</b></li>
                      <li className="text-base lg:text-lg">You take pride in discovering places <b className=' font-medium'>before they become popular.</b></li>
                    </ul>
                  </div>
                </div>

                <div className='basis-[160px]'>
                  <img src="/assets/img/Ostrich.png" alt="" className=' invert w-full' />
                </div>
              </div>

              <div className=' text-left flex'>
                <div className='basis-[calc(100%-180px)]'>
                  <h6 className=' text-[22px] lg:text-2xl xl:text-3xl font-medium mb-3 xl:mb-5'>Toucan – The Effortless Planner</h6>
                  <div className='pl-2'>
                    <p className="text-base lg:text-lg mb-2.5">Your vibe:  <b className=' font-medium'>Smooth and seamless.</b></p>
                    <ul className=' list-disc pl-[25px]'>
                      <li className="text-base lg:text-lg">You like <b className=' font-medium'>stress-free</b> recommendations with <b className=' font-medium'>great service.</b></li>
                      <li className="text-base lg:text-lg">You prefer options that are <b className=' font-medium'>pre-vetted and easy to book.</b></li>
                      <li className="text-base lg:text-lg">Your ideal choice is one that blends <b className=' font-medium'>quality and convenience.</b></li>
                    </ul>
                  </div>
                </div>
                <div className='basis-[160px]'>
                  <img src="/assets/img/Toucan.png" alt="" className=' invert w-full' />
                </div>
              </div>

              <div className=' text-left flex'>
                <div className='basis-[calc(100%-180px)]'>
                  <h6 className=' text-[22px] lg:text-2xl xl:text-3xl font-medium mb-3 xl:mb-5'>Pigeon – The Smart Saver</h6>
                  <div className='pl-2'>
                    <p className="text-base lg:text-lg mb-2.5">Your vibe:  <b className=' font-medium'>Best deals, no compromises.</b></p>
                    <ul className=' list-disc pl-[25px]'>
                      <li className="text-base lg:text-lg">You find the <b className=' font-medium'>best bang for your buck</b> in every recommendation.</li>
                      <li className="text-base lg:text-lg">You believe in <b className=' font-medium'>smart spending without lowering standards.</b></li>
                      <li className="text-base lg:text-lg">If there’s a <b className=' font-medium'>hidden discount or an exclusive deal</b> , you know about it.</li>
                    </ul>
                  </div>
                </div>

                <div className='basis-[160px]'>
                  <img src="/assets/img/Pigeon.png" alt="" className=' invert w-full' />
                </div>
              </div>

              <div className=' text-left flex'>
                <div className='basis-[calc(100%-180px)]'>
                  <h6 className=' text-[22px] lg:text-2xl xl:text-3xl font-medium mb-3 xl:mb-5'>Rooster – The Local Guru</h6>
                  <div className='pl-2'>
                    <p className="text-base lg:text-lg mb-2.5">Your vibe:  <b className=' font-medium'>If it’s authentic, you know it.</b></p>
                    <ul className=' list-disc pl-[25px]'>
                      <li className="text-base lg:text-lg">You prefer <b className=' font-medium'>authentic, local experiences</b> over tourist traps.</li>
                      <li className="text-base lg:text-lg">You’re a <b className=' font-medium'>go-to person for genuine recommendations </b> in your area.</li>
                      <li className="text-base lg:text-lg">You know where to find the best <b className=' font-medium'>quality and cultural experiences.</b></li>
                    </ul>
                  </div>
                </div>

                <div className='basis-[160px]'>
                  <img src="/assets/img/Rooster.png" alt="" className=' invert w-full' />
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-[1055px] lg:max-w-[980px] xl:max-w-[1055px] w-full mx-auto text-center relative">
            <h4 className="__ldHead ">Why Your Bird Type Matters</h4>
            <p className="text-base lg:text-lg">Your discovery style shapes the way you find and trust recommendations. MySifarish tailors your experience by prioritising suggestions that align with how you explore, ensuring that every recommendation is <b className=' font-medium'>reliable, relevant, and personalised.</b></p>
          </div>

          <div className="max-w-[1055px] lg:max-w-[980px] xl:max-w-[1055px] w-full mx-auto text-center relative">
            <h4 className="__ldHead ">Unlock PersonaliSed Recommendations</h4>
            <p className="text-base lg:text-lg">Now that you know your bird, let MySifarish help you find curated experiences that match your style. Join us and start discovering the most trusted recommendations from your network and peers. Plus see what bird are based on your Sifarish activities.</p>
          </div>

          {/* <div className=" w-full mx-auto relative">
            <h4 className="__ldHead ">For internal reference:</h4>

            <table className='w-full mt-8'>
              <thead>
                <tr>
                  <th className='px-3 py-1 border font-semibold bg-[#00070f]'>Bird</th>
                  <th className='px-3 py-1 border font-semibold bg-[#00070f]'>Primary Priorities</th>
                  <th className='px-3 py-1 border font-semibold bg-[#00070f]'>Secondary Priorities</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='px-3 py-1 border font-medium bg-[#00070f] text-center'>🦅 Eagle</td>
                  <td className='px-3 py-1 border font-medium bg-[#00070f] text-center'>Service</td>
                  <td className='px-3 py-1 border font-medium bg-[#00070f] text-center'>Cost</td>
                </tr>

                <tr>
                  <td className='px-3 py-1 border font-medium bg-[#00070f] text-center'>🦆 Goose</td>
                  <td className='px-3 py-1 border font-medium bg-[#00070f] text-center'>Service</td>
                  <td className='px-3 py-1 border font-medium bg-[#00070f] text-center'>Experience</td>
                </tr>

                <tr>
                  <td className='px-3 py-1 border font-medium bg-[#00070f] text-center'>🦉 Owl</td>
                  <td className='px-3 py-1 border font-medium bg-[#00070f] text-center'>Service</td>
                  <td className='px-3 py-1 border font-medium bg-[#00070f] text-center'>Quality</td>
                </tr>

                <tr>
                  <td className='px-3 py-1 border font-medium bg-[#00070f] text-center'>🦚 Peacock</td>
                  <td className='px-3 py-1 border font-medium bg-[#00070f] text-center'>Cost</td>
                  <td className='px-3 py-1 border font-medium bg-[#00070f] text-center'>Service</td>
                </tr>

                <tr>
                  <td className='px-3 py-1 border font-medium bg-[#00070f] text-center'>🦩 Flamingo</td>
                  <td className='px-3 py-1 border font-medium bg-[#00070f] text-center'>Experience</td>
                  <td className='px-3 py-1 border font-medium bg-[#00070f] text-center'>Service</td>
                </tr>

                <tr>
                  <td className='px-3 py-1 border font-medium bg-[#00070f] text-center'>🐧 Penguin</td>
                  <td className='px-3 py-1 border font-medium bg-[#00070f] text-center'>Experience</td>
                  <td className='px-3 py-1 border font-medium bg-[#00070f] text-center'>Cost</td>
                </tr>

                <tr>
                  <td className='px-3 py-1 border font-medium bg-[#00070f] text-center'>🦜 Macaw</td>
                  <td className='px-3 py-1 border font-medium bg-[#00070f] text-center'>Experience</td>
                  <td className='px-3 py-1 border font-medium bg-[#00070f] text-center'>Quality</td>
                </tr>

                <tr>
                  <td className='px-3 py-1 border font-medium bg-[#00070f] text-center'>🦤 Ostrich</td>
                  <td className='px-3 py-1 border font-medium bg-[#00070f] text-center'>Cost</td>
                  <td className='px-3 py-1 border font-medium bg-[#00070f] text-center'>Experience</td>
                </tr>

                <tr>
                  <td className='px-3 py-1 border font-medium bg-[#00070f] text-center'>🦢 Crane</td>
                  <td className='px-3 py-1 border font-medium bg-[#00070f] text-center'>Cost</td>
                  <td className='px-3 py-1 border font-medium bg-[#00070f] text-center'>Quality</td>
                </tr>

                <tr>
                  <td className='px-3 py-1 border font-medium bg-[#00070f] text-center'>🦩 Toucan</td>
                  <td className='px-3 py-1 border font-medium bg-[#00070f] text-center'>Quality</td>
                  <td className='px-3 py-1 border font-medium bg-[#00070f] text-center'>Service</td>
                </tr>

                <tr>
                  <td className='px-3 py-1 border font-medium bg-[#00070f] text-center'>🐦 Pigeon</td>
                  <td className='px-3 py-1 border font-medium bg-[#00070f] text-center'>Quality</td>
                  <td className='px-3 py-1 border font-medium bg-[#00070f] text-center'>Cost</td>
                </tr>

                <tr>
                  <td className='px-3 py-1 border font-medium bg-[#00070f] text-center'>🐓 Rooster</td>
                  <td className='px-3 py-1 border font-medium bg-[#00070f] text-center'>Quality</td>
                  <td className='px-3 py-1 border font-medium bg-[#00070f] text-center'>Experience</td>
                </tr>
              </tbody>
            </table>
          </div> */}
        </div>
      </section>
    </>
  )
}

export default KYB