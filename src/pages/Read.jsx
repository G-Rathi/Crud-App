import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { laptop, mobile, tablet } from '../Responsive'



const Container = styled.div`
         background:  linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), url("https://wallpaperaccess.com/full/4893798.jpg") center;
        background-size: cover;
        ${mobile({ width: '650px', height: '100%' })}
        `;
const Wrapper = styled.div`
            ${mobile({ width: '100%', margin: '10px' })}
            ${tablet({ width: '90%', margin: '10px' })}
            ${laptop({ width: '80%', })}
            height:100vh;
            `;
const Td = styled.td`
            ${tablet({ width: '100%', textAlign: 'center' })}
            `;
const Button = styled.button`
            ${tablet({ margin: '5px' })}
            `;




const Read = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');

    const loadUsers = async () => {
        try {
            const fetch = await axios.get('https://631879d7ece2736550cb0a11.mockapi.io/users')
            const response = await fetch.data
            console.log(response)
            setUsers(response.reverse())
        }
        catch (error) { setError(error) }
    }

    const handleDelete = async (e, id) => {
        e.preventDefault();
        try {
            const deletedData = await axios.delete(`https://631879d7ece2736550cb0a11.mockapi.io/users/${id}`)
            console.log(deletedData)
            loadUsers()
        }
        catch (error) { setError(error.message) }
    }

    useEffect(() => {
        loadUsers()
    }, [])

    if (error) {
        return `Error:${error.message}`
    }


    return (
        <Container>
            <Navbar />
            <Wrapper className='container pb-5 '>
                <h1>Users List </h1>
                <table className="table">
                    <thead className="bg-dark text-white">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">NAME</th>
                            <th scope="col">USERNAME</th>
                            <th scope="col">EMAIL</th>
                            <th scope="col">OPERATIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <Td>
                                        <Link to={`/update/${user.id}`}><Button className="btn btn-primary mx-2">Edit</Button></Link>
                                        <Button className="btn btn-danger" onClick={(e) => handleDelete(e, user.id)}>Delete</Button>
                                    </Td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </Wrapper>
        </Container>
    )
}

export default Read