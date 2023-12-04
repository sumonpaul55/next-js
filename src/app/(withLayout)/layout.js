import React from 'react';

const Layout = ({ children }) => {
    return (
        <div>
            <header>header</header>
            {children}
            <footer>this is Footer</footer>
        </div>
    );
};

export default Layout;