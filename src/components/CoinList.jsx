import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Menu, Stack, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

export default function CoinList() {
  const [coin, setCoin] = React.useState();
  const [coins, setCoins] = useState([])
  const [loading, setLoading] = useState(false)
  const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"


  const renderval = <Stack spacing={1} direction={"row"} >
    <img style={{ height: "25px", width: "25px", padding: "2px" }} src={"https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400"} />
    <Typography >{"BTC"}</Typography>
  </Stack>


  const handleChange = (event) => {
    setCoin(event.target.value);
  };
  const fetchCoins = async () => {
    try {
      setLoading(true)
      let result = await fetch(url, {
        // method:"GET",
        headers: {
          "mode": 'no-cors',
          "cache-control": "max-age=30,public,must-revalidate,s-maxage=30",
          "content-type": "application/json",
          'Access-Control-Allow-Origin': "*"
        }
      })
      result = await result.json()
      setCoins(result)
      setLoading(false)
      console.log(result)

    } catch (error) {
      console.log(error)
    }
    finally {
      setLoading(false)
    }
  }
  return (
    <Box sx={{ minWidth: 135 }} height={"50px"}>
      <FormControl fullWidth sx={{ height: "50px" }}>
        {!coin && <InputLabel id="coin-label">

          <MenuItem value={"BTC"}>
            <Stack spacing={1} direction={"row"} >
              <img style={{ height: "25px", width: "25px", padding: "2px" }} src={"https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400"} />
              <Typography >{"BTC"}</Typography>
            </Stack>
          </MenuItem>

        </InputLabel>}

        <Select
          sx={{
            boxShadow: 'none',
            '.MuiOutlinedInput-notchedOutline': { border: 0 }
          }}
          labelId="coin-label"
          id="coin-label"
          defaultChecked={"BTC"}
          onChange={handleChange}
          onFocus={fetchCoins}
          value={coin}
        >



          {
            loading ?


              (<MenuItem disabled selected value={""} padding={2}> ...
                <CircularProgress />
              </MenuItem>)


              :
              coins.map((item) => {
                return (
                  <MenuItem key={item.image} value={(item.symbol).toUpperCase()} padding={2}>
                    <Stack spacing={1} direction={"row"} >
                      <img style={{ height: "25px", width: "25px", padding: "2px" }} src={item.image} />
                      <Typography >{(item.symbol).toUpperCase()}</Typography>
                    </Stack>
                  </MenuItem>
                )

              })

          }
        </Select>
      </FormControl>
    </Box>
  );
}