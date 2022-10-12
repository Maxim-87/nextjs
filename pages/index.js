import React from "react";
import Link from "next/link";
import A from "../components/A";

const Index = () => {
    return (
        <div>
            <div className='navbar'>
                <A href={'/'} text={'Main page'}>  </A>
                <A href={'/users'} text={'Users page'}>  </A>
                {/*<Link href="/">*/}
                {/*    <a className={'link'}> Main page </a>*/}
                {/*</Link>*/}
                {/*<Link href="/users">*/}
                {/*    <a className={'link'}> Users page </a>*/}
                {/*</Link>*/}
            </div>
            <h1>Main page</h1>
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
        </div>
    );
};

export default Index;