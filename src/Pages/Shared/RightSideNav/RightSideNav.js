import React, { useContext } from 'react';
import { ButtonGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import { FaGoogle, FaGithub, FaFacebook, FaTwitch, FaWhatsapp, FaTwitter, FaInstagram } from "react-icons/fa"
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandCarousel/BrandCarousel';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';



const RightSideNav = () => {
    const { providerLogin } = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider()

    const handelGoogleSingIn = () => {
        providerLogin(googleProvider)
        .then(res =>{
            const user = res.user ;
            console.log(user)
        })
        .catch(er => {
            console.log(er)
        })
    }
    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handelGoogleSingIn} className='mb-2' variant='outline-primary' > <FaGoogle></FaGoogle> Login With Google </Button>
                <Button variant='outline-dark'> <FaGithub></FaGithub>  Login With GitHub </Button>
            </ButtonGroup>
            <div className='mt-4'>
                <h5>Find Us On</h5>

                <ListGroup>
                    <ListGroup.Item className='mb-2'><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaWhatsapp></FaWhatsapp> Whatsapp </ListGroup.Item>
                    <ListGroup.Item className='mb-2'> <FaTwitch></FaTwitch> Twitch </ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaInstagram></FaInstagram>  Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <div className='mt-6'>
                <BrandCarousel></BrandCarousel>
            </div>

        </div>
    );
};

export default RightSideNav;