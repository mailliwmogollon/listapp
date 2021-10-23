import { useState } from "react";
import { SaveProductName } from '../../firebase/Api';

function AddItem() {

    const [productName, setProductName] = useState( null );

    const saveProduct = () => {
        SaveProductName(productName);
    }

    return (
        <div>
            <input type="text" onChange={ e => setProductName(e.target.value)}/>
            <button onClick={saveProduct}>AddItem</button>
        </div>
    );
}

export default AddItem;