import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import getAxios from '../getAxios';
import Card from '../components/Card';

function Cat() {
    const params=useParams();
    const { data, error, loading } = getAxios(`http://localhost:3000/categories/${params.cat}`);
  return (
    <>
    <Header/>
    <Navbar/>
    <h1>hello i am catogory {params.cat}</h1>
    <div className="container">
      <div className="row d-flex justify-content-around">
        {data.map((item)=>(
          <Card key={item.id} {...item} />
          
        ))}

      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Cat
