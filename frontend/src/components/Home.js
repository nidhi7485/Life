import React from 'react'
import bg from '../assets/bg.jpg'
const Home = () => {
  return (
    <>
      <section className='section'>
        <div className='about'>
          <div className='about-img'>
            <img src={bg} alt='image' className='about-photo' />
          </div>
          <div className='about-form'>
            <article class='contact-form'>
              <h3>join with us</h3>
              <form>
                <div class='form-group'>
                  <input
                    type='text'
                    placeholder='name'
                    class='form-control'
                    name='name'
                  />
                  <input
                    type='email'
                    placeholder='email'
                    class='form-control'
                    name='email'
                  />
                  <input
                    type='text'
                    placeholder='address'
                    class='form-control'
                    name='address'
                  />
                  <input
                    type='number'
                    placeholder='number'
                    class='form-control'
                    name='number'
                  />
                </div>

                <button type='submit' class='submit-btn btn'>
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
