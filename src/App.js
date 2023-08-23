import "./App.css";
import { Button, Typography } from "@mui/material";

function App() {
  return (
    <>
      <div>
        <Typography variant="h1" color="success" sx={{ margin: "30px" }}>
          Prakash SC
        </Typography>
        <Button variant="contained">Click Me</Button>
        <Button variant="text">Click Me</Button>
        <Button onClick={() => alert("clicked")} variant="outlined">
          Click Me for action
        </Button>
        <br />
        <br />
      </div>
    </>
  );
}

export default App;
