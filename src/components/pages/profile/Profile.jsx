import { Alert, Box, Button, MenuItem, Snackbar, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const emailreg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonereg = /^(?:\+?\d{1,3}[-.\s]?)?(?:\(?\d{1,4}?\)?[-.\s]?)(?:\d{1,4}[-.\s]?){1,2}\d{1,9}$/;
const Profile = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
    handleClick();
  };
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true)
  }
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);

  };
  const data = [
    {
      value: 'Admin',
      label: 'Admin',
    },
    {
      value: 'Manager',
      label: 'Manager',
    },
    {
      value: 'User',
      label: 'User',
    },
  ];



  return (
    <div>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ display: "flex", flexDirection: "column", gap: "15px" }}
        noValidate
        autoComplete="off"
      >
        <Stack direction={"row"} sx={{ gap: "10px" }}>
          <TextField
            sx={{ flex: 1 }}
            label="First Name"
            variant="filled"
            {...register('firstName', { required: true, minLength: 3 })}
            error={Boolean(errors.firstName)}
            helperText={errors.firstName ? "First name is required" : ""}
          />
          <TextField
            sx={{ flex: 1 }}
            label="Last Name"
            variant="filled"
            {...register('lastName', { required: true, minLength: 3 })}
            error={Boolean(errors.lastName)}
            helperText={errors.lastName ? "Last name is required" : ""}
          />
        </Stack>
        <TextField
          label="Email"
          variant="filled"
          //to make the label required 
          {...register('email', { pattern: emailreg, required: true })}
          error={Boolean(errors.email)}
          //to show message under label if there error
          helperText={errors.email ? "Please Enter a vaild Email" : ""}
        />
        <TextField
          label="Contact Number"
          variant="filled"
          //regular expression for mobile 
          {...register('contactNumber', { pattern: phonereg, required: true })}
          error={Boolean(errors.contactNumber)}
          helperText={errors.contactNumber ? "Please Enter a Correct Number" : ""}

        />
        <TextField
          label="Address 1"
          variant="filled"
          {...register('address1')}

        />
        <TextField
          label="Address 2"
          variant="filled"
          {...register('address2')}
        />
        <TextField
          id="filled"
          select
          label="Role"
          defaultValue="User"
          variant="filled"
          {...register('role')}
        >
          {data.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            type='submit'
            variant='contained'
            sx={{ my: "1 0px", textTransform: "capitalize" }}
          >
            Create New User
          </Button>
          <Snackbar
            open={open}
            onClose={handleClose}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            autoHideDuration={3000}
          >
            <Alert onClose={handleClose}
              severity='info'
              sx={{ width: "100%" }} >
              Account Created Successfully
            </Alert>
          </Snackbar>
        </Box>
      </Box>
    </div>
  );
};

export default Profile;