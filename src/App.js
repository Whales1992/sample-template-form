import React from 'react';
import './App.css';
// import BankDeets, {IbanFormContainer, BangladeshFormContainer} from './src/index.js'
import BankDeets, {IbanFormContainer, BangladeshFormContainer} from 'bankdeets'
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import ReactGA from 'react-ga';

if (!window.location.href.includes('localhost')){
  ReactGA.initialize('UA-42560882-4');
  ReactGA.pageview('/');
}

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
'VNM',
'ARG',
'ARE',
'BRA',
'CHL',
'THA',
'GHA',
'BGR',
'KEN',
'EGY',
'JPN',
'IDN',
'MEX',
'PHL',
'PER',
'GEO',
'NPL',
'NER',
'MAR',
'LKA',
'BWA',
'ZAF'
]

const useStyles = makeStyles(theme => ({

  paper: {
    marginTop: theme.spacing(3),
    width: '100%',
    overflowX: 'auto',
    padding: theme.spacing(3, 2),
    flexDirection: 'column'
  },
  grid: {
    alignContent: 'flex-start',
    alignItems:  'flex-start',
    textColor: 'red',
    justify: 'flex-start'
  }
}));


function App() {
  const classes = useStyles();

  return (
    <div>
      <div className="App">
        <div style={{position: 'relative', top: 30}}>
          <Container maxWidth="sm">
            <CssBaseline />
            <Introduction />
            <Paper className={classes.paper}>
              <BankDeets/>
            </Paper>
            <ApiDocs/>
            <h1>Other examples</h1>
            <p>Collect only IBANs</p>
            <Paper className={classes.paper}>
              <IbanFormContainer />
            </Paper>

            <p>Or Bangladeshi taka</p>
            <Paper className={classes.paper}>
              <BangladeshFormContainer />
            </Paper>
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
      <a href="https://github.com/321k/bankdeets">Github</a> | <a href="https://twitter.com/321k">Twitter</a> | <a href="https://github.com/321k/bankdeets/issues">Bugs</a> | <MailingList/>
    </div>
  )
}

class MailingList extends React.Component{
  constructor(props){
    super(props);
    this.track = this.track.bind(this);
  }

  track(){
    ReactGA.event({
      category: 'User',
      action: 'Clicked mailing list link'
    });
  }

  render(){
    return (
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSe-MoggnFbzRQoNgJ73xsoHLxh8wqwkRfeMjtVCYOlQc2nexw/viewform?usp=sf_link" onClick={this.track}>
        Mailing list
      </a>
    )
  }
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
  const classes = useStyles();

