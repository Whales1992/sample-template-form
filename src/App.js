import React from 'react';
import logo from './logo.svg';
import './App.css';
//import BankDeets from './src/App.js'
import BankDeets from 'bankdeets'
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import { ComposableMap, Geographies, Geography } from "react-simple-maps";


const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";
const supported_countries = [
'USA',
'AUS',
'BGD',
'SWE',
'CAN',
'CHN',
'CZE',
'HKG',
'HUN',
'BGR',
'CHE',
'DNK',
'FRO',
'GRL',
'ALA',
'AND',
'ATF',
'AUT',
'BEL',
'BLM',
'CYP',
'DEU',
'ESP',
'EST',
'FIN',
'FRA',
'GLP',
'GRC',
'GUF',
'IRL',
'ITA',
'LTU',
'LUX',
'LVA',
'MAF',
'MCO',
'MLT',
'MNE',
'MTQ',
'MYT',
'NLD',
'PRT',
'REU',
'SMR',
'SPM',
'SVK',
'SVN',
'VAT',
'GBR',
'GIB',
'HRV',
'ISL',
'BVT',
'NOR',
'SJM',
'PAK',
'POL',
'ROU',
'IND',
'ISR',
'PSE',
'MYS',
'NIU',
'NZL',
'PCN',
'TKL',
'SGP',
'SGS',
'TUR',
'VNM'
]

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  paper: {
    marginTop: theme.spacing(3),
    width: '100%',
    overflowX: 'auto',
    padding: theme.spacing(3, 2),
    display: 'flex',
    flexDirection: 'column'
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  buttonSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
  fabProgress: {
    color: green[500],
    position: 'absolute',
    top: -6,
    left: -6,
    zIndex: 1,
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}));


function App() {
  const classes = useStyles();

  return (
    <div>
      <div className="App">
        <WorldEmoji />
        <div style={{position: 'relative', top: 30}}>
          <Container maxWidth="sm">
            <CssBaseline />
            <Introduction />
            <Paper className={classes.paper}>
              <BankDeets />
            </Paper>
            <ApiDocs/>
          </Container>
        </div>
        <Map />
      </div>

    </div>
  );
}


function Introduction(props){
  return (
    <div>
      <h1>{"<BankDeets/>"}</h1>
      <a href="https://github.com/321k/bankdeets">Github</a> | <a href="https://twitter.com/321k">Twitter</a> | <a href="https://github.com/321k/bankdeets/issues">Bugs</a>
    </div>
  )
}

function Map(props){
  return (
    <div style={{position: 'fixed', left: 0, top: -100, height: `100%`, width: `100%`, zIndex:-1}}>
      <ComposableMap>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map(geo => (
              <Geography key={geo.rsmKey} geography={geo} fill={supported_countries.includes(geo.properties.ISO_A3) ? "#F0F0F0" : "#F5F5F5"}/>
            )
          )}
        </Geographies>
      </ComposableMap>
    </div>

  )
}
function ApiDocs(props){
  return (
    <Grid container 
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
    >
      <Grid item xs={12}>
          <Typography align='left'>
            <h2>Supported currencies</h2>
            <ul>
              <li>Eurozone</li>
              <li>USD SWIFT</li>
              <li>EUR SWIFT</li>
              <li>GBP SWIFT</li>
              <li>Bulgaria</li>
              <li>Denmark</li>
              <li>Norway</li>
              <li>Sweden</li>
              <li>UK</li>
              <li>USA</li>
              <li>Australia</li>
              <li>Canada</li>
              <li>Poland</li>
              <li>Hungary</li>
              <li>India</li>
              <li>Singaproe</li>
              <li>Hong Kong</li>
              <li>New Zealand</li>
              <li>Czechia</li>
              <li>Bangladesh</li>
              <li>Vietnam</li>
              <li>Switzerland</li>
              <li>Malaysia</li>
              <li>Pakistan</li>
              <li>Israel</li>
              <li>Turkey</li>
            </ul>

            Contribute to the list of supported currencies <a href="https://github.com/321k/bankdeets/blob/master/src/components/BankDetails.js">here</a> 
          </Typography>
        </Grid>
      <Grid item xs={12}>
        <Typography align='left'>
          <h2>API</h2>
          <ul>
            <li><b>submitURL</b>="where to post the form data to"</li>
            <li>Example: {'<BankDeets submitURL="bankdeets.co/bankdeets" />'}</li>
          </ul>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography align='left'>
        <h2>Supported languages</h2>  
          <ul>
            <li>English</li>
            <li>Swedish</li>
            <li>Norwegian</li>
            <li>Danish</li>
            <li>Finnish</li>
            <li>French</li>
          </ul>
        Contribute to translations <a href="https://github.com/321k/bankdeets/blob/master/src/translation.js">here</a>
        </Typography>
      </Grid>
    </Grid>
  )
}

function WorldEmoji (props){
  
  const f = ['🌎', '🌍', '🌏'];

  const loop = () => {
    window.location.hash = f[Math.floor((Date.now()/100)%f.length)];
    setTimeout(loop, 1000);
    return f[Math.floor((Date.now()/100)%f.length)]
  }
  
  return <div style={{display: 'none'}}>{loop()}</div>
}

export default App;
