import { Button, Grid, TextField, Snackbar, Alert } from "@mui/material";
import React, { createRef, useState, useEffect } from "react";
import copy from "copy-to-clipboard";

function CopyToClipboard() {
  const [copyState, setCopyState] = useState(false);

  const copyToClipboard = () => {
    copy(window.location.href);
    setCopyState(true);
  };

  const handleCloseSnackbar = (event, reason) => {
    console.log(reason);
    if (reason === "clickaway") {
      return;
    }

    setCopyState(false);
  };

  return (
    <div>
      <Grid container alignItems="center" columnSpacing={1}>
        <Grid item xs={9} sm={10} justifyContent="flex-end">
          <TextField
            fullWidth
            variant="filled"
            InputProps={{
              readOnly: true,
            }}
            defaultValue={`${window.location.href}`}
            label="Share link"
          />
        </Grid>
        <Grid item xs={3} sm={2}>
          <Button
            size="large"
            sx={{ padding: "15px", width: "100%" }}
            onClick={copyToClipboard}
          >
            Copy
          </Button>
        </Grid>
      </Grid>
      <Snackbar
        open={copyState}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: "100%" }}
        >
          Successfully Copied to Clipboard!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default CopyToClipboard;
