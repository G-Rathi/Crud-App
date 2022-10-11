import React, { useReducer } from 'react'
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




const initialState = {
    name: '',
    username: '',
    email: '',
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'inputName':
            return { ...state, name: action.value };
        case 'inputUsername':
            return { ...state, username: action.value };
        case 'inputEmail':
            return { ...state, email: action.value };
        default:
            return state
    }
}

const Create = () => {
    const navigate = useNavigate();
    const [state, dispatch] = useReducer(reducer, initialState)

    const submit = async (e) => {
        e.preventDefault();
        try {
            const userDetail = await axios.post('https://631879d7ece2736550cb0a11.mockapi.io/users', {
                name: state.name, username: state.username, email: state.email
            })
            console.log(userDetail)
            navigate('/read')
        }
        catch (error) {
            console.log(error.message)
        }
    }


    return (
        <Container>
            <Navbar />
            <FormSection className='container pb-5'>
                <h1>Add User</h1>
                <form onSubmit={submit}>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" onChange={(e) => dispatch({ type: 'inputName', value: e.target.value })} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input type="text" className="form-control" onChange={(e) => dispatch({ type: 'inputUsername', value: e.target.value })} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" onChange={(e) => dispatch({ type: 'inputEmail', value: e.target.value })} />
                    </div>
                    <button type="submit" className="btn btn-primary" >Submit</button>
                </form>
            </FormSection>
        </Container>
    )
}

export default Create
