import {useState} from 'react';
import Link from "next/link";


const Users = ({users}) => {
    // const [users, setUsers] = useState([
    //     {id: 1, name: 'Nine'},
    //     {id: 2, name: 'Ava'},
    // ])

    return (
        <div>
            <h1>Users page</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                    <Link href={`/users/${user.id}`}>
                        <a> {user.name} </a>
                    </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Users;

export async function getStaticProps(context) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const users = await response.json();
    return {
        props: {users}, // will be passed to the page component as props
    }
}