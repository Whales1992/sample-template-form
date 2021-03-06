import React from "react";
import { Translate } from 'react-translated';
import NativeSelect from '@material-ui/core/NativeSelect';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import useStyles from '../styles.js'
import GetBankCode from './GetBankCode.js'
import GetBranchCode from './GetBranchCode.js'
import FormInput from '../components/FormInput.js'
import FormDropdown from '../components/FormDropdown.js'

export function SwiftRecipient (props){
  const classes = useStyles();
  const accountNumber = props.accountNumber ? props.accountNumber : ''
  const bic = props.bic ? props.bic : ''
  return(
      <React.Fragment>
        <FormControl className={classes.formControl}>
          <FormInput 
              name="accountNumber" value={accountNumber} 
              description="Account number" 
              onChange={props.onChange} 

          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <FormInput
              name="bic" value={bic} 
              description="BIC/SWIFT Code" 
              onChange={props.onChange} 
          />
        </FormControl>
      </React.Fragment>
  );
}

export function SingaporeanRecipient (props){
  const classes = useStyles();
  const accountNumber = props.accountNumber ? props.accountNumber : '';
  const bankCode = props.bankCode ? props.bankCode : '';
  return(
      <React.Fragment>
        <FormControl className={classes.formControl}>
          <FormInput name="accountNumber" value={accountNumber} description={<Translate text="Account number"/>} onChange={props.onChange}  />
        </FormControl>
        <FormControl className={classes.formControl}>
          <GetBankCode country="SG" name="bankCode" onChange={props.onChange} value={bankCode}/>
        </FormControl>
      </React.Fragment>
  );
}

export function HongkongRecipient (props){
  const classes = useStyles();
  const accountNumber = props.accountNumber ? props.accountNumber : '';
  const bankCode = props.bankCode ? props.bankCode : '';
  return(
    <React.Fragment>
      <FormControl className={classes.formControl}>
        <FormInput
          name="accountNumber"
          value={accountNumber}
          description={<Translate text="Account number"/>}
          onChange={props.onChange}  
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <GetBankCode country="HK" name="bankCode" onChange={props.onChange} value={bankCode}/>
      </FormControl>
    </React.Fragment>
  );
}


export function CzechLocalRecipient (props){
  const classes = useStyles();
  const accountNumber = props.accountNumber ? props.accountNumber : '';
  const bankCode = props.bankCode ? props.bankCode : '';
  return(
      <React.Fragment>
        <FormControl className={classes.formControl}>
          <FormInput name="accountNumber" value={accountNumber} description={<Translate text="Account number"/>} onChange={props.onChange}  />
        </FormControl>
        <FormControl className={classes.formControl}>
          <FormInput name="bankCode" value={bankCode} description="Bank code" onChange={props.onChange}  />
        </FormControl>
      </React.Fragment>
  );
}

export function BangladeshRecipient (props){
  const classes = useStyles();
  const accountNumber = props.accountNumber ? props.accountNumber : '';
  const bankCode = props.bankCode ? props.bankCode : '';
  const branchCode = props.branchCode ? props.branchCode : '';

  return(
      <React.Fragment>
        <FormControl className={classes.formControl}>
          <FormInput
            default={props.default}
            name="accountNumber"
            value={props.accountNumber}
            description={<Translate text="Account number"/>}
            onChange={props.onChange} 
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <GetBankCode
            country="BD"
            name="bankCode"
            description={<Translate text="Bank code"/>}
            onChange={props.onChange}
            value={bankCode}
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <GetBranchCode
            country="BD"
            name="branchCode"
            description={<Translate text="Branch code"/>}
            onChange={props.onChange}
            value={branchCode}
            bankCode={bankCode}
          />
        </FormControl>
      </React.Fragment>
  );
}

export function ChineseCardRecipient (props){
  const classes = useStyles();
  const cardNumber = props.cardNumber ? props.cardNumber : '';
  return(
    <FormControl className={classes.formControl}>
      <FormInput name="cardNumber" value={cardNumber} description="UnionPay card number" onChange={props.onChange}  />
    </FormControl>
  );
}

