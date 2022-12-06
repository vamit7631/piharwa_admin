import { useState, useEffect } from 'react';
import moment from 'moment';
import BorderColorTwoToneIcon from '@mui/icons-material/BorderColorTwoTone';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { Link, redirect, useNavigate } from 'react-router-dom';
import Title from '../Title/title.component';
import { Table, TableBody, TableCell, TableHead, TableRow, Grid, Paper, Button, Box } from '@mui/material';
import { getAllProducts } from '../../services/productservice';
import CommonComp from '../Common/common.component'



const ProductList = () => {
  let accessToken = sessionStorage.getItem("accessToken")
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await getAllProducts(accessToken);
      setProducts(response.data)
    }
    getProducts();
  }, [])

  return (
    <CommonComp >
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          <Grid container spacing={4} mb={4}>
            <Grid item xs={10}>
              <Title>Products</Title>
            </Grid>
            <Grid item xs={2}>
              <Link to={`/add-new`} style={{ textDecoration: 'none' }}>
                <Button variant="outlined">ADD NEW</Button>
              </Link>
            </Grid>

          </Grid>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>TITLE</TableCell>
                <TableCell>SKUID</TableCell>
                <TableCell>PRICE</TableCell>
                <TableCell>CREATED AT</TableCell>
                <TableCell>Edit</TableCell>
                <TableCell>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>  {products.map((product) => (
              <TableRow key={product.productId}>
                <TableCell>{product.productTitle}</TableCell>
                <TableCell>{product.productSKU}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{moment(product.createdAt).format('DD-MM-YYYY')}</TableCell>
                <TableCell><BorderColorTwoToneIcon /></TableCell>
                <TableCell><DeleteOutlinedIcon /></TableCell>
              </TableRow>
            )
            )} </TableBody>
          </Table>

        </Paper>
      </Grid>



    </CommonComp>

  );
}



export default ProductList;