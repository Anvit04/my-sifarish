import React from 'react'


const FAQ = () => {
  return (
    <>
      <section className=" __mainContainer pt-[50px] pb-[80px] lg:pt-[150px] lg:pb-[150px] relative z-[1]">
        <div className='flex flex-col gap-26'>
          <div className="max-w-[1055px] lg:max-w-[980px] xl:max-w-[1055px] w-full mx-auto text-center relative">
            <h4 className="__ldHead ">FAQs</h4>

            <div className='text-left mt-10 flex flex-col gap-3.5'>
              <div className="collapse collapse-arrow  border border-base-300">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title font-medium text-base lg:text-lg">1. What is a ‘Sifarish’?</div>
                <div className="collapse-content ">A <b className=' font-medium'>Sifarish</b> is a trusted recommendation, just like the ones you get from close friends, family, or like-minded communities. These are not generic reviews but <b className='font-medium'>personalised suggestions</b>  based on real experiences, making it easier for you to discover places, experiences, or content that truly match your interests.</div>
              </div>

              <div className="collapse collapse-arrow  border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-medium text-base lg:text-lg">2. What is a Bird Category?</div>
                <div className="collapse-content ">Your choices reflect your personality and preferences. Every time you choose a <b className='font-medium'>restaurant, hotel, or experience</b>, certain factors naturally guide your decisions—such as outstanding service, great value, top-tier quality, or unique experiences. <br /> <br />
                  At <b className='font-medium'>MySifarish</b>, we’ve gamified this into a fun concept called the <b className='font-medium'>Bird Category</b>. Based on your selections, you’ll be assigned a <b className='font-medium'>Bird Personality</b> that helps match you with <b className='font-medium'>relevant recommendations.</b> <br /><br />
                  Your <b className='font-medium'>Sifarish Board</b> will primarily feature recommendations from people with similar preferences (your Bird Category). This ensures that your feed is filled with experiences you’re more likely to enjoy! <br /><br />Check out your current bird category on your profile page. To know more about your bird category, click here.</div>
              </div>

              <div className="collapse collapse-arrow  border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-medium text-base lg:text-lg">3. What is a Sifarish Board?</div>
                <div className="collapse-content ">The <b className='font-medium'>Sifarish Board</b> is your personalized feed of recommendations tailored to your Bird Category. It works like a dynamic suggestion board where you can:
                  <ul className=' my-3.5 pl-6 list-disc'>
                    <li><b className='font-medium'>Scroll</b> through recommendations based on your interests.</li>
                    <li><b className='font-medium'>Like</b> or <b className='font-medium'>Dislike</b> a Sifarish to save it to MySifarish as ‘recommended’ or ‘not recommended’.</li>
                    <li><b className='font-medium'>Tap on a Sifarish</b> to explore more details, including why it was recommended, by whom, and any additional insights.</li>
                  </ul>
                  The more you interact with your <b className='font-medium'>Sifarish Board</b>, the better it becomes at surfacing recommendations that match your taste.
                </div>
              </div>

              <div className="collapse collapse-arrow  border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-medium text-base lg:text-lg">4. What is MySifarish?</div>
                <div className="collapse-content "><b className='font-medium'>MySifarish</b> is your <b className='font-medium'>personalised library</b> of saved recommendations. Every Sifarish you like or dislike gets stored here, categorised by:
                  <ul className=' my-3.5 pl-6 list-disc'>
                    <li><b className='font-medium'>Location</b> – So you can find experiences near you.</li>
                    <li><b className='font-medium'>Type of Sifarish</b> – Whether it’s a restaurant, hotel, experience, or content recommendation.</li>
                  </ul>
                  Think of <b className='font-medium'>MySifarish</b> as your <b className='font-medium'>bucket list</b>, where you can revisit saved recommendations whenever you need inspiration for your next outing or experience.
                </div>
              </div>

              <div className="collapse collapse-arrow  border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-medium text-base lg:text-lg">5. How do I interact with the app?</div>
                <div className="collapse-content ">There are multiple ways to engage with <b className='font-medium'>MySifarish:</b>
                  <div className='mt-4'>
                    <p className='text-base lg:text-lg font-medium'>A. Like/Dislike</p>
                    <p className='mt-1.5'>Every Sifarish has like and dislike buttons.</p>
                    <ul className=' my-3.5 pl-6 list-disc'>
                      <li><b className='font-medium'>Liking</b> a Sifarish saves it to <b className='font-medium'>MySifarish</b>, allowing you to revisit it later.</li>
                      <li><b className='font-medium'>Disliking</b> a Sifarish also saves it to your MySifarish but as ‘not recommended’.</li>
                    </ul>
                  </div>

                  <div className='mt-4'>
                    <p className='text-base lg:text-lg font-medium'>B. Forward a Sifarish</p>
                    <p className='mt-1.5'>Loved an experience? Easily <b className='font-medium'>share it</b> with your friends on the app by creating a Sifarish or forwarding existing Sifarish. This makes it simple to exchange recommendations without having to text or explain them separately.</p>
                  </div>

                  <div className='mt-4'>
                    <p className='text-base lg:text-lg font-medium'>C. Ask Sifarish</p>
                    <p className='mt-1.5'>Not sure where to go or what to do? <b className='font-medium'>AskSifarish</b> allows you to request recommendations from your contacts who are on the app.</p>
                    <ul className=' my-3.5 pl-6 list-disc'>
                      <li>Example: If you’re traveling to <b className='font-medium'>Goa</b> and need restaurant suggestions, you can ask your <b className='font-medium'>Goa-based friends</b> on the app for a direct recommendation!</li>
                    </ul>
                  </div>

                  <div className='mt-4'>
                    <p className='text-base lg:text-lg font-medium'>D. Create a Sifarish</p>
                    <p className='mt-1.5'>Want to recommend something? Click the <b className='font-medium'>‘+’ button</b> on the home screen to create a Sifarish.</p>
                    <ul className=' my-3.5 pl-6 list-disc'>
                      <li>If the recommendation <b className='font-medium'>already exists</b>, you’ll see it listed and can <b className='font-medium'>like/dislike</b> it to save or remove it.</li>
                      <li>If it <b className='font-medium'>doesn’t exist</b>, you can add it by selecting a <b className='font-medium'>category</b> and searching for relevant keywords.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="collapse collapse-arrow  border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-medium text-base lg:text-lg">6. What categories can I create a Sifarish for?</div>
                <div className="collapse-content ">Currently, you can create recommendations for <b className='font-medium'>four main categories:</b>
                  <div className='mt-4'>
                    <p className='text-base lg:text-lg font-medium'>A. Stay</p>
                    <ul className=' my-3.5 pl-6 list-disc'>
                      <li>Hotels, resorts, homestays, or any place where you’ve stayed and had a great (or bad) experience.</li>
                    </ul>
                  </div>

                  <div className='mt-4'>
                    <p className='text-base lg:text-lg font-medium'>B. Explore</p>
                    <ul className=' my-3.5 pl-6 list-disc'>
                      <li>Includes <b className='font-medium'>restaurants, bars, cafes, events, travel experiences</b>, and an ‘other’ category for anything that doesn’t fit the above.</li>
                    </ul>
                  </div>

                  <div className='mt-4'>
                    <p className='text-base lg:text-lg font-medium'>C. Content</p>
                    <ul className=' my-3.5 pl-6 list-disc'>
                      <li>Recommendations for <b className='font-medium'>Movies, TV shows, Social media content, YouTube videos</b> and any digital content worth sharing.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="collapse collapse-arrow  border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-medium text-base lg:text-lg">7. What are some useful shortcuts in the app?</div>
                <div className="collapse-content ">
                  <div className='mt-4'>
                    <p className='text-base lg:text-lg font-medium'>A. Social Button (Top Left Corner)</p>
                    <ul className=' my-3.5 pl-6 list-disc'>
                      <li>Quickly create <b className='font-medium'>social content recommendations.</b></li>
                      <li>While it defaults to <b className='font-medium'>Social Content</b>, you can change the category if needed.</li>
                    </ul>
                  </div>

                  <div className='mt-4'>
                    <p className='text-base lg:text-lg font-medium'>B. Profile Button (Top Right Corner)</p>
                    <ul className=' my-3.5 pl-6 list-disc'>
                      <li>Tap your <b className='font-medium'>profile picture</b> to access your <b className='font-medium'>dashboard, settings, to know your creator score and even know your bird category.</b> </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="collapse collapse-arrow  border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-medium text-base lg:text-lg">8. What is the Creator Score?</div>
                <div className="collapse-content ">
                  <div className='mt-4'>
                    <p className='text-base lg:text-lg font-medium'>A. Social Button (Top Left Corner)</p>
                    <ul className=' my-3.5 pl-6 list-disc'>
                      <li>Quickly create <b className='font-medium'>social content recommendations.</b></li>
                      <li>While it defaults to <b className='font-medium'>Social Content</b>, you can change the category if needed.</li>
                    </ul>
                  </div>

                  <div className='mt-4'>
                    <p className='text-base lg:text-lg font-medium'>B. Profile Button (Top Right Corner)</p>
                    <p className='mt-1.5'>The <b className='font-medium'>Creator Score</b> is a <b className='font-medium'>measure of your contribution</b> to the MySifarish community. It appears on your <b className='font-medium'>profile page</b> and increases based on the number of <b className='font-medium'>Sifarish you create.</b></p>
                    <ul className=' my-3.5 pl-6 list-disc'>
                      <li>The more recommendations you add, the higher your <b className='font-medium'>Creator Score.</b></li>
                      <li>A higher score helps you <b className='font-medium'>stand out as a trusted voice</b> in the community.</li>
                      <li>It also unlocks <b className='font-medium'>rewards and exclusive features</b> in the future! Stay tuned.</li>
                    </ul>
                    <p>Want to increase your <b className='font-medium'>Creator Score?</b> Start sharing your recommendations today!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FAQ