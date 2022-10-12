import React from 'react';
import {useRouter} from "next/router";
import styles from '../../styles/User.module.scss';
import MainContainer from "../../components/MainContainer";

const Id = ({user}) => {
    const {query} = useRouter();

    return (
        <MainContainer>
            <div className={styles.user}>
                <h1>Пользователь c id {query.id}</h1>
                <div>Name: {user.name}</div>
            </div>
        </MainContainer>
    );
};

export default Id;

export async function getServerSideProps({params}) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const user = await response.json();
    return {
        props: {user}, // will be passed to the page component as props
    }
}