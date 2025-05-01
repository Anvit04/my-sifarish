'use client'

import { useState } from 'react'

const EmailContact = () => {
  const [userEmail, setUserEmail] = useState('')
  const [error, setError] = useState('')

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleContactClick = () => {
    if (!userEmail || !validateEmail(userEmail)) {
      setError('Please enter a valid email address.')
      return
    }

    setError('') // Clear any existing error

    const subject = encodeURIComponent('Inquiry from website')
    const body = encodeURIComponent(
      `Hi MySifarish Support Team,

I’m reaching out through your website's contact us.

Please get back to me at your earliest convenience.

Thank you!
Email: ${userEmail}`
    )

    const mailtoLink = `mailto:support@mysifarish.in?subject=${subject}&body=${body}`
    window.location.href = mailtoLink
  }

  return (
    <div className="flex flex-col gap-2 mt-6 lg:mt-8">
      <div className="flex gap-4 flex-wrap">
        <input
          type="email"
          className={`__nwsInput ${error ? 'border-red-500' : ''}`}
          placeholder="pat@shuffle.dev"
          value={userEmail}
          onChange={(e) => {
            setUserEmail(e.target.value)
            setError('') // clear error as user types
          }}
        />
        <button className="_joinBtn" onClick={handleContactClick}>
          Contact Us
        </button>
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  )
}

export default EmailContact
