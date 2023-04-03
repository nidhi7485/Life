import React, { useState } from 'react'
import axios from 'axios'
import bg from '../assets/bg.jpg'
// import { useNavigate } from 'react-router-dom'
const Home = () => {
  const [name, setName] = useState('n')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState(0)

  const submitHandler = async (e) => {
    e.preventDefault()
    console.log(e)
    try {
      await axios.post('http://localhost:5000/api/v1/user/create', {
        name,
        email,
        address,
        phone,
      })
      setName('')
      setEmail('')
      setAddress('')
      setPhone('')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <section className='section'>
        <div className='about'>
          <div className='about-img'>
            <img src={bg} alt='image' className='about-photo' />
          </div>
          <div className='about-form'>
            <article className='contact-form'>
              <h3>join with us</h3>
              <form onSubmit={submitHandler}>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='name'
                    className='form-control'
                    name='name'
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    type='email'
                    placeholder='email'
                    className='form-control'
                    name='email'
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type='text'
                    placeholder='address'
                    className='form-control'
                    name='address'
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <input
                    type='number'
                    placeholder='Phone'
                    className='form-control'
                    name='phone'
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <button type='submit' className='submit-btn btn'>
                  with smile
                </button>
              </form>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
