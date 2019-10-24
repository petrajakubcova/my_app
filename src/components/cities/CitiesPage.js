import React from 'react';
import ReactTable from 'react-table'
import 'react-table/react-table.css'

export default class CitiesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: []
        };
    }

    componentDidMount() {
        fetch("https://indian-cities-api-nocbegfhqg.now.sh/cities")
            .then(response => response.json())
            .then(cities => this.setState({cities}));
    }

    render() {
        /* const hardCodedCities = [
            {name: "Copenhagen", language: "Danish", country: "Denmark"},
            {name: "Paris", language: "French", country: "France"},
        ]; */

        console.log(this.state.cities);

        return (
            <div>
                <table>
                <tbody>
                    <tr>
                        <th>City</th>
                        <th>State</th>
                        <th>District</th>
                    </tr>
                        { this.state.cities.map((city, index) => {
/*                             return (
                                <tr key={"cityrow" + index}>
                                    <td>{city.City}</td>
                                    <td>{city.State}</td>
                                    <td>{city.District}</td>
                                </tr>
                            ) */
                        })}
                    </tbody>
                </table>

                <ReactTable 
                    columns={[
                        {
                            Header: "City",
                            accessor: "City"
                        },
                        {
                            Header: "State",
                            accessor: "State"
                        },
                        {
                            Header: "District",
                            accessor: "District"
                        }
                    ]}
                    data={this.state.cities}
                />
            </div>
        );
    }
}