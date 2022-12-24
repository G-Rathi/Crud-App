import React from 'react'
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
    const navigate = useNavigate()

    const handleBack = () => navigate(-1)

    return (
        <div className='container'>
            <center>
                <h1>PageNotFound</h1>
                <div>
                    <button type="submit" className="btn btn-dark ms-5" onClick={handleBack} >Back</button>
                </div>
            </center>
        </div>
    )
}

export default PageNotFound