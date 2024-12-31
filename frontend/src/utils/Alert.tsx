import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Button from './Button';

export default function Alerts({ errorMsg }){
   return (
      <Alert severity="error">
         <AlertTitle>Error</AlertTitle>
         {errorMsg}
         <Button color={'white'} text={"X"} handler={() => {}} />
      </Alert>
   )
}


