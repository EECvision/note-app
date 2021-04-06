import React from 'react';


const WithSpinner = WrappedComponent =>{
    const Spinner =({loading, ...otherProps})=>{

        return(
            <div className="w-full">
                {
                    loading 
                    ? 
                    <div style={{background: "rbg(0, 0, 0, 0.9)"}} className="absolute left-0 top-0 w-screen h-screen flex items-center justify-center">
                         <i className="text-blue-500 text-4xl font-bold fas fa-circle-notch fa-spin"></i>
                    </div>
                    :
                    <WrappedComponent {...otherProps} />
                }
            </div>
        )
    }
    return Spinner
}

export default WithSpinner;