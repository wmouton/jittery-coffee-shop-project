import React from 'react'
import { Link } from 'gatsby'
import Title from '../Globals/Title'

const Info = () => {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="Our Story"></Title>
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
              aspernatur vitae enim unde deleniti cupiditate, debitis molestiae
              doloribus accusantium, voluptatibus id hic aliquam! Cumque
              voluptas alias natus culpa fuga laudantium mollitia pariatur
              corrupti quam explicabo placeat, ipsam nesciunt amet fugit
              inventore nostrum perspiciatis. Ipsam, saepe accusamus, totam
              officiis distinctio autem tempore asperiores alias quia quibusdam
              aspernatur. Amet facere maiores velit modi ullam minima iusto
              repellendus beatae, aperiam id consectetur! Provident facere
              maiores amet non, vero eius sunt minus ratione voluptatem!
            </p>
            <Link to="/about/">
              <button className="btn text-uppercase btn-yellow">about</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info
