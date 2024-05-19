import propTypes from 'prop-types'

const Product =({id, title, description, price, image,  deleteProduct, editproduct}) => {

    return(
       
        <div className='pro' style={{border: '1px solid',
        margin: 16,
        padding: 16,
        textAlign: "center"
        }}>
            
         <img style={{width: 210, height: 300}} src={image} alt= {title} /> 
         <h3>{title}</h3>
         <h4>$ {price}</h4>
         <p>{description}</p>
         <button onClick={() => deleteProduct (id)} >Delete</button>
         <br/> <br/>
         <button onClick={() => editproduct (id)}>Edit</button>
           </div>
    )
}

Product.prototype ={
    id: propTypes.number, 
    title: propTypes.string,
    discription: propTypes.string,
    price: propTypes.number,
    image: propTypes.string,
    deleteProduct: propTypes.func,
    editproduct: propTypes.func,
};
export default Product;