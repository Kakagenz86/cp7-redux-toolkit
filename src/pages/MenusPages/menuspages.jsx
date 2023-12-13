import { useSelector} from "react-redux";

const MenusPages = () => {
    const { list } = useSelector((state) => state.menu);
    // console.log(list)

    return (
        <div>
            <h1>Menus</h1>
            {list.map((item) => (
                <div key={item.id}>
                    <p>{item.id}</p>
                    <p>{item.name}</p>
                </div>
            ))}
        </div>
    );
}

export default MenusPages;