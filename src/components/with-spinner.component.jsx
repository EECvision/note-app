import React from 'react';


const WithSpinner = WrappedComponent =>{
    const Spinner =({loading, ...otherProps})=>{

        return(
            <div>
                {
                    loading 
                    ? 
                    <div className="text-blue-500 text-4xl font-bold">Loading...</div>
                    :
                    <WrappedComponent {...otherProps} />
                }
            </div>
        )
    }
    return Spinner
}

export default WithSpinner;