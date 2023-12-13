import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../redux/features/counter/counterslice";

const HomePages = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    // console.log(count);


    // const handleIncrement = () => {
    //     dispatch(increment());
    // };

    // const handleDecrement = () => {
    //     dispatch(decrement());
    // };

    return (
        <div>
                <h1>Counter: {count}</h1>
            <div>
                {/* <button aria-label="Decrement value" onClick={handleIncrement}>Kurang</button> */}
                <button aria-label="Decrement value" onClick={(()=> dispatch(increment()))}>Kurang</button>
                {/* <button aria-label="Increment value" onClick={handleDecrement}>Tambah</button> */}
                <button aria-label="Increment value" onClick={(()=> dispatch(decrement()))}>Tambah</button>
            </div>
        </div>
    );
}

export default HomePages;