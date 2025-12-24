import '../style.css'

export const Loading = () => {

    return(
        <div className='loading'>
            <div className='loader'>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <h4 className='text-md sm:text-xl text-white font-CLEAT'>Now Loading...</h4>
            </div>
        </div>
    )
}

