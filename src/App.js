import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";
import Checkbox from "@mui/material/Checkbox";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { orange, green } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const theme = createTheme({
  palette: {
    primary: {
      main: green[500],
    },
    secondary: {
      main: orange[500],
    },
  },
  typography: {
    h2: {
      fontSize: 32,
      marginBottom: 15,
    },
  },
});

function CheckboxExample() {
  const [checked, setChecked] = useState(true);
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          color="warning"
          inputProps={{
            "aria-label": "secondary checkbox",
          }}
        />
      }
      label="Testing checkbox"
    />
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <div className="App">
          <header className="App-header">
            <AppBar color="secondary" position="static">
              <Toolbar>
                <IconButton>
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6">MUI Theming</Typography>
                <Button variant="outlined" color="error">
                  Login
                </Button>
              </Toolbar>
            </AppBar>
            <Typography variant="h2" component="div">
              Welcome to MUI
            </Typography>
            <Typography variant="subtitle1">
              Learn how to use material ui
            </Typography>
            <Typography variant="body1">Let's get started</Typography>
            <TextField
              variant="filled"
              color="primary"
              type="date"
              label="the date"
            />
            <TextField
              variant="filled"
              color="primary"
              type="email"
              label="email"
              placeholder="test@test.com"
            />
            <CheckboxExample />

            <Button
              variant="contained"
              color="primary"
              size="small"
              href="#"
              startIcon={<SaveIcon />}
              onClick={() => alert("hello")}
            >
              Hello WOrld!
            </Button>
            <Button variant="contained" color="primary" size="large" disabled>
              Diabaled Large button
            </Button>
            <ButtonGroup variant="outlined" sx={{ mt: 1 }}>
              <Button color="primary" startIcon={<SaveIcon />}>
                Save
              </Button>
              <Button color="secondary" startIcon={<DeleteIcon />}>
                Discard
              </Button>
            </ButtonGroup>

            <Button
              sx={{
                background: "linear-gradient(45deg, #FE6B8B, #FF8E53)",
                border: 0,
                borderRadius: 15,
                color: "white",
                padding: "10px 30px",
                marginTop: 1,
              }}
            >
              Test CUSTOM STYLED button
            </Button>

            <Container maxWidth="sm">
              <Box
                sx={{
                  bgcolor: "#cfe8fc",
                  height: "10vh",
                  mt: 1,
                  color: "black",
                }}
              >
                <Typography>
                  Container maxWidth="sm" always 600px if screen > 600px
                </Typography>
              </Box>
            </Container>

            <Container fixed>
              <Box
                sx={{
                  bgcolor: orange[500],
                  height: "10vh",
                  my: 2,
                  color: "black",
                }}
              >
                <Typography>
                  Container fixed varies based on screen size
                </Typography>
              </Box>
            </Container>

            <Grid container spacing={4} justifyContent="center">
              <Grid item>
                <Paper sx={{ height: 75, width: 50 }} />
              </Grid>
              <Grid item>
                <Paper sx={{ height: 75, width: 50 }} />
              </Grid>
              <Grid item>
                <Paper sx={{ height: 75, width: 50 }} />
              </Grid>
            </Grid>

            <Typography sx={{ m: 2 }}>Responsive grid</Typography>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12} sm={6} lg={3}>
                <Paper sx={{ height: 75, width: "100%" }} />
              </Grid>
              <Grid item xs={3} sm={6}>
                <Paper sx={{ height: 75, width: "100%" }} />
              </Grid>
              <Grid item xs={3} sm={6}>
                <Paper sx={{ height: 75, width: "100%" }} />
              </Grid>
            </Grid>

            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
