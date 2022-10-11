import React, { useEffect, useState, useReducer } from 'react'
import Navbar from '../components/Navbar'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'



const Container = styled.div`
            background:  linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), url("https://wallpaperaccess.com/full/4893798.jpg") center;
            background-size: cover;
            width:100vw;
            height:100vh;
            `;



const Update = () => {
    const [user, setUser] = useState([]);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();
    // console.log(id)

    const initailState = {
        name: user.name,
        username: user.username,
        email: user.email
    }
    const reducer = (state, action) => {
        switch (action.type) {
            case 'changeName':
                return { ...state, name: action.value };
            case 'changeUsername':
                return { ...state, username: action.value };
            case 'changeEmail':
                return { ...state, email: action.value };
            default:
                return state
        }
    }
    const [state, dispatch] = useReducer(reducer, initailState)

    const loadUser = async () => {
        try {
            const getUser = await axios.get(`https://631879d7ece2736550cb0a11.mockapi.io/users/${id}`)
            const res = getUser.data
            setUser(res)
        }
        catch (error) {
            setError(error)
        }
    }
    useEffect(() => {
        loadUser();
    }, [])
    if (error) {
        return `Error:${error.message}`
    }

    const submit = async (e) => {
        e.preventDefault();
        const updateUser = await axios.put(`https://631879d7ece2736550cb0a11.mockapi.io/users/${id}`, {
            name: state.name, username: state.username, email: state.email
        })
        console.log(updateUser)
        navigate('/read')
    }


    const handleBack = (e) => {
        e.preventDefault();
        navigate(-1)
    }

    return (
        <Container>
            <Navbar />
            <div className='container pb-5'>
                <h1>Update User</h1>
                <form>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" defaultValue={user.name} onChange={(e) => dispatch({ type: 'changeName', value: e.target.value })} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input type="text" className="form-control" defaultValue={user.username} onChange={(e) => dispatch({ type: 'changeUsername', value: e.target.value })} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" defaultValue={user.email} onChange={(e) => dispatch({ type: 'changeEmail', value: e.target.value })} />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={submit} >Update</button>
                    <button type="submit" className="btn btn-dark ms-5" onClick={handleBack} >Back</button>
                </form>
            </div>
        </Container >
    );
}

export default Update