  return (
    <Grid container className={classes.grid} 
    > 
      <Grid item xs={12} className={classes.grid}>
        <h2>Installation</h2>
        npm install bankdeets
            <h2>Supported countries</h2>
            <List>
              <ListItem>
                <ListItemIcon><span role="img" aria-label="flag">🇪🇺</span></ListItemIcon>
                <ListItemText>Eurozone</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><span role="img" aria-label="flag">🇺🇸</span></ListItemIcon>
                <ListItemText>United States</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><span role="img" aria-label="flag">🇬🇧</span></ListItemIcon>
                <ListItemText>United Kingdom</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><span role="img" aria-label="flag">🇧🇬</span></ListItemIcon>
                <ListItemText>Bulgaria</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><span role="img" aria-label="flag">🇩🇰</span></ListItemIcon>
                <ListItemText>Denmark</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><span role="img" aria-label="flag">🇳🇴</span></ListItemIcon>
                <ListItemText>Norway</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><span role="img" aria-label="flag">🇸🇪</span></ListItemIcon>
                <ListItemText>Sweden</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><span role="img" aria-label="flag">🇦🇹</span></ListItemIcon>
                <ListItemText>Austria</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><span role="img" aria-label="flag">🇧🇪</span></ListItemIcon>
                <ListItemText>Belgium</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><span role="img" aria-label="flag">🇨🇾</span></ListItemIcon>
                <ListItemText>Cyprus</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><span role="img" aria-label="flag">🇪🇪</span></ListItemIcon>
                <ListItemText>Estonia</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><span role="img" aria-label="flag">🇫🇮</span></ListItemIcon>
                <ListItemText>Finland</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><span role="img" aria-label="flag">🇫🇷</span></ListItemIcon>
                <ListItemText>France</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><span role="img" aria-label="flag">🇩🇪</span></ListItemIcon>
                <ListItemText>Germany</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><span role="img" aria-label="flag">🇬🇷</span></ListItemIcon>
                <ListItemText>Greece</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><span role="img" aria-label="flag">🇮🇪</span></ListItemIcon>
                <ListItemText>Ireland</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><span role="img" aria-label="flag">🇮🇹</span></ListItemIcon>
                <ListItemText>Italy</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><span role="img" aria-label="flag">🇱🇻</span></ListItemIcon>
                <ListItemText>Latvia</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><span role="img" aria-label="flag">🇱🇹</span></ListItemIcon>
                <ListItemText>Lithuania</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><span role="img" aria-label="flag">🇱🇺</span></ListItemIcon>
                <ListItemText>Luxembourg</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><span role="img" aria-label="flag">🇲🇹</span></ListItemIcon>
                <ListItemText>Malta</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><span role="img" aria-label="flag">🇳🇱</span></ListItemIcon>
                <ListItemText>Netherlands</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><span role="img" aria-label="flag">🇵🇹</span></ListItemIcon>
                <ListItemText>Portugal</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><span role="img" aria-label="flag">🇸🇰</span></ListItemIcon>
                <ListItemText>Slovakia</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><span role="img" aria-label="flag">🇸🇮</span></ListItemIcon>
                <ListItemText>Slovenia</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><span role="img" aria-label="flag">🇪🇸</span></ListItemIcon>
                <ListItemText>Spain</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><span role="img" aria-label="flag">🇦🇺</span></ListItemIcon>
                <ListItemText>Australia</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><span role="img" aria-label="flag">🇨🇦</span></ListItemIcon>
                <ListItemText>Canada</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><span role="img" aria-label="flag">🇵🇱</span></ListItemIcon>
                <ListItemText>Poland</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><span role="img" aria-label="flag">🇭🇺</span></ListItemIcon>
                <ListItemText>Hungary</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><span role="img" aria-label="flag">🇮🇳</span></ListItemIcon>
                <ListItemText>India</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><span role="img" aria-label="flag">🇸🇬</span></ListItemIcon>
                <ListItemText>Singaproe</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><span role="img" aria-label="flag">🇭🇰</span></ListItemIcon>
                <ListItemText>Hong Kong</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><span role="img" aria-label="flag">🇳🇿</span></ListItemIcon>
                <ListItemText>New Zealand</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><span role="img" aria-label="flag">🇨🇿</span></ListItemIcon>
                <ListItemText>Czechia</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><span role="img" aria-label="flag">🇧🇩</span></ListItemIcon>
                <ListItemText>Bangladesh</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><span role="img" aria-label="flag">🇻🇳</span></ListItemIcon>
                <ListItemText>Vietnam</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><span role="img" aria-label="flag">🇨🇭</span></ListItemIcon>
                <ListItemText>Switzerland</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><span role="img" aria-label="flag">🇲🇾</span></ListItemIcon>
                <ListItemText>Malaysia</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><span role="img" aria-label="flag">🇵🇰</span></ListItemIcon>
                <ListItemText>Pakistan</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><span role="img" aria-label="flag">🇮🇱</span></ListItemIcon>
                <ListItemText>Israel</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><span role="img" aria-label="flag">🇹🇷</span></ListItemIcon>
                <ListItemText>Turkey</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><span role="img" aria-label="flag">🇧🇷</span></ListItemIcon>
                <ListItemText>Brazil</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><span role="img" aria-label="flag">🇨🇱</span></ListItemIcon>
                <ListItemText>Chile</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><span role="img" aria-label="flag">🇦🇷</span></ListItemIcon>
                <ListItemText>Argentina</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><span role="img" aria-label="flag">🇹🇭</span></ListItemIcon>
                <ListItemText>Thailand</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><span role="img" aria-label="flag">🇬🇭</span></ListItemIcon>
                <ListItemText>Ghana</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><span role="img" aria-label="flag">🇧🇬</span></ListItemIcon>
                <ListItemText>Bulgaria</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><span role="img" aria-label="flag">🇰🇪</span></ListItemIcon>
                <ListItemText>Kenya</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><span role="img" aria-label="flag">🇪🇬</span></ListItemIcon>
                <ListItemText>Egypt</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><span role="img" aria-label="flag">🇯🇵</span></ListItemIcon>
                <ListItemText>Japan</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><span role="img" aria-label="flag">🇮🇩</span></ListItemIcon>
                <ListItemText>Indonesia</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><span role="img" aria-label="flag">🇲🇽</span></ListItemIcon>
                <ListItemText>Mexico</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><span role="img" aria-label="flag">🇵🇪</span></ListItemIcon>
                <ListItemText>Peru</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><span role="img" aria-label="flag">🇲🇦</span></ListItemIcon>
                <ListItemText>Morocco</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><span role="img" aria-label="flag">🇵🇭</span></ListItemIcon>
                <ListItemText>Philippines</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><span role="img" aria-label="flag">🇬🇪</span></ListItemIcon>
                <ListItemText>Georgia</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><span role="img" aria-label="flag">🇳🇵</span></ListItemIcon>
                <ListItemText>Nepal</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><span role="img" aria-label="flag">🇳🇬</span></ListItemIcon>
                <ListItemText>Nigeria</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><span role="img" aria-label="flag">🇱🇰</span></ListItemIcon>
                <ListItemText>Sri Lanka</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><span role="img" aria-label="flag">🇧🇼</span></ListItemIcon>
                <ListItemText>Botswana</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><span role="img" aria-label="flag">🇿🇦</span></ListItemIcon>
                <ListItemText>South Africa</ListItemText>
              </ListItem>
            </List> 

            Contribute to the list of supported currencies <a href="https://github.com/321k/bankdeets/blob/master/src/components/BankDetails.js">here</a> 
        </Grid>
      <Grid item xs={12}>        
        <h2>Supported languages</h2>  
          <List>
            <ListItem>English</ListItem>
            <ListItem>Swedish</ListItem>
            <ListItem>Norwegian</ListItem>
            <ListItem>Danish</ListItem>
            <ListItem>Finnish</ListItem>
            <ListItem>French</ListItem>
          </List>
        Contribute to translations <a href="https://github.com/321k/bankdeets/blob/master/src/translation.js">here</a>
      </Grid>
    </Grid>
  )
}


export default App;
