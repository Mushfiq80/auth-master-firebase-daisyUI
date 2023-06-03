import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProviders';

const Home = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <h3>{user && <span>{user.displayName}</span>} Welcome To the Homepage!!</h3>
        </div>
    );
};

export default Home;