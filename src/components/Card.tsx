const Card = () => {
    return (

        <>
            <div className="w-60 h-82 border-none rounded-2xl shadow bg-customDark dark:border-gray-700 mt-36 ml-16">
                <div className='flex justify-center items-center'>
                    <img className='h-40 w-40 rounded-full transform -translate-y-12' src="../../src/assets/plates.jpg" alt="food image" />
                </div>
                <div className="px-10 pb-5  flex flex-col items-center">
                    <a href="#">
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">Spicy seasoned seafood noodles</h5>
                    </a>

                    <div className="flex items-center">
                        <span className="text-xl font-bold text-gray-900 dark:text-white mt-3">$ 2.29</span>
                    </div>
                    <div className="flex items-center">
                        <span className="text-sm font-medium text-gray-900 dark:text-gray-400 mt-3">20 Bowls available</span>
                    </div>
                </div>
            </div>
        </>


    )
}

export default Card