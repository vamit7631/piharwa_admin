import { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Grid, Paper, Button, Box } from '@mui/material';
import Title from '../Title/title.component';
import CommonComp from '../Common/common.component';
import { getAllBuyers } from '../../services/buyerservice'


const BuyerList = () => {
    let accessToken = sessionStorage.getItem("accessToken")
    const [buyersObj, setBuyersObj] = useState([]);

    useEffect(() => {
        const getBuyers = async () => {
            const response = await getAllBuyers(accessToken);
            setBuyersObj(response.data.buyerList)
        }

        getBuyers();
    }, [])

    return (
        <CommonComp >
            <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                    <Grid container spacing={4} mb={4}>
                        <Grid item xs={10}>
                            <Title>Buyers</Title>
                        </Grid>
                    </Grid>
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>S.NO</TableCell>
                                <TableCell>FIRSTNAME</TableCell>
                                <TableCell>LASTNAME</TableCell>
                                <TableCell>EMAIL</TableCell>
                                <TableCell>MOBILE NO.</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>  {buyersObj.map((buyer) => (
                            <TableRow key={buyer.user_id}>
                                <TableCell>1</TableCell>
                                <TableCell>{buyer.firstName}</TableCell>
                                <TableCell>{buyer.lastName}</TableCell>
                                <TableCell>{buyer.emailId}</TableCell>
                                <TableCell>{buyer.mobileNo}</TableCell>
                            </TableRow>
                        )
                        )} </TableBody>
                    </Table>
                </Paper>
            </Grid>
        </CommonComp>
    )
}

export default BuyerList;