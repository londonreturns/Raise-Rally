import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import getAxios from '../hooks/getAxios';
function Cat({ categories }) {
    const { cat } = useParams();
    const { data, error, loading } = getAxios(`http://localhost:3000/categories/${cat}`);
    const navigate = useNavigate();

    useEffect(() => {
        // navigate to error page if not found
        if (!categories.includes(cat)) {
            navigate('*');
        }
    }, [cat, categories, navigate]); // every time the category change the useffect is trigered

    // Render the component id not error
    return (
        <>
        <div className='ps-3'>
           <nav aria-label="breadcrumb ">
  <ol className="breadcrumb">
    <li className="breadcrumb-item fs-6  "><Link className='text-decoration-none' to="/">Home</Link></li>
    <li className="breadcrumb-item active fs-6  text-capitalize" aria-current="page">{cat}</li>
  </ol>
</nav>
</div>


            <div className="row gx-0">
                            {data && data.map((item) => (
                                <Card key={item.id} {...item} />
                            ))}
             </div>
        </>
    );
}

export default Cat;
