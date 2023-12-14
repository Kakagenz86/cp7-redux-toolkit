import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../redux/features/counter/counterslice";
import { useState } from "react";
import { getRegister } from "./../../redux/features/register/registerslice";


const HomePages = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    // const { error, success } = useSelector((state) => state.message);



    // const handleIncrement = () => {
    //     dispatch(increment());
    // };

    // const handleDecrement = () => {
    //     dispatch(decrement());
    // };

    const handleRegister = () => {
        const payload = {
            name: name,
            username: username,
            password: password,
            roleId: 1
        };

        dispatch(getRegister(payload));
    };
    

    return (
        <div>
                <h1>Counter: {count}</h1>
            <div>
                {/* <button aria-label="Decrement value"  onClick={handleDecrement}>Kurang</button> */}
                <button aria-label="Decrement value" onClick={(()=> dispatch(decrement()))}>Kurang</button>
                {/* <button aria-label="Increment value" onClick={handleIncrement}>Tambah</button> */}
                <button aria-label="Increment value" onClick={(()=> dispatch(increment()))}>Tambah</button>
            </div>
            <div>
                <input type="text" onChange={((e) => setName(e.target.value))} placeholder="name"/>
                <input type="text" onChange={((e) => setUsername(e.target.value))} placeholder="username"/>
                <input type="text" onChange={((e) => setPassword(e.target.value))} placeholder="password" />
                <button onClick={handleRegister}>Register</button>
            </div>
        </div>
    );
}

export default HomePages;