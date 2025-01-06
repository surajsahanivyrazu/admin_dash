import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { _tasks, blogPosts } from 'src/_mock';
import { DashboardContent } from 'src/layouts/dashboard';

import { AnalyticsTasks } from '../analytics-tasks';
import AnalyticsSleepOverview from '../analytics-sleeep-overview';
import { AnalyticsNewsOverView } from '../analytics-news-overview';
import { AnalyticsCurrentVisits } from '../analytics-current-visits';
import { AnalyticsWebsiteVisits } from '../analytics-website-visits';
import { AnalyticsWidgetSummary } from '../analytics-widget-summary';
import { AnalyticsTrafficBySite } from '../analytics-traffic-by-site';
import { AnalyticsCurrentSubject } from '../analytics-current-subject';
import { AnalyticsConversionRates } from '../analytics-conversion-rates';

// ----------------------------------------------------------------------

export function OverviewAnalyticsView() {
  return (
    <DashboardContent maxWidth="xl">
      <Typography variant="h4" sx={{ mb: { xs: 3, md: 5 } }}>
        Hi, Welcome back 👋
      </Typography>

      <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={3}>
          <AnalyticsWidgetSummary
            title="Weekly sales"
            percent={13.4}
            total={714000}
            icon={
              <img
                style={{ height: '100%', width: '100%' }}
                alt="icon"
                src="/assets/icons/glass/ic-glass-sales.svg"
              />
            }
            updatedAt="Update last week"
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AnalyticsWidgetSummary
            title="Messages"
            percent={-23.6}
            total={234975}
            color="error"
            icon={
              <img
                style={{ height: '100%', width: '100%' }}
                alt="icon"
                src="/assets/icons/glass/ic-glass-message.svg"
              />
            }
            updatedAt="Update last week"
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AnalyticsWidgetSummary
            title="Purchase orders"
            percent={2.8}
            total={1723315}
            color="warning"
            icon={
              <img
                style={{ height: '100%', width: '100%' }}
                alt="icon"
                src="/assets/icons/glass/ic-glass-order.svg"
              />
            }
            updatedAt="Update last week"
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AnalyticsWidgetSummary
            title="New users"
            percent={-9.3}
            total={13528}
            color="secondary"
            icon={
              <img
                style={{ height: '100%', width: '100%' }}
                alt="icon"
                src="/assets/icons/glass/ic-glass-user.svg"
              />
            }
            updatedAt="Update last week"
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AnalyticsCurrentVisits
            title="Current visits"
            chart={{
              series: [
                { label: 'America', value: 3500 },
                { label: 'Asia', value: 2500 },
                { label: 'Europe', value: 1500 },
                { label: 'Africa', value: 500 },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AnalyticsWebsiteVisits
            title="Website visits"
            subheader="(+43%) than last year"
            chart={{
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
              series: [
                { name: 'Team A', data: [43, 33, 22, 37, 67, 68, 37, 24, 55] },
                { name: 'Team B', data: [51, 70, 47, 67, 40, 37, 24, 70, 24] },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AnalyticsConversionRates
            title="Conversion rates"
            subheader="(+43%) than last year"
            chart={{
              categories: ['Italy', 'Japan', 'China', 'Canada', 'France'],
              series: [
                { name: '2022', data: [44, 55, 41, 64, 22] },
                { name: '2023', data: [53, 32, 33, 52, 13] },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AnalyticsCurrentSubject
            title="Current subject"
            chart={{
              categories: ['English', 'History', 'Physics', 'Geography', 'Chinese'],
              series: [
                { name: 'Series 1', data: [80, 50, 30, 40, 100] },
                { name: 'Series 2', data: [20, 30, 40, 80, 20] },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={5}>
          <AnalyticsNewsOverView title="News" list={blogPosts} />
        </Grid>

        <Grid xs={12} md={6} lg={7}>
          <AnalyticsSleepOverview
            title="Sleep Statistics"
            chart={{
              labels: ['Deep', 'Light', 'Awake', 'Quality'],
              series: [87, 75, 52, 28],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={6}>
          <AnalyticsTrafficBySite
            title="Traffic by site"
            list={[
              { value: 'facebook', label: 'Facebook', total: 323234 },
              { value: 'google', label: 'Google', total: 341212 },
              { value: 'linkedin', label: 'Linkedin', total: 411213 },
              { value: 'twitter', label: 'Twitter', total: 443232 },
            ]}
          />
        </Grid>

        <Grid xs={12} md={6} lg={6}>
          <AnalyticsTasks title="Tasks" list={_tasks} />
        </Grid>
      </Grid>
    </DashboardContent>
  );
}
