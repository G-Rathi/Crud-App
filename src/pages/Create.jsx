import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import { laptop, mobile, tablet } from '../Responsive'



const Container = styled.div`
        background:  linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), url("https://wallpaperaccess.com/full/4893798.jpg") center;
        background-size: cover;
        width:100vw;
        height:100vh;
        ${mobile({ marginBottom: '20px' })}
        `;
const FormSection = styled.div`
        ${mobile({ marginTop: '50px', marginBottom: '50px' })}
        ${tablet({ marginTop: '50px', marginBottom: '50px' })}
        ${laptop({ marginTop: '50px', marginBottom: '50px' })}
        `;



const Create = () => {
    const [name, setName] = useState()
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const navigate = useNavigate();

    const inputName = (e) => setName(e.target.value)
    const inputUsername = (e) => setUsername(e.target.value)
    const inputEmail = (e) => setEmail(e.target.value)

    const submit = (e) => {
        e.preventDefault();
        axios.post('https://631879d7ece2736550cb0a11.mockapi.io/users', {
            name: name, username: username, email: email
        }).then(() => { navigate('/read') })
    }

    return (
        <Container>
            <Navbar />
            <FormSection className='container pb-5'>
                <h1>Add User</h1>
                <form onSubmit={submit}>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" onChange={(e) => inputName(e)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input type="text" className="form-control" onChange={(e) => inputUsername(e)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" onChange={(e) => inputEmail(e)} />
                    </div>
                    <button type="submit" className="btn btn-primary" >Submit</button>
                </form>
            </FormSection>
        </Container>
    );
}

export default Create