import A from "./A";
import React from "react";
import Head from "next/head";

const MainContainer = ({children, keywords}) => {
    return (
        <>
            <Head>
                <meta keywords={'next project' + keywords}>
                </meta>
                <title> Next project </title>
            </Head>
            <div className='navbar'>
                <A href={'/'} text={'Main page'}>  </A>
                <A href={'/users'} text={'Users page'}>  </A>
            </div>
            <div>
                {children}
            </div>
            <style jsx>
                {`
                  .navbar {
                    background-color: orange;
                    padding: 15px;
                  }
                  .link {
                    text-decoration: none;
                    margin: 10px;
                    padding: 5px;
                    color: whitesmoke;
                  }
                `}
            </style>
        </>
    );
};

export default MainContainer;