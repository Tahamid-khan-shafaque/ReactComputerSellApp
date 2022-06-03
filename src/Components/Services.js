import React from 'react';
import Card from './Card';
import Data from './Apidata';

const Services = () => {
  return (
    <div>
        <h1 className="text-center text-info">Our services</h1>
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
    </div>
  )
}

export default Services