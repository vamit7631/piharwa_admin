import { useState, useEffect } from 'react';
import moment from 'moment';
import BorderColorTwoToneIcon from '@mui/icons-material/BorderColorTwoTone';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import Title from '../Title/title.component';
import { Table, TableBody, TableCell, TableHead, TableRow, Grid, Paper } from '@mui/material';
import { getAllProducts } from '../../services/productservice';
import CommonComp from '../Common/common.component'



const ProductList = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await getAllProducts();
      setProducts(response.data)
    }
    getProducts();
  }, [])

  return (
    <CommonComp >
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          <Title>Products</Title>
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