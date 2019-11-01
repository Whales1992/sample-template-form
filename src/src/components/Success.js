import React from 'react';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import { Translate } from 'react-translated';


export default class SuccessScreenContainer extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.sendToTransferWise()
  }

  render(){
    return (
      <SuccessScreen {...this.props}/>
    )
  }
}

function SuccessScreen (props){  
  if (props.loading){
    return <CircularProgress/>
  } else if(props.error){
    return <Error {...props}/>
  } else if (props.success){
    return <Success {...props}/> 
  } else if (props.validated){
    return <Validated {...props}/> 
  } else {
    return <Default {...props}/>
  }
}

function Error (props){
  return (
    <div>
    <h2><Translate text="Incorrect information"/></h2>
      {
        props.response.errors ? props.response.errors.map(error => (
          <div styles={{margin: 10, padding: 10}}>
            <div>{error.message}</div>
            <br/>
          </div>
        )) : ''
    }
  </div>
  )      
}


function Validated (props) {
  return (
    <div>
      <h2><Translate text="The bank details are valid"/></h2>
      <Translate text="Verified by TransferWise"/>, ID: {props.response.id}
    </div>
  )
}

function Success (props) {
  return (
    <div>
      <h2><Translate text="Bank details submitted"/></h2>
      <Translate text="Thank you"/>
    </div>
  )
}

function Default (props){
  const payload = props.payload
  const bankDetails = props.bankDetails
  return(
    <div>
    <h2><Translate text="Beneficiary"/></h2>
    {
      Object.keys(payload).map((key, i) => (
        payload[key] !== '' ?
        <TextField
          id={key}
          label={key}
          value={payload[key]}
          margin="normal"
        /> : ''
      ))
    }

    <h2><Translate text="Bank information"/></h2>
    {
      Object.keys(bankDetails).map((key, i) => (
        bankDetails[key] !== '' ?
        <TextField
          id={key}
          label={key}
          value={bankDetails[key]}
          margin="normal"
        /> : ''
      ))
    }
    </div>
  )
}