export function VietnamEarthportRecipient (props){
  const classes = useStyles();
  const accountNumber = props.accountNumber ? props.accountNumber : '';
  const bankCode = props.bankCode ? props.bankCode : '';
  const branchCode = props.branchCode ? props.branchCode : '';

  return(
    <React.Fragment>
      <FormControl className={classes.formControl}>
        <FormInput
          name="accountNumber"
          value={accountNumber}
          description={<Translate text="Account number"/>}
          onChange={props.onChange}
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <GetBankCode
          country="VN"
          name="bankCode"
          description={<Translate text="Bank code"/>}
          onChange={props.onChange}
          value={bankCode}
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <GetBranchCode
          country="VN"
          name="branchCode"
          description={<Translate text="Branch code"/>}
          onChange={props.onChange}
          value={branchCode}
          bankCode={bankCode}
        />
      </FormControl>
    </React.Fragment>
  );
}

export function SwissLocalRecipient (props){
  const classes = useStyles();
  const accountNumber = props.accountNumber ? props.accountNumber : '';
  const branchCode = props.branchCode ? props.branchCode : '';
  return(
    <React.Fragment>
      <FormControl className={classes.formControl}>
        <FormInput
          name="accountNumber"
          value={accountNumber}
          description={<Translate text="Account number"/>}
          onChange={props.onChange}
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <FormInput
          name="branchCode"
          value={branchCode}
          description={<Translate text="Branch code"/>}
          onChange={props.onChange}  
        />
      </FormControl>
    </React.Fragment>
  );
}

export function MalaysianLocalRecipient (props){
  const classes = useStyles();
  const accountNumber = props.accountNumber ? props.accountNumber : '';
  const bankCode = props.bankCode ? props.bankCode : '';
  
  return(
    <React.Fragment>
      <FormControl className={classes.formControl}>
        <FormInput
          name="accountNumber"
          value={accountNumber}
          description={<Translate text="Account number"/>}
          onChange={props.onChange} 
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <GetBankCode
          country="MY"
          name="bankCode"
          description={<Translate text="Bank code"/>}
          onChange={props.onChange}
          value={bankCode}
        />
      </FormControl>
    </React.Fragment>
  );
}

export function ArgentinaRecipient (props){
  const classes = useStyles();
  const accountNumber = props.accountNumber ? props.accountNumber : '';
  const taxId = props.taxId ? props.taxId : '';
  
  return(
    <React.Fragment>
      <FormControl className={classes.formControl}>
        <FormInput name="accountNumber" value={accountNumber} description={<Translate text="Account number"/>} onChange={props.onChange}  />
      </FormControl>
      <FormControl className={classes.formControl}>
        <FormInput name="taxId" value={taxId} description={<Translate text="Tax ID"/>} onChange={props.onChange}  />
      </FormControl>
    </React.Fragment>
  );
}

export function BrazilRecipient (props){
  const classes = useStyles();
  const accountNumber = props.accountNumber ? props.accountNumber : '';
  const bankCode = props.bankCode ? props.bankCode : '';
  const branchCode = props.branchCode ? props.branchCode : '';
  const accountType = props.accountType ? props.accountType : '';
  const cpf = props.cpf ? props.cpf : '';
  
  return(
      <React.Fragment>
        <FormControl className={classes.formControl}>
          <FormInput name="accountNumber" value={accountNumber} description={<Translate text="Account number"/>} onChange={props.onChange}  />
        </FormControl>
        <FormControl className={classes.formControl}>
          <FormInput name="cpf" value={cpf} description={<Translate text="Tax registration number"/>} onChange={props.onChange}  />
        </FormControl>
        <FormControl className={classes.formControl}>
          <GetBankCode
            country="BR"
            name="bankCode"
            onChange={props.onChange}
            value={bankCode}
            description={<Translate text="Bank code"/>}
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <GetBranchCode
            country="BR"
            name="branchCode"
            onChange={props.onChange}
            value={branchCode}
            bankCode={bankCode}
            description={<Translate text="Branch code"/>}
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <FormDropdown 
            name="accountType"
            value={accountType}
            description="Account type"
            onChange={props.onChange}
            items={[{'key': 'CHECKING', 'value': 'Checking account'}, {'key': 'SAVINGS', 'value': 'Savings account'}]} 
          />
        </FormControl>
      </React.Fragment>
  );
}

