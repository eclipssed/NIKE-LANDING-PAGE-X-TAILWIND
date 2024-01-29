import React from 'react'
import { reviews } from '../constants'
import ReviewsCard from '../components/ReviewsCard'

const CustomerReviews = () => {
  return (
    <section className='max-container'>
      <h3 className='font-palanquin text-center text-4xl font-bold'>
        What Our?
        <span className='text-coral-red '> Customers </span>
        Say?
      </h3>
      <p className='info-text m-auto max-w-lg text-center mt-4'>Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>
      <div className='mt-24 justify-evenly flex flex-1 items-center max-lg:flex-col gap-14'>
        {reviews.map((review) => (
          <ReviewsCard key={review.customerName} {...review} />
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews