import React , {useEffect, useState} from 'react';
import {Button, Table} from 'semantic-ui-react'
import axios from "axios";
import { Link } from 'react-router-dom';

export default function Read() {
    const setData = (data) => {
        let { id, firstName, lastName, checkbox } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Checkbox Value', checkbox)
    }

    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://63d3522ec1ba499e54bf5800.mockapi.io/users`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, []);

    const onDelete = (id) => {
        axios.delete(`https://63d3522ec1ba499e54bf5800.mockapi.io/users/${id}`)
            .then(() => {
                getData();
            })
    }

    const getData = () => {
        axios.get(`https://63d3522ec1ba499e54bf5800.mockapi.io/users`)
            .then((getData) => {
                setAPIData(getData.data);
            })
    }

    return (
        <div>
            <Link to="/create">Create</Link>

            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Checked</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.firstName}</Table.Cell>
                                <Table.Cell>{data.lastName}</Table.Cell>
                                <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>

                                <Link to='/update'>
                                    <Table.Cell>
                                        <Button onClick={() => setData(data)}>Update</Button>
                                    </Table.Cell>
                                </Link>

                                <Table.Cell>
                                    <Button onClick={() => onDelete(data.id)}>Delete</Button>
                                </Table.Cell>

                            </Table.Row>
                        );
                    })}

                </Table.Body>


            </Table>
        </div>
    )
}
