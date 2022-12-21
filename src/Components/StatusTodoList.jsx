import { CarCrash, Update } from "@mui/icons-material";
import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  CircularProgress,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import React, { useEffect, useState } from "react";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

export const StatusTodoList = () => {
  const [datatxt, setDatatxt] = useState("");
  const [data, setData] = useState(["Shaikh Faizan"]);
  const [status, setStattus] = useState("");
  const [con, setcon] = useState(false);
  const [indexnum, setindexnum] = useState(null);
  const [clear, setclear] = useState(false);
  const [pagin, setPagin] = useState(4);
  const [isup, setisup] = useState(false);
  console.log("====>", data);

  const handleDel = (index) => {
    if (window.confirm("Your Name Confirm Delete !!!")) {
      const Filtered = data.filter((item, elem) => elem !== index);
      setData(Filtered);
    }
  };

  const handleAdd = () => {
    if (con === true) {
      data.splice(indexnum, 1, datatxt);
      setcon(false);
      setindexnum(null);
    } else {
      setData([...data, datatxt]);
      // setTimeout(() => {
      //   setisup(false);
      // }, 2000);
    }
    setDatatxt("");
  };

  const handleUpdate = (item, ind) => {
    setDatatxt(item);
    setindexnum(ind);
    setcon(true);
  };

  const handleLess = () => {
    if (pagin > 5) {
      setPagin(pagin - 4);
    }
  };
  useEffect(() => {
    if (data.length == 1) {
      setStattus("#C70039 ");
    } else if (data.length == 5) {
      setStattus("#FF5733 ");
    } else {
      setStattus("#10808E");
    }
    setclear(datatxt.trim() !== "");
  }, [data, datatxt]);
  return (
    <div>
      <Card
        style={{
          border: `10px outset  ${status}`,
        }}
      >
        <CardContent>
          <Grid container spacing={1}>
            {/* {data.length + 1 ? <h1>Hellloooo</h1> : <CircularProgress />} */}
            {/* {isup ? <CircularProgress /> : isup + "hrllo"} */}
            <Grid item xl={9} lg={9} md={9} sm={9} xs={9}>
              <TextField
                variant="standard"
                label="Enter Todo"
                fullWidth
                value={datatxt}
                onChange={(e) => setDatatxt(e.target.value.toUpperCase())}
              />
            </Grid>
            <Grid item xl={3} lg={3} md={3} sm={3} xs={3}>
              <Button
                sx={{ height: "56px" }}
                disabled={!clear}
                fullWidth
                variant="contained"
                onClick={handleAdd}
              >
                {con ? "Update" : "ADD"}{" "}
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <br />
      <br />
      <Grid container spacing={3}>
        {data.length > 0 &&
          data.slice(pagin - 4, pagin).map((elem, index) => {
            return (
              <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                <Card>
                  <CardContent>
                    <Grid container spacing={2}>
                      <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                        <ul type="square">
                          <li>
                            <span
                              style={{
                                fontSize: "25px",
                                fontWeight: "bold",
                              }}
                            >
                              {elem}
                            </span>
                          </li>
                        </ul>
                      </Grid>
                      <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                        <Button
                          sx={{ margin: "3px" }}
                          variant="outlined"
                          fullWidth
                          color="error"
                          onClick={() => handleDel(index)}
                        >
                          <DeleteIcon />
                        </Button>{" "}
                        <br />
                        <Button
                          sx={{ margin: "3px" }}
                          variant="outlined"
                          fullWidth
                          onClick={() => handleUpdate(elem, index)}
                        >
                          <BorderColorIcon />
                        </Button>{" "}
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        <Grid item xl={2} lg={2} md={2} sm={2} xs={2}></Grid>
        {data.length > 4 && (
          <>
            {data.length > 0 && (
              <>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                  <Button variant="outlined" fullWidth onClick={handleLess}>
                    <ArrowCircleLeftIcon />
                  </Button>{" "}
                </Grid>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                  <Button
                    variant="outlined"
                    fullWidth
                    onClick={() => setPagin(pagin + 4)}
                  >
                    <ArrowCircleRightIcon />
                  </Button>{" "}
                </Grid>

                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                  Design by <b> @Shaikh-Faizan</b> <br />{" "}
                  <span style={{ fontSize: "13px" }}>
                    {" "}
                    PickupBiz Software Pvt Ltd.
                  </span>
                </Grid>
              </>
            )}
          </>
        )}
      </Grid>
    </div>
  );
};
