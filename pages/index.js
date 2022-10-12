import React from "react";
import Link from "next/link";
import A from "../components/A";
import Head from "next/head";
import MainContainer from "../components/MainContainer";

const Index = () => {
    return (
        <MainContainer>
        <div>
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
        </MainContainer>
    );
};

export default Index;