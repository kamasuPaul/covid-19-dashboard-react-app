import { Grid, Container, Typography } from '@mui/material';
import Page from '../components/Page';
import AppWidgetSummary from '../components/dashboard/AppWidgetSummary';
import Cases from '../components/Cases';

export default function DashboardApp() {
  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome to the Covid 19 Cases Dashboard
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Total Cases" total={714000} icon={'ant-design:android-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Total Recovered" total={1352831} color="info" icon={'ant-design:apple-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Total Population" total={1723315} color="warning" icon={'ant-design:windows-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Total Deaths" total={234} color="error" icon={'ant-design:bug-filled'} />
          </Grid>


          <Grid item xs={12} md={12} lg={12}>
            <Cases />
          </Grid>

        </Grid>
      </Container>
    </Page>
  );
}

