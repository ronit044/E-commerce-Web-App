import { React, useState, useEffect } from "react";
import Axios from "../../Axios";
import ProductTile from "./Product";

export default function ProductDisplay() {
    const [Products, setProduct] = useState([]);
    useEffect(() => {
        async function gData(){
        await Axios.get("/productData").then((r) => {
            setProduct(r.data);
        });
    }
    gData();
    }, []);

    return <div>
        {Products.map((p) => (
            <ProductTile
                id={p._id}
                price={p.price}
                name={p.name}
                img={p.img}
            />
        )
        )
        }

    </div>
}
