import { useSelector, useDispatch} from "react-redux";
import { useEffect } from "react";
import { getMenu } from "../../redux/features/menus/menuslice";

const MenusPages = () => {
    const { list, loading, error } = useSelector((state) => state.menu);
    const dispatch = useDispatch();
    // console.log(list)

    useEffect(() => {
        dispatch(getMenu())
    }, [])

    if(loading)
    return (
        <div>
            <h1>Loading...</h1>
        </div>
        )

    return (
        <div>
            <h1>Menus</h1>
            {list.map((item) => (
                <div key={item.id}>
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                </div>
            ))}
        </div>
    );
}

export default MenusPages;