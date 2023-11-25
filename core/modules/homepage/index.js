import React from 'react';

const Homepage = () => {
    const [data, setData] = React.useState(null);
    const [statusFetch, setStatusFetch] = React.useState(false);

    setTimeout(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata', {
            header: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((err) => console.log(err));
    }, 3000)

    React.useEffect(() => {
        if (data) setStatusFetch(true);
    }, [data]);

    return (
        <div className='max-w-screen-2xl mx-auto py-[5rem] px-4 sm:px-6 lg:px-16'>
            <span className='text-3xl font-bold text-neutral-300'>
                Selamat datang di website IT Developer Academy 2023
            </span>
            <br />
            <span className='text-3xl font-bold text-neutral-300'>
                {statusFetch ? `Username: ${data.meals[0].strMeal}` : 'Guest'}
            </span>
            <br />
            <span className='text-3xl font-bold text-neutral-300'>
                {data ? data.meals[0].strMeal : 'Loading...'}
            </span>
        </div>
    );
};

export default Homepage;