export function ChileRecipient (props){
  const classes = useStyles();
  const accountNumber = props.accountNumber ? props.accountNumber : '';
  const bankCode = props.bankCode ? props.bankCode : '';
  const branchCode = props.branchCode ? props.branchCode : '';
  const accountType = props.accountType ? props.accountType : '';
  const rut = props.rut ? props.rut : '';
  
  return(
    <React.Fragment>  
      <FormControl className={classes.formControl}>
        <FormInput
          name="accountNumber"
          value={accountNumber}
          description={<Translate text="Account number"/>}
          onChange={props.onChange}
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <FormInput
          name="rut"
          value={rut}
          description={<Translate text="Rol ??nico Tributario"/>}
          onChange={props.onChange}
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <GetBankCode
          country="CL"
          name="bankCode"
          onChange={props.onChange}
          value={bankCode}
          description={<Translate text="Bank code"/>}
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <GetBranchCode
          country="CL"
          name="branchCode"
          onChange={props.onChange}
          value={branchCode}
          bankCode={bankCode}
          description={<Translate text="Branch code"/>}
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <FormDropdown 
          name="accountType"
          value={accountType}
          description={<Translate text="Account type"/>}
          onChange={props.onChange}
          items={[{'key': 'CHECKING', 'value': 'Checking account'}, {'key': 'SAVINGS', 'value': 'Savings account'}, {'key': 'CUENTA_VISTA', 'value': 'Cuenta vista'}]} 
        />
      </FormControl>
    </React.Fragment>
  );
}


export function EgyptLocalRecipient (props){
  const classes = useStyles();
  const accountNumber = props.accountNumber ? props.accountNumber : '';
  const bankCode = props.bankCode ? props.bankCode : '';
  
  return(
    <React.Fragment>
      <FormControl className={classes.formControl}>
        <FormInput
          name="accountNumber"
          value={accountNumber}
          description={<Translate text="Account number"/>}
          onChange={props.onChange} 
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <GetBankCode
          country="EG"
          name="bankCode"
          description={<Translate text="Bank code"/>}
          onChange={props.onChange}
          value={bankCode}
        />
      </FormControl>
    </React.Fragment>
  );
}

export function GhanaLocalRecipient (props){
  const classes = useStyles();
  const accountNumber = props.accountNumber ? props.accountNumber : '';
  const bankCode = props.bankCode ? props.bankCode : '';
  
  return(
    <React.Fragment>
      <FormControl className={classes.formControl}>
        <FormInput
          name="accountNumber"
          value={accountNumber}
          description={<Translate text="Account number"/>}
          onChange={props.onChange} 
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <GetBankCode
          country="GH"
          name="bankCode"
          description={<Translate text="Bank code"/>}
          onChange={props.onChange}
          value={bankCode}
        />
      </FormControl>
    </React.Fragment>
  );
}

export function KenyaLocalRecipient (props){
  const classes = useStyles();
  const accountNumber = props.accountNumber ? props.accountNumber : '';
  const bankCode = props.bankCode ? props.bankCode : '';
  
  return(
    <React.Fragment>
      <FormControl className={classes.formControl}>
        <FormInput
          name="accountNumber"
          value={accountNumber}
          description={<Translate text="Account number"/>}
          onChange={props.onChange} 
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <GetBankCode
          country="KE"
          name="bankCode"
          description={<Translate text="Bank code"/>}
          onChange={props.onChange}
          value={bankCode}
        />
      </FormControl>
    </React.Fragment>
  );
}

export function MexicanRecipient (props){
  const classes = useStyles();
  const clabe = props.clabe ? props.clabe : '';
  
  return(
    <React.Fragment>
      <FormControl className={classes.formControl}>
        <FormInput
          name="clabe"
          value={clabe}
          description={<Translate text="Clabe"/>}
          onChange={props.onChange} 
        />
      </FormControl>
    </React.Fragment>
  );
}

export function IndonesianRecipient (props){
  const classes = useStyles();
  const accountNumber = props.accountNumber ? props.accountNumber : '';
  const bankCode = props.bankCode ? props.bankCode : '';
  
  return(
    <React.Fragment>
      <FormControl className={classes.formControl}>
        <FormInput
          name="accountNumber"
          value={accountNumber}
          description={<Translate text="Account number"/>}
          onChange={props.onChange} 
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <GetBankCode
          country="ID"
          name="bankCode"
          description={<Translate text="Bank code"/>}
          onChange={props.onChange}
          value={bankCode}
        />
      </FormControl>
    </React.Fragment>
  );
}

