import { filterName } from "redux/filterSlice";
import { Input } from "./Filter.styled";
import { useDispatch, useSelector } from "react-redux";

export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.filter)
    const handleChange = e => {
        dispatch(filterName(e.target.value))
    };
    return (
        <>
            <h2>Contacts</h2>
            <Input type="text"
                name="filter"
                value={filter}
                placeholder="Find contacts by name"
                onChange={handleChange} />

        </>
    );

}

