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
        <>
            {data && 
                <div className='max-w-screen-2xl mx-auto py-[5rem] px-4 sm:px-6 lg:px-16'>
                    <div className="shadow-2xl rounded-lg w-[400px] bg-slate-800">
                        <div className="px-8 pt-4 pb-1 font-bold text-white">{data.meals[0].strMeal}</div>
                        <div className="px-8 pb-2 font-normal text-slate-200">{data.meals[0].strCategory}</div>
                        <img src={data.meals[0].strMealThumb} alt={data.meals[0].strMeal} className="w-full h-56 object-cover" />
                        <div className="px-8 pt-6 pb-8 font-normal text-white text-justify">
                            Instructions:
                            <br />
                            <br />
                            {data.meals[0].strInstructions}
                        </div>
                        <div className="border-t-2 border-t-slate-50 px-8 pt-6 pb-8">
                            <a href={data.meals[0].strYoutube} className="hover:text-yellow-200 text-slate-200">Click Me</a>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default Homepage;