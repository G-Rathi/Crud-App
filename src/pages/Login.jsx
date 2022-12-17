import React, { useState } from 'react'
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { laptop, mobile, tablet } from '../Responsive';

const Container = styled.div`
        width:100vw;
        height: 100vh;
        background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), url("https://wallpaperaccess.com/full/486695.jpg") center ;
        background-size: cover;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        `;
const Wrapper = styled.div`
        padding: 20px;
        width: 30%;
        background-color: white;
        ${mobile({ margin: '20px', })};
        ${tablet({ margin: '40px' })};
        ${laptop({ width: "800px" })};
        `;
const Title = styled.h1`
        font-size: 25px;
        font-weight: 300; 
        `;
const Form = styled.form`
        display:flex;
        flex-direction: column;
        `;
const Input = styled.input`
        flex:1;
        min-width: 30%;
        padding: 10px;
        margin: 10px 0px; 
        `;
const Button = styled.button`
        width: 40%;
        border: none;
        padding: 15px 20px;
        background-color: darkblue;
        color: white;
        font-weight: 700;
        cursor: pointer;
        margin-bottom: 10px;
        ${mobile({ width: "50%", padding: '15px 5px' })};
        `;
const L = styled.div`
        margin: 5px 0px;
        font-size: 12px;
        text-decoration: underline;
        cursor: pointer;
        `;
const Error = styled.span`
        color:red;
        `;



const Login = (props) => {
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
        const [usernameErr, setUsernameErr] = useState(false);
        const [passwordErr, setPasswordErr] = useState(false);
        const navigate = useNavigate('');

        const usernameLength = (e) => {
                setUsername(e.target.value.length)
        }
        const passwordLength = (e) => {
                setPassword(e.target.value.length)
        }

        function usernameHandler() {
                if (username <= 3) {
                        setUsernameErr(true)
                } else {
                        setUsernameErr(false)
                }
        }

        function passwordHandler() {
                if (password < 5) {
                        setPasswordErr(true)
                } else {
                        setPasswordErr(false)
                }
        }

        function submit(e) {
                e.preventDefault();
                if (username <= 3 || password < 5) {
                        usernameHandler();
                        passwordHandler();
                } else {
                        localStorage.setItem('login', true)
                        navigate(-2)
                }
        }

        return (
                <Container>
                        <Wrapper>
                                <Title>SIGN IN</Title>
                                <Form>
                                        <Input type='text' placeholder="Username" onChange={usernameLength} />
                                        {
                                                usernameErr && <Error>It should contain atleast 3 character!</Error>
                                        }
                                        <Input type='password' placeholder="Password" onChange={passwordLength} />
                                        {
                                                passwordErr && <Error>It should contain atleast 5 character!</Error>
                                        }
                                        <Button onClick={submit}>LOGIN</Button>
                                        <L>DO NOT YOU REMEMBER THE PASSWORD?</L>
                                        <L><Link className='text-decoration-none' to='/register'>CREATE A NEW ACCOUNT</Link></L>
                                        <L> <Link className='text-decoration-none' to="/">BACK TO HOME</Link></L>
                                </Form>
                        </Wrapper>
                </Container>
        )
}

export default Login