export function JapaneseRecipient (props){
  const classes = useStyles();
  const accountNumber = props.accountNumber ? props.accountNumber : '';
  const bankCode = props.bankCode ? props.bankCode : '';
  const branchCode = props.branchCode ? props.branchCode : '';
  const accountType = props.accountType ? props.accountType : '';
  
  return(
      <React.Fragment>
        <FormControl className={classes.formControl}>
          <FormInput name="accountNumber" value={accountNumber} description={<Translate text="Account number"/>} onChange={props.onChange}  />
        </FormControl>
        <FormControl className={classes.formControl}>
          <GetBankCode
            country="JP"
            name="bankCode"
            onChange={props.onChange}
            value={bankCode}
            description={<Translate text="Bank code"/>}
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <GetBranchCode
            country="JP"
            name="branchCode"
            onChange={props.onChange}
            value={branchCode}
            bankCode={bankCode}
            description={<Translate text="Branch code"/>}
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <FormDropdown 
            name="accountType"
            value={accountType}
            description="Account type"
            onChange={props.onChange}
            items={[{'key': 'CHECKING', 'value': 'Checking account'}, {'key': 'CURRENT', 'value': 'Current account'}, {'key': 'SAVINGS', 'value': 'Savings account'}]} 
          />
        </FormControl>
      </React.Fragment>
  );
}


export function SriLankaRecipient (props){
  const classes = useStyles();
  const accountNumber = props.accountNumber ? props.accountNumber : '';
  const bankCode = props.bankCode ? props.bankCode : '';
  const branchCode = props.branchCode ? props.branchCode : '';
  
  return(
      <React.Fragment>
        <FormControl className={classes.formControl}>
          <FormInput name="accountNumber" value={accountNumber} description={<Translate text="Account number"/>} onChange={props.onChange}  />
        </FormControl>
        <FormControl className={classes.formControl}>
          <GetBankCode
            country="JP"
            name="bankCode"
            onChange={props.onChange}
            value={bankCode}
            description={<Translate text="Bank code"/>}
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <GetBranchCode
            country="JP"
            name="branchCode"
            onChange={props.onChange}
            value={branchCode}
            bankCode={bankCode}
            description={<Translate text="Branch code"/>}
          />
        </FormControl>
      </React.Fragment>
  );
}


export function MoroccoRecipient (props){
  const classes = useStyles();
  const accountNumber = props.accountNumber ? props.accountNumber : '';
  const bankCode = props.bankCode ? props.bankCode : '';
  
  return(
    <React.Fragment>
      <FormControl className={classes.formControl}>
        <FormInput
          name="accountNumber"
          value={accountNumber}
          description={<Translate text="Account number"/>}
          onChange={props.onChange} 
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <GetBankCode
          country="MA"
          name="bankCode"
          description={<Translate text="Bank code"/>}
          onChange={props.onChange}
          value={bankCode}
        />
      </FormControl>
    </React.Fragment>
  );
}


export function NigeriaRecipient (props){
  const classes = useStyles();
  const accountNumber = props.accountNumber ? props.accountNumber : '';
  const bankCode = props.bankCode ? props.bankCode : '';
  
  return(
    <React.Fragment>
      <FormControl className={classes.formControl}>
        <FormInput
          name="accountNumber"
          value={accountNumber}
          description={<Translate text="Account number"/>}
          onChange={props.onChange} 
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <GetBankCode
          country="NG"
          name="bankCode"
          description={<Translate text="Bank code"/>}
          onChange={props.onChange}
          value={bankCode}
        />
      </FormControl>
    </React.Fragment>
  );
}

export function NepalRecipient (props){
  const classes = useStyles();
  const accountNumber = props.accountNumber ? props.accountNumber : '';
  const bankCode = props.bankCode ? props.bankCode : '';
  
  return(
    <React.Fragment>
      <FormControl className={classes.formControl}>
        <FormInput
          name="accountNumber"
          value={accountNumber}
          description={<Translate text="Account number"/>}
          onChange={props.onChange} 
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <GetBankCode
          country="NP"
          name="bankCode"
          description={<Translate text="Bank code"/>}
          onChange={props.onChange}
          value={bankCode}
        />
      </FormControl>
    </React.Fragment>
  );
}



