import { React, useState, useEffect } from "react";
import Axios from "../../Backend/API/Axios";
import ProductTile from "./Product";

export default function ProductDisplay() {
    const [Products, setProduct] = useState([]);
    useEffect(async () => {
        await Axios.get("/productData").then((r) => {
            setProduct(r.data);
        })
    }, []);

    return <div>
        {Products.map((p) => (
            <ProductTile
                price={p.price}
                name={p.name}
                img={p.img}
            />
        )
        )
        }

    </div>
}
