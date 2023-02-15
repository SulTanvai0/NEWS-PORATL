import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Login = () => {

    const [error, setError] = useState(' ');
    const { singIn, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handelSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password)
        singIn(email, password)
            .then(res => {
                const user = res.user;
                console.log(user)
                form.reset()
                setError(' ')
                if(user.emailVerified){
                    navigate(from , {replace: true})
                }
                else{
                    toast.error(`your email is't verified . please Verified`)
                }
            })
            .catch(er => {
                const error = er.message;

                setError(error.slice(22, -2))
            })
            .finally(()=>{
                setLoading(false);
            })

    }

    return (
        <div>
            <Form onSubmit={handelSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" required type="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" required />
                </Form.Group>



                <Button variant="primary" type="submit">
                    LogIn
                </Button>

            </Form>

            <p className="text-danger">{error}</p>
        </div>
    );
};

export default Login;