import { Label } from "./Filter.styled";
import { filterContact } from "redux/store";
import { useDispatch, useSelector } from "react-redux";


export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.filter)
    console.log();
    return (
        <>
            <h2>Contacts</h2>
            <Label>Find contacts by name
                <input type="text"
                    name="filter"
                    value={filter}
                    onChange={e => dispatch(filterContact(e.target.value))} />
            </Label>
        </>
    );

}

