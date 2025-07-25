import React from 'react'


const FAQ = () => {
  return (
    <>
      <section className=" __mainContainer pt-[50px] pb-[80px] lg:pt-[150px] lg:pb-[150px] relative z-[1]">
        <div className='flex flex-col gap-26 bg-white/3 backdrop-blur-xs px-6 py-6 pb-10 rounded-lg'>
          <div className="max-w-[1055px] lg:max-w-[980px] xl:max-w-[1055px] w-full mx-auto text-center relative">
            <h4 className="__ldHead ">FAQs</h4>

            <div className='text-left mt-10 flex flex-col gap-3.5'>
              <div className="collapse collapse-arrow  border border-base-300">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title font-medium text-base lg:text-lg">1. What is a ‘Sifarish’?</div>
                <div className="collapse-content ">A <b className=' font-medium'>Sifarish</b> is a trusted recommendation—the kind you'd expect from someone who knows your vibe. Whether it’s a place to visit, food to try, a show to binge, or a service to book—each <b className=' font-medium'>Sifarish</b> is based on real experiences, not anonymous reviews.</div>
              </div>

              <div className="collapse collapse-arrow  border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-medium text-base lg:text-lg">2. What is a Bird Category?</div>
                <div className="collapse-content ">

                  Everyone makes choices differently. At <b className='font-medium'>MySifarish</b>, we reflect those preferences in fun Bird Archetypes—like <b className='font-medium'>Eagle, Owl, Peacock, and more.</b> Your Bird Category is based on your interaction patterns and helps surface recommendations from others who think like you. You can view your Bird Category anytime in your Profile Page.
                </div>
              </div>

              <div className="collapse collapse-arrow  border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-medium text-base lg:text-lg">3. What is the Feed?</div>
                <div className="collapse-content ">The Feed is your main discovery screen where you explore <b className='font-medium'>Sifarish</b> recommended by people you trust—or the wider community. <br />
                  You can filter your Feed by:
                  <ul className=' my-3.5 pl-6 list-decimal'>
                    <li><b className='font-medium'>Location – </b> Discover Sifarish near you</li>
                    <li><b className='font-medium'>Category –</b> Stay, Explore, Content, or Services</li>
                    <li>
                      <b className='font-medium'>Circle of Trust –</b> Choose to see Sifarish from: <br />
                      <ul className=' my-1 mb-3.5 pl-6 list-disc'>
                        <li><b className='font-medium'>Your Contacts</b></li>
                        <li><b className='font-medium'>Your Bird Community</b></li>
                        <li><b className='font-medium'>All Birds in the app</b></li>
                      </ul>
                    </li>
                  </ul>
                  Tap on a <b className='font-medium'>Sifarish</b> card to see how many people recommended it. No reviews, just signals of trust. <br />
                  <ul className=' my-3.5 pl-6 list-decimal'>
                    <li><b className='font-medium'>It’s My Vibe – </b> You like it. It gets saved.</li>
                    <li><b className='font-medium'>Not My Vibe – </b> Not for you, but still stored for reference.</li>
                  </ul>
                </div>
              </div>

              <div className="collapse collapse-arrow  border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-medium text-base lg:text-lg">4. What does ‘Saved’ mean?</div>
                <div className="collapse-content ">Every time you react to a <b className='font-medium'>Sifarish—whether</b> you vibe with it or not—it’s stored in your Saved Sifarish list. Access it by tapping the <b className='font-medium'>MySifarish</b> logo—this toggles your screen from the Feed to your Saved view.<br />
                  Saved Sifarish are organized:
                  <ul className=' my-3.5 pl-6 list-decimal'>
                    <li><b className='font-medium'>First by Location</b></li>
                    <li><b className='font-medium'>Then by Category</b></li>
                    <li><b className='font-medium'>Along with your vibe reaction</b></li>
                  </ul>
                </div>
              </div>

              <div className="collapse collapse-arrow  border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-medium text-base lg:text-lg">5. How do I interact with the app?</div>
                <div className="collapse-content ">Here’s what you can do: <br />
                  <div className='mt-1.5'><b className='font-medium '>A. React with Vibe</b>
                    <ul className='my-1.5 pl-6 list-decimal'>
                      <li><b className='font-medium'>It’s My Vibe – </b> Saves the Sifarish and adds to your score</li>
                      <li><b className='font-medium'>Not My Vibe – </b> Still gets stored for future reference</li>
                    </ul>
                  </div>

                  <div className='mt-2.5'><b className='font-medium'>B. Forward a Sifarish – </b> Share a Sifarish with any of your contacts in-app</div>

                  <div className='mt-2.5'><b className='font-medium'>C. Ask a Sifarish – </b> Not sure where to go or what to watch? Ask your contacts directly within the app</div>

                  <div className='mt-2.5'><b className='font-medium'>D. Create a Sifarish – </b> Tap the ‘+’ button. Search to avoid duplicates—if it exists, react; if not, create a new one</div>
                </div>
              </div>

              <div className="collapse collapse-arrow  border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-medium text-base lg:text-lg">6. What categories can I create a Sifarish for?</div>
                <div className="collapse-content ">You can now recommend across all four core categories: <br />
                  <ul className=' my-1 mb-3.5 pl-6 list-disc'>
                    <li><div className='mt-1.5'><b className='font-medium '>Stay – </b> Hotels, homestays, resorts </div></li>
                    <li><div className='mt-2.5'><b className='font-medium'>Explore – </b> Restaurants, bars, cafes, experiences</div></li>
                    <li><div className='mt-2.5'><b className='font-medium'>Content – </b> Movies, series, social content, digital picks</div></li>
                    <li><div className='mt-2.5'><b className='font-medium'>Services – </b> Personal, professional, wellness, healthcare, travel, and more</div></li>
                  </ul>
                </div>
              </div>

              <div className="collapse collapse-arrow  border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-medium text-base lg:text-lg">7. What is the Sifarish Score?</div>
                <div className="collapse-content ">Your Sifarish Score tracks your contributions and interactions: <br />

                  <ul className=' my-1 mb-3.5 pl-6 list-disc'>
                    <li><div className='mt-1.5'><b className='font-medium '>+0.25 </b> for every Sifarish you create </div></li>
                    <li><div className='mt-2.5'><b className='font-medium'>+0.25 </b> for every Sifarish you forward</div></li>
                    <li><div className='mt-2.5'><b className='font-medium'>+0.5 </b> when someone else reacts (vibes) to your Sifarish</div></li>
                  </ul>
                </div>
              </div>

              <div className="collapse collapse-arrow  border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-medium text-base lg:text-lg">8. What is the Leaderboard?</div>
                <div className="collapse-content ">The Leaderboard is part of the Creator Program that celebrates the most trusted contributors. <br />
                  It’s based on your Sifarish Score and shows how you rank in the community. As your score grows, you earn: <br />

                  <ul className=' my-1 mb-3.5 pl-6 list-disc'>
                    <li><div className='mt-1.5'><b className='font-medium '>Badges and Milestones </b></div></li>
                    <li><div className='mt-2.5'><b className='font-medium'>Recognition as a Top Tastemaker </b></div></li>
                    <li><div className='mt-2.5'><b className='font-medium'>Future perks and feature unlocks </b></div></li>
                  </ul>
                </div>
              </div>

              <div className="collapse collapse-arrow  border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-medium text-base lg:text-lg">9. What is the Search Screen for?</div>
                <div className="collapse-content ">Use the Search screen to explore recommendations beyond your Feed. <br />
                  You can: <br />

                  <ul className=' my-1 mb-3.5 pl-6 list-disc'>
                    <li><div className='mt-1.5'><b className='font-medium'>Search by Keyword </b></div></li>
                    <li><div className='mt-2.5'><b className='font-medium'>Filter by Category </b></div></li>
                    <li><div className='mt-2.5'><b className='font-medium'>Discover trending or highly recommended Sifarish </b></div></li>
                  </ul>
                </div>
              </div>

              <div className="collapse collapse-arrow  border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-medium text-base lg:text-lg">10. What’s on the Profile Page?</div>
                <div className="collapse-content ">Your Profile Page is your personal dashboard. You can: <br />

                  <ul className=' my-1 mb-3.5 pl-6 list-disc'>
                    <li><div className='mt-1.5'><b className='font-medium '>View your Bird Category </b></div></li>
                    <li><div className='mt-2.5'><b className='font-medium'>Check your Creator & Sifarish Score</b></div></li>
                    <li><div className='mt-2.5'><b className='font-medium'>Track your badge milestones </b></div></li>
                    <li><div className='mt-2.5'><b className='font-medium'>Provide feedback to help improve the app </b></div></li>
                    <li><div className='mt-2.5'><b className='font-medium'>Download your data anytime, for transparency and ownership </b></div></li>
                  </ul>
                </div>
              </div>

              <div className="collapse collapse-arrow  border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-medium text-base lg:text-lg">11. Is MySifarish only for local recommendations?</div>
                <div className="collapse-content ">Nope! While you’ll often see nearby places or services in your Feed, <b className='font-medium '>MySifarish</b> is location-agnostic—you can explore, create, and share recommendations across any city or country.
                </div>
              </div>

              <div className="collapse collapse-arrow  border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-medium text-base lg:text-lg">12. Can I update or delete a Sifarish I created?</div>
                <div className="collapse-content ">Yes. If you created a  <b className='font-medium '>Sifarish</b> and want to edit or delete it, head to the Saved screen, find your entry, and manage it from there.
                </div>
              </div>

              <div className="collapse collapse-arrow  border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-medium text-base lg:text-lg">13. Can I control who sees the Sifarish I create?</div>
                <div className="collapse-content ">Yes. When creating a Sifarish, you can set its visibility as: <br />

                  <ul className=' my-1 mb-3.5 pl-6 list-disc'>
                    <li><div className='mt-1.5'><b className='font-medium '>Public – </b> visible to your Circle of Trust and community</div></li>
                    <li><div className='mt-2.5'><b className='font-medium'>Private – </b> visible only to you</div></li>
                  </ul>
                </div>
              </div>

              <div className="collapse collapse-arrow  border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-medium text-base lg:text-lg">14. What if my Feed looks empty or blank?</div>
                <div className="collapse-content ">This can happen if you're new or haven’t followed others yet. Here's how to power up your Feed: <br />

                  <ul className=' my-1 mb-3.5 pl-6 list-disc'>
                    <li><div className='mt-1.5'><b className='font-medium '>React to some Sifarish (It’s My Vibe / Not My Vibe)</b></div></li>
                    <li><div className='mt-2.5'><b className='font-medium'>Ask Sifarish from contacts</b></div></li>
                    <li><div className='mt-2.5'><b className='font-medium'>Create a few recommendations</b></div></li>
                    <li><div className='mt-2.5'><b className='font-medium'>Invite trusted friends to join the app</b></div></li>
                  </ul>
                </div>
              </div>

              <div className="collapse collapse-arrow  border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-medium text-base lg:text-lg">15. Can I use MySifarish without adding friends?</div>
                <div className="collapse-content ">Yes. The app works via Bird Community and public Sifarish, even if you haven’t added contacts. That said, your Circle of Trust (contacts) makes it more powerful and personalized.
                </div>
              </div>

              <div className="collapse collapse-arrow  border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-medium text-base lg:text-lg">16. What happens if I tap the wrong vibe?</div>
                <div className="collapse-content ">You can undo or change your reaction anytime by tapping again or visiting the Sifarish in your Saved screen.
                </div>
              </div>

              <div className="collapse collapse-arrow  border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-medium text-base lg:text-lg">17. How does MySifarish keep my data safe?</div>
                <div className="collapse-content ">Your data is stored securely and never shared or sold. You always control your information.<br />
                  From your Profile Page, you can:
                  <ul className=' my-1 mb-3.5 pl-6 list-disc'>
                    <li><div className='mt-1.5'><b className='font-medium '>Download all your data</b></div></li>
                    <li><div className='mt-2.5'><b className='font-medium'>Submit feedback</b></div></li>
                    <li><div className='mt-2.5'><b className='font-medium'>Delete your account if needed</b></div></li>
                  </ul>
                </div>
              </div>

              <p className='mt-4'>For any more queries , please drop in a note to support@mysifarish.in</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FAQ