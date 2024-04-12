import React from 'react'
import getAxios from './getAxios';
import Card from './components/Card';
function Temp() {
    const { data, error, loading } = getAxios('http://localhost:3000/trial');
  return (
    <>
    {loading && <h1>Loading...</h1>}
      {error && <h1>Something went wrong</h1>}
      <div className="container">
      <div className="row d-flex justify-content-around">
        {data.map((item)=>(
          <Card key={item.id} {...item} />
          
        ))}

      </div>
    </div>
    </>
  )
}

export default Temp