export function PeruRecipient (props){
  const classes = useStyles();
  const accountNumber = props.accountNumber ? props.accountNumber : '';
  const bankCode = props.bankCode ? props.bankCode : '';
  const accountType = props.accountType ? props.accountType : '';
  const idDocumentType = props.idDocumentType ? idDocumentType : '';
  const idDocumentNumber = props.idDocumentNumber ? idDocumentNumber : '';
  const phoneNumber = props.phoneNumber ? phoneNumber : '';
  
  return(
    <React.Fragment>
      <FormControl className={classes.formControl}>
        <FormInput
          name="accountNumber"
          value={accountNumber}
          description={<Translate text="Account number"/>}
          onChange={props.onChange} 
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <GetBankCode
          country="PE"
          name="bankCode"
          description={<Translate text="Bank code"/>}
          onChange={props.onChange}
          value={bankCode}
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <FormDropdown 
          name="accountType"
          value={accountType}
          description="Account type"
          onChange={props.onChange}
          items={[{'key': 'CHECKING', 'value': 'Checking account'}, {'key': 'SAVINGS', 'value': 'Savings account'}]} 
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <FormDropdown 
          name="idDocumentType"
          value={idDocumentType}
          description={<Translate text="ID document type"/>}
          onChange={props.onChange}
          items={[
            {'key': 'DNI', 'value': 'National Identity Document'},
            {'key': 'RUC', 'value': 'Tax ID number (RUC)'},
            {'key': 'C_EXT', 'value': 'Carnet de Extranjer??a'},
            {'key': 'PASSP', 'value': 'Passport'}
          ]} 
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <FormInput
          name="idDocumentNumber"
          value={idDocumentNumber}
          description={<Translate text="ID document number"/>}
          onChange={props.onChange} 
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <FormInput
          name="phoneNumber"
          value={phoneNumber}
          description={<Translate text="Phone number"/>}
          onChange={props.onChange} 
        />
      </FormControl>
    </React.Fragment>
  );
}


export function PhilippinesRecipient (props){
  const classes = useStyles();
  const accountNumber = props.accountNumber ? props.accountNumber : '';
  const bankCode = props.bankCode ? props.bankCode : '';
  
  return(
    <React.Fragment>
      <FormControl className={classes.formControl}>
        <FormInput
          name="accountNumber"
          value={accountNumber}
          description={<Translate text="Account number"/>}
          onChange={props.onChange} 
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <GetBankCode
          country="PH"
          name="bankCode"
          description={<Translate text="Bank code"/>}
          onChange={props.onChange}
          value={bankCode}
        />
      </FormControl>
    </React.Fragment>
  );
}


export function SouthAfricaRecipient (props){
  const classes = useStyles();
  const accountNumber = props.accountNumber ? props.accountNumber : '';
  const swiftCode = props.swiftCode ? props.swiftCode : '';
  
  return(
    <React.Fragment>
      <FormControl className={classes.formControl}>
        <FormInput
          name="accountNumber"
          value={accountNumber}
          description={<Translate text="Account number"/>}
          onChange={props.onChange} 
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <GetBankCode
          country="ZA"
          name="swiftCode"
          description={<Translate text="Bank code"/>}
          onChange={props.onChange}
          value={swiftCode}
        />
      </FormControl>
    </React.Fragment>
  );
}

export function BotswanaLocalRecipient (props){
  const classes = useStyles();
  const accountNumber = props.accountNumber ? props.accountNumber : '';
  const bankCode = props.bankCode ? props.bankCode : '';
  const branchCode = props.branchCode ? props.branchCode : '';
  
  return(
    <React.Fragment>
      <FormControl className={classes.formControl}>
        <FormInput
          name="accountNumber"
          value={accountNumber}
          description={<Translate text="Account number"/>}
          onChange={props.onChange} 
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <GetBankCode
          country="BW"
          name="bankCode"
          description={<Translate text="Bank code"/>}
          onChange={props.onChange}
          value={bankCode}
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <GetBranchCode
          country="BW"
          name="branchCode"
          description={<Translate text="Branch code"/>}
          onChange={props.onChange}
          value={branchCode}
          bankCode={bankCode}
        />
      </FormControl>
    </React.Fragment>
  );
}


export function WestAfricanLocal (props){
  const classes = useStyles();
  const bban = props.bban ? props.bban : '';
  
  return(
    <React.Fragment>
      <FormControl className={classes.formControl}>
        <FormInput
          name="bban"
          value={bban}
          description={<Translate text="BBAN"/>}
          onChange={props.onChange} 
        />
      </FormControl>
    </React.Fragment>
  );
}



export function NotAvaialableRecipient(props){
  const classes = useStyles();
  return(
    <FormControl className={classes.formControl}>
      This recipient type is not yet avaialble.
    </FormControl>
  );
}

