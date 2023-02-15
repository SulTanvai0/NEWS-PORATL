import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, seCategories] = useState([]);

    useEffect( ()=>{
        fetch('https://m-60-server.vercel.app/news-categories')
        .then(res => res.json())
        .then(data => seCategories(data))
    }, [])

    // console.log( categories)
    return (
        <div>
            <h4>All Categories</h4>

            <div>
                {
                    categories.map( category => <p key={category.id}>
                        <Link to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;