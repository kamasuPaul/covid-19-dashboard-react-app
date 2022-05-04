import { Grid, Container, Typography } from '@mui/material';
import Page from '../components/Page';
import AppWidgetSummary from '../components/dashboard/AppWidgetSummary';
import Cases from '../components/Cases';
import React from 'react';
import axios from 'axios';

class DashboardApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          totals:{}
        };
    }
    //fetch totals
    componentDidMount() {
      //TODO: change base url to env url
      axios.get('http://localhost:5000/summary')
      .then((res) => {
        const totals = res.data.data;
        this.setState({ totals });
      });
    }

  render() {
  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome to the Covid 19 Cases Dashboard
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Total Cases" total={this.state.totals.total_confirmed_cases} icon={'ant-design:android-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Total Recovered" total={this.state.totals.total_recovered_cases} color="info" icon={'ant-design:apple-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Total Population" total={this.state.totals.total_population} color="warning" icon={'ant-design:windows-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Total Lives Claimed" total={this.state.totals.total_deaths} color="error" icon={'ant-design:bug-filled'} />
          </Grid>


          <Grid item xs={12} md={12} lg={12}>
            <Cases />
          </Grid>

        </Grid>
      </Container>
    </Page>
  );
  }
}
export default DashboardApp;

