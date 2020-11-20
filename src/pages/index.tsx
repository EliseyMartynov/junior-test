import { NextPage } from "next";
import { GistList } from "src/components/gistList";
import React from "react";
import AppBar from "@material-ui/core/AppBar/AppBar";
import Grid from "@material-ui/core/Grid/Grid";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import Typography from "@material-ui/core/Typography/Typography";
import { Container, CssBaseline } from "@material-ui/core";
import { createMuiTheme, ThemeProvider, ThemeOptions } from "@material-ui/core/styles";

export interface DashboardProps {}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#333"
    }
  },
  shape: {
    borderRadius: 10
  }
});

const Dashboard: NextPage<DashboardProps> = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar color="primary" position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Test Task
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <div style={{ padding: 24 }}>
          <Grid container spacing={6} direction="column">
            <section>
              <Typography variant="h2">Gists</Typography>
              <GistList />
            </section>
          </Grid>
        </div>
      </Container>
    </ThemeProvider>
  );
};

export default Dashboard;
