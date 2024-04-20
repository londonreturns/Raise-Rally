import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import getAxios from '../hooks/getAxios';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
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
            <Header />
            <Navbar />
            <h2>Hello, I am {cat}</h2>
            
            <div className="row gx-0">
                            {data && data.map((item) => (
                                <Card key={item.id} {...item} />
                            ))}
             </div>
            <Footer/>
        </>
    );
}

export default Cat;
