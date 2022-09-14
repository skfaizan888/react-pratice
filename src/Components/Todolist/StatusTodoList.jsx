
import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import React,{ useEffect, useState } from "react";


export const StatusTodoList=()=>{
  const [data, setData] = useState([]);
  const [datatxt, setDatatxt] = useState("");
  const [status, setStattus] = useState("");

  const handleDel = (index) => {
    const Filtered = data.filter((item, elem) => elem !== index);
    setData(Filtered);
  };

  const handleAdd = () => {
    datatxt.trim() !=""&&
    setData([...data, datatxt]);
    setDatatxt(' ')

  };

  useEffect(() => {
    if (data.length == 0) {
      setStattus("green");
    } else if (data.length == 2) {
      setStattus("blue");
    } else {
      setStattus("orange");
    }
  }, [data]);
  // console.log(status);
  return (
    <div >
        <Card>
            <CardContent>
        <Grid container spacing={2}>
        <Grid item xl={2} lg={2} md={2} sm={2} xs={2}>
      <div style={{ width: "100%", height: "100%", backgroundColor: status }}>
      </div>
        </Grid>
        <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
      <TextField variant="outlined" label="Enter Todo" fullWidth value={datatxt} onChange={(e) => setDatatxt(e.target.value)} />
        </Grid>
        <Grid item xl={2} lg={2} md={2} sm={2} xs={2}>
      <Button fullWidth variant="contained" onClick={handleAdd}>{datatxt.trim() != ""? "ADD":"Todo"} </Button>
        </Grid>
        </Grid>
 

      <ul>
        {data.map((elem, index) => {
            return <li onClick={() => handleDel(index)}> {elem} </li>;
        })}
      </ul>
        
                    </CardContent>
                </Card>
    </div>
  );
}
