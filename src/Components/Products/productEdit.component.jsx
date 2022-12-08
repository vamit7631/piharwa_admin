import { useState, useEffect } from 'react';
import CommonComp from '../Common/common.component'
import Title from '../Title/title.component';
import { getAllCategories } from '../../services/categoryservice';
import { getSingleProduct } from '../../services/productservice'
import { Box, Grid, FormControl, FormControlLabel, InputLabel, Select, MenuItem, Checkbox, Button, TextField, Paper, ListSubheader, Switch } from '@mui/material';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { Link, redirect, useNavigate, useParams } from 'react-router-dom';
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from 'draft-js';
import { TreeView, TreeItem } from '@mui/lab';
import FolderIcon from '@mui/icons-material/Folder';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';

const ProductEdit = () => {
    let pid = useParams();
    let productId = pid.id;
    var getInitialValues = () => {
        return {
            productTitle: "",
            productSKU: "",
            productCategoryID: "",
            price: "",
            currency: "inr",
            productDescription: "",
            allowDiscount: "",
            discountPercentage: "",
            productDetails: "",
            productRating: "",
            OverallRating: ""

        }

    }


    useEffect(() => {
        const getCategoriesFn = async () => {
            const response = await getAllCategories();
            setCategories(response.data)
        }
        getCategoriesFn();

        const getSingleProductFn = async () => {
            const response = await getSingleProduct(productId);
            const productData = response.data
            if (response.status == true) {
                let formValues = getInitialValues();
                formValues.productTitle = productData.productTitle
                formValues.productSKU = productData.productSKU
                formValues.price = productData.price
                setCurrencyVal(productData.currency)
                formValues.currency = productData.currency
                setproductDetails(productData.productDetails)
                formValues.productDetails = productData.productDetails
                setFormData(formValues)
            }

        }
        getSingleProductFn(productId);

    }, [])






    var initialValues = getInitialValues();
    const [formData, setFormData] = useState(initialValues);

    const multiCurrencyOption = [
        { title: "inr", value: "inr" },
        { title: "usd", value: "usd" }
    ];

    const [currencyVal, setCurrencyVal] = useState(
        multiCurrencyOption[0].title
    )

    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
    )

    const onEditorStateChange = (editorState) => {
        const contentState = editorState.getCurrentContent();
        //  console.log('content state', contentState);
        setEditorState(editorState)
        setFormData((data) => ({
            ...data,
            // productDescription: JSON.stringify(editorState.getCurrentContent()),
            productDescription: JSON.stringify(convertToRaw(editorState.getCurrentContent()))
        })
        )
    }


    const [availableStock, setAvailableStock] = useState(true);

    const [productDetails, setproductDetails] = useState([
        { quantity: '', sizes: '', stockAvailability: true }
    ]);


    const addFields = (event) => {
        let newfield = { quantity: '', sizes: '', stockAvailability: true }
        setproductDetails([...productDetails, newfield])
    }

    const removeFields = (index) => {
        let data = [...productDetails];
        data.splice(index, 1)
        setproductDetails(data)
    }


    const handleFormChange = (index, event) => {
        let data = [...productDetails];
        if (data[index] && event.target.id == 'quantity') {
            data[index]["quantity"] = event.target.value;
        } else if (data[index] && event.target.id == 'sizes') {
            data[index]["sizes"] = event.target.value;
        }
        else if (data[index] && event.target.id == 'stockAvailability') {
            data[index]["stockAvailability"] = event.target.checked;
        }
        setproductDetails(data);
        setFormData((data) => ({
            ...data,
            productDetails: productDetails,
        })
        )
    }


    const [checked, setChecked] = useState(false);
    const [categories, setCategories] = useState([]);
    // const [catCheckBox, setCatCheckBox] = useState(false)
    const [categoryVal, setCategoryVal] = useState();

    const handleChange = (event) => {
        setCategoryVal(event.target.value)
        setFormData((data) => ({
            ...data,
            productCategoryID: event.target.value,
        })
        )
    }




    const onDataSubmit = async (event) => {
        event.preventDefault();
        // let response = await addProductFn(formData, accessToken)
        // if (response.status === true) {
        //   navigate('/products');
        // }

    }


    return (
        <CommonComp >
            <Grid item xs={12} md={8} lg={8}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                    <Title>UPDATE Products</Title>
                    <Box component="form" noValidate sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="productTitle"
                                    label="Product Title"
                                    name="productTitle"
                                    value={formData.productTitle || ""}
                                    onChange={(event) => {
                                        const tempVal = event.target.value;
                                        setFormData((data) => ({
                                            ...data,
                                            productTitle: tempVal,
                                        })
                                        )
                                    }
                                    }
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="productSKU"
                                    label="Product SKU"
                                    name="productSKU"
                                    value={formData.productSKU || ""}
                                    onChange={(event) => {
                                        const tempVal = event.target.value;
                                        setFormData((data) => ({
                                            ...data,
                                            productSKU: tempVal,
                                        })
                                        )
                                    }
                                    }
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="price"
                                    label="Product Price"
                                    name="price"
                                    value={formData.price || ""}
                                    onChange={(event) => {
                                        const tempVal = event.target.value;
                                        setFormData((data) => ({
                                            ...data,
                                            price: tempVal,
                                        })
                                        )
                                    }
                                    }
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth>
                                    <InputLabel id="helper-label">Currency</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="productCurrency"
                                        name="currency"
                                        value={currencyVal}
                                        label="Currency" >
                                        {multiCurrencyOption.map((item, index) => (
                                            <MenuItem value={item.value}
                                                onClick={() => {
                                                    setCurrencyVal(item.value)
                                                    setFormData((data) => ({
                                                        ...data,
                                                        currency: item.value,
                                                    })
                                                    )
                                                }}
                                            >{item.title}</MenuItem>
                                        ),
                                        )}


                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} >
                                <Editor
                                    editorStyle={{ "border": "1px solid #eee", "minHeight": "400px" }}
                                    editorState={editorState}
                                    toolbarClassName="toolbarClassName"
                                    wrapperClassName="wrapperClassName"
                                    editorClassName="editorClassName"
                                    name="productDescription"
                                    onEditorStateChange={onEditorStateChange}
                                // onChange={setEditorState}
                                />
                            </Grid>

                        </Grid>
                        {productDetails.map((input, index) => {
                            return (
                                <Grid container spacing={2} mt={2} key={index}>
                                    <Grid item xs={3}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="quantity"
                                            type="number"
                                            label="Quantity"
                                            name="quantity"
                                            value={productDetails[index].quantity}
                                            onChange={event => handleFormChange(index, event)}
                                        />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="sizes"
                                            type="text"
                                            label="Size"
                                            name="sizes"
                                            value={productDetails[index].sizes}
                                            onChange={event => handleFormChange(index, event)}
                                        />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <FormControlLabel
                                            control={
                                                <Switch id="stockAvailability" name="stockAvailability" checked={productDetails[index].stockAvailability} onChange={event => {
                                                    handleFormChange(index, event)
                                                    setAvailableStock(event.target.checked)
                                                }} />
                                            }
                                            label="Availability"
                                            labelPlacement="top"
                                        />
                                    </Grid>
                                    <Grid item xs={1} mt={3}>
                                        <AddCircleOutlineRoundedIcon onClick={addFields} />
                                    </Grid>
                                    <Grid item xs={1} mt={3}>
                                        <DeleteOutlinedIcon onClick={removeFields} />
                                    </Grid>
                                </Grid>
                            )
                        })
                        }

                        <Grid container spacing={2} mt={2}>
                            <Grid item xs={12} sm={6} mt={2} mb={2}>
                                <FormControlLabel
                                    control={
                                        <Checkbox checked={checked}
                                            onChange={() => {
                                                setChecked(!checked)
                                            }}
                                            name="allowDiscount" />
                                    }
                                    label="Allow Discount"
                                />

                            </Grid>

                            {checked &&
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="discountPercentage"
                                        type="number"
                                        label="Product Percentage"
                                        name="discountPercentage"
                                        autoComplete="product-percentage"
                                        onChange={(event) => {
                                            const tempVal = event.target.value;
                                            setFormData((data) => ({
                                                ...data,
                                                discountPercentage: tempVal,
                                            })
                                            )
                                        }
                                        }
                                    />
                                </Grid>
                            }


                        </Grid>


                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={onDataSubmit}
                        >
                            Submit
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                {/* <Link to={`/signin`} variant="body2">
                  Already have an account? Sign in
                </Link> */}
                            </Grid>
                        </Grid>
                    </Box>
                </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
                <Paper
                    sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >

                    <TreeView
                        aria-label="file system navigator"
                        defaultCollapseIcon={<FolderOpenIcon color="action" />}
                        defaultExpandIcon={<FolderIcon color="action" />}
                        sx={{ flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
                    >
                        {categories.map((item, index) => (
                            <TreeItem nodeId={item._id} label={item.categoryTitle}>
                                {item.children.map((c, i) => (c.children.length > 0 ?
                                    <TreeItem nodeId={c._id} label={c.categoryTitle}>
                                        {c.children.map((x, u) => (
                                            <TreeItem nodeId={x._id} label={
                                                <FormControlLabel control={<Checkbox value={x._id} onChange={handleChange} />} key={x._id} label={x.categoryTitle} />
                                            }></TreeItem>
                                        ))
                                        }

                                    </TreeItem>
                                    : <TreeItem nodeId={c._id} label={<FormControlLabel control={<Checkbox value={c._id} onChange={handleChange} />} key={c._id} label={c.categoryTitle} />}></TreeItem>))}
                            </TreeItem>
                        ))}
                    </TreeView>



                </Paper>
            </Grid>


        </CommonComp>
    )

}

export default ProductEdit;