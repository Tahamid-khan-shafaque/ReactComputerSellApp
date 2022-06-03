import React from 'react';
import Card from './Card';
import Data from './Apidata';

const About = () => {
  return (
  <>
  
  <div className="container">
      <div className="row my-4 d-flex align-items-center">
          <div className="col-xs-12 col-md-6">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et consectetur sunt pariatur accusantium optio sint quod consequuntur dolorem ad repellat.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo officiis vero qui quis, voluptate temporibus fugit eveniet, voluptatem optio impedit aut. Molestias obcaecati aspernatur veritatis!</p>
          </div>
          <div className="col-xs-12 col-md-6">
              <img src="./img/img1.jpg" className='img' alt="" />
              </div>
      </div>
  </div>

{/* meet our team section */}
<h1 className="text-center text-info">Meet our team</h1>
<div className="container">
        <div className="row">
            {Data.map((values)=>{
                return (
                    <>
                    <Card title={values.title} image={values.image} />
                    </>
                )
            })}
        
        
       
        </div>
      </div>
  </>
  )
}

export default About