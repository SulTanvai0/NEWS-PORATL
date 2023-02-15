import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';



const Register = () => {
    
    const [error, setError] = useState(' ')
    const [accepted, setAccepted] = useState(false)

    const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext)


    const handelSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, photoURL, password)
        createUser(email, password)
            .then(res => {
                const user = res.user;
                console.log(user)
                form.reset()
                handelUpdateUserProfile(name, photoURL);
                handelEmailVerification();
                toast.success('please verify your email address before login.')
                
            })
            .catch(er => {
                const error = er.message;

                setError(error.slice(10, -1))
                console.log(error)
            });

    };






    const handelUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(res => { })
            .catch(er => { console.error(er) })
    };

    const handelEmailVerification = () => {
        verifyEmail()
            .then(res => { })
            .catch(er => {  setError(er.message.slice(10, -1)) })


    }
    const handelAccepted = (event) => {
        setAccepted(event.target.checked)

    }


    return (
        <div>
            <Form onSubmit={handelSubmit}>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control name='name' type="Text" placeholder="UserName" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control name="photoURL" type="text" placeholder="Profile photo" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email Address </Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        onClick={handelAccepted}
                        type="checkbox"
                        label={<>Accept <Link to={'/terms'} > Terms and Conditions</Link></>} />
                </Form.Group>

                <Button variant="primary" type="submit" disabled={!accepted}>
                    Register
                </Button>
            </Form>
            <p className="text-danger">{error}</p>
        </div>
    );
};

export default Register;