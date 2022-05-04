import { DataGrid } from '@mui/x-data-grid';
import React from 'react';
import axios from 'axios';
class Cases extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: [],
        };
    }
    columns = [
        { field: 'continent', headerName: 'Continent', width: 200 },
        { field: 'name', headerName: 'Country', width: 200 },
        { field: 'capital_city', headerName: 'Capital City', width: 200 },
        { field: 'population', headerName: 'Population', width: 200 },
        { field: 'confirmed_cases', headerName: 'Confirmed Cases', width: 200 },
        { field: 'deaths', headerName: 'Deaths', width: 150 },
        { field: 'recovered_cases', headerName: 'Recovered cases', width: 150 },
        { field: 'last_updated_at', headerName: 'Date Last Updated', width: 200 },


    ];


    rows = [
        { id: 1, name: 'Snow', confirmed_cases: 40000, recovered_cases: 30000, deaths: 20000, population: 100000, last_updated_at: '2020-03-20' },
        { id: 2, name: 'Rain', confirmed_cases: 40000, recovered_cases: 30000, deaths: 20000, population: 100000, last_updated_at: '2020-03-20' },
        { id: 3, name: 'Wind', confirmed_cases: 40000, recovered_cases: 30000, deaths: 20000, population: 100000, last_updated_at: '2020-03-20' },
        { id: 4, name: 'Sun', confirmed_cases: 40000, recovered_cases: 30000, deaths: 20000, population: 100000, last_updated_at: '2020-03-20' },
    ];
    componentDidMount() {
        this.fetchCountries();
    }

    fetchCountries() {
        //TODO: use env variable
        axios.get('http://localhost:5000/countries').then((res) => {
            const countries = res.data.data;
            console.log(countries)
            //create rows from countries
            const rows1 = countries.map((country) => {
                return {
                    id: country.id,
                    name: country.name,
                    confirmed_cases: country.confirmed_cases,
                    recovered_cases: country.recovered_cases,
                    deaths: country.deaths,
                    population: country.population,
                    last_updated_at: country.last_updated_at,
                    continent: country.continent,
                    capital_city: country.capital_city,
                }
            })
            this.setState({ countries: rows1 });
        });
    }

    render() {
        return (
            <div style={{ height: 1300, width: '100%' }}>
                <DataGrid
                    rows={this.state.countries}
                    columns={this.columns}
                    pageSize={20}
                    rowsPerPageOptions={[20]}
                    disableSelectionOnClick
                />
            </div>
        )
    }
}
export default Cases;