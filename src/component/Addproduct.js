import React, {useState} from 'react';
import {storage, db} from '../config/config'


export const Addproducts = () => {

const [productName, setProductName] = useState('');
const [productPrice, setproductPrice] = useState();
const [productImg,setproductImg] = useState(null);
const [error, setError] = useState('');

const types = ['image/png', 'image/jpeg']

const productImgHandler =(e) =>{
    let selectedFile = e.target.files[0];
if(selectedFile && types.includes(selectedFile.type)){
    setproductImg(selectedFile);
    setError('');
}
else{
    setproductImg(null);
    setError('Please select a valid image type png or jpeg');
}
}

const addProduct = (e) =>{
    e.preventDefault();
    // console.log(productName,productPrice,productImg);
    const uploadTask = storage.ref('product.image/${productImg.name}').put(productImg);
    uploadTask.on('state_changed',snapshot=>{
        const progress = (snapshot.bytesTransferred/snapshot.totalBytes) * 100;
        console.log(progress);
    },err=>{
       setError(err.message)
    },()=>{
        storage.ref('product.image').child(productImg.name).getDownloadURL().then(url=>{
            db.collection('product').add({
                productName: productName,
                productPrice: Number(productPrice),
                productImg: url
            }).then(()=>{
                setProductName(' ');
                setproductPrice(0);
                setproductImg(' ');
                setError(' ');
                document.getElementById('file').value = '';
            }).catch(err=> setError(err.message));
        })
    })
}


    return(
        <div className='container'>
            <br/> 
            <h2>Add Products</h2>
            <hr/>
            <form autoComplete="off" className='form-group' onSubmit={addProduct}>
                <label for="product-name">Product Name</label>
                <br/>
                <input type="text" className='form-control' required 
                onChange={(e)=>setProductName(e.target.value)} value={productName} />
                <br/>
                <label for="product-price">Product Price</label>
                <br/>
                <input type="number" className='form-control' required
                 onChange={(e)=>setproductPrice(e.target.value)} value={productPrice} />
                 <br/>
                 <label htmlFor='product-img'>Product Image</label>
                 <br/>
                 <input type="file" className='form-control' onChange={productImgHandler} id='file' required
                  />
                  <br/>
           <button  type="submit" className='btn btn-success btn-md mybtn'>Add</button>
            </form>
            {error && <span>{error}</span>}
        </div>
    )
}