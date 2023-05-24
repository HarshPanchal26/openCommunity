import { useEffect, useState } from 'react'
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import CustomizedSnackbars from '../Alert/Alert.jsx';

export default function SignInForUser() {

interface AlertRuel {
  display: Boolean,
  severityType: 'error' | 'warning' | 'info' | 'success',
  message: String
}
  const [alert , setAlert] = useState<AlertRuel>({
    display: false,
    severityType: 'error',
    message: ''
  })

  // const handleSignInForUser = () => {
  //   // let validate = validationForUserSignIn(objForUserSignInData);
  //   console.log("Chck", validate)
  //   if (validate.res) {
  //     setAlert({
  //       display: validate.res,
  //       severityType: 'error',
  //       message: validate.message
  //     })
  //   }
  //   else {
  //     setAlert({
  //       display: false,
  //       severityType: 'error',
  //       message: ''
  //     })

  //     //  Firebase things 
  //     // signInForUserInDataBase()
  //   }
  // }

  const handleSignInData = (event : any) => {
    // setUserSignInData({
    //   ...dataForUserSignIn,
    //   [event.target.name]: event.target.value
    // })
    // objForUserSignInData[event.target.name] = event.target.value
  }

  useEffect(() => {
    // setUserSignInData(objForUserSignInData)
  }, [])

  return (
    <div className='User-from flex flex-col'>
      <div className='alert-box absolute top-0 z-10 left-1 w-1/3'>
        {alert.display && (<CustomizedSnackbars status={alert.severityType} message={alert.message} />)}
      </div>
      <div className='text-center'>
        <FormControl fullWidth className='my-5'>
          <TextField
            className='my-5'
            label="First Name"
            type='First Name'
            name='First_Name'
            onChange={handleSignInData}
            style={{
              margin: '10px 0px'
            }}
            // value={objForUserSignInData.First_Name}
          />
          <TextField
            className='my-5'
            label="Last Name"
            type='Last Name'
            name='Last_Name'
            onChange={handleSignInData}
            style={{
              margin: '10px 0px'
            }}
            // value={objForUserSignInData.Last_Name}
          />
          <TextField
            className='my-5'
            label="Email"
            type='email'
            name='Email'
            onChange={handleSignInData}
            style={{
              margin: '10px 0px'
            }}
            // value={objForUserSignInData.Email}
          />
          <TextField
            className='my-5'
            label="Password"
            type='password'
            name='Password'
            onChange={handleSignInData}
            style={{
              margin: '10px 0px'
            }}
            // value={objForUserSignInData.Password}
          />
          <TextField
            className='my-5'
            label="Confirm Password"
            name="Confirm_Password"
            type='password'
            style={{
              margin: '10px 0px'
            }}
            onChange={handleSignInData}
          />
        </FormControl>
      </div>
      <div className='my-auto space-x-5'>
        
        <Link to='/'>
          <Button variant='outlined' color='success'>Back</Button>
        </Link>
        <div className='my-auto'>
          <Button variant='contained' color='success'>Sign In</Button>
        </div>
      </div>
      </div>
      )
}
