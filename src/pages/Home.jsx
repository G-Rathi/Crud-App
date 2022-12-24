import React from 'react'
import styled from 'styled-components';
import Navbar from '../components/Navbar'
import { mobile } from '../Responsive';


const Container = styled.div`
            background:  linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), url("https://wallpaperaccess.com/full/4893798.jpg") center;
            background-size: cover;
            width:100%;
            height:100vh;
            ${mobile({ width: '100%', height: '100%' })}
            `;

const Home = () => {

    return (
        <Container>
            <Navbar />
            <div className='container pb-5'>
                <h1>
                    <p className='text-center mb-5'>This is a Crud Application</p>
                </h1>
                <h4>
                    <p >You must Register/Login to get full access on this application. </p>
                </h4>
                <h4>
                    <p >You can Create/Add user by clicking on 'Add User' buton or 'Create' link, both are available on Navbar. </p>
                </h4>
                <h4>
                    <p>You can Read/Check user list by clicking on 'Read' link in the Navbar. </p>
                </h4>
                <h4>
                    <p>Once you have clicked on 'Read' link, a 'Users List' will appear on Screen, You can 'Edit' user details and also 'Delete' user. </p>
                </h4>
                <h4>
                    <p>The User will be auto logout after 9 seconds.</p>
                </h4>
            </div>
        </Container>
    )
}

export default Home