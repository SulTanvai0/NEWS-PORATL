import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndCondition = () => {
    return (
        <div>
            <h3>Here is Terms and Condition</h3>
            <p>go back to  <Link to='/register'> Registration</Link></p>
        </div>
    );
};

export default TermsAndCondition;