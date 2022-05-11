import {React} from "react"
import "./Bottom_header.css"


export const Bottom_header = () =>{



    return (
        <div className="Bottom_header_main">
            <div className="top_header">
                <span>Clothing</span>
                <span>Shoes</span>  
                <span>Accessories</span>   
                <span>Bags</span>   
                <span>Jewelry</span>   
                <span>Brands</span>   
                <span>All Women's</span>   
                <img src="https://cdn3.iconfinder.com/data/icons/flat-pro-basic-set-2-1/32/tag-red-512.png" />
                <span>Sale</span>   


            </div>

            <div className="porduct_list">
                <div className="inner_product_list">
                    <div className="inner_product">
                        <ul>
                        <li>All Clothing</li>
                        <li>Beachwear</li>
                        <li>Coats</li>
                        <li>Dresses</li>
                        <li>Hosiery</li>
                        <li>Jackets</li>
                        <li>Jeans</li>
                        <li>Jumpsuits</li>
                        <li>Knitwear</li>
                        <li>Lingerie</li>
                        <li>Nightwear</li>
                        <li>+ More</li>
                        </ul>
                    </div>
                    <div className="inner_product2">

                    </div>
                </div>
            </div>


        </div>
    )

}