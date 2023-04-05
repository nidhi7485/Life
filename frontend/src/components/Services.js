import React from 'react'

const Services = () => {
  return (
    <section className='section services' id='services'>
      {/* <!-- section title --> */}
      <title subTitle='services'>services</title>

      {/* <!-- end of section title --> */}
      <div className='service-center section-services'>
        <article className='service'>
          <div className='service-info'>
            <h4 className='service-title'>our mission</h4>
            <p className='service-text'>
              Now happiness will not depend on age.our mission is to spread
              happiness to everyhome
            </p>
          </div>
        </article>
        <article className='service'>
          <div className='service-info'>
            <h4 className='service-title'>pick up</h4>
            <p className='service-text'>
              age can not be barrier to share the happiness.we will provide pick
              up services who is not able to move
            </p>
          </div>
        </article>
        <article className='service'>
          <div className='service-info'>
            <h4 className='service-title'>call services(24*7)</h4>
            <p className='service-text'>
              share your problem with us, and we will try to find problem as
              soon as possible
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Services
