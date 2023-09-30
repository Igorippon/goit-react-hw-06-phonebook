import { useDispatch, useSelector } from "react-redux";
import { Item, List, Button } from "./ContactList.styled";
import { deleteContact } from "redux/store";
import { useMemo } from "react";



export const ContactList = () => {
    const contacts = useSelector(state => state.contacts);
    const filter = useSelector(state => state.filter)
    const dispatch = useDispatch();
    const visibilContact = useMemo(() => { return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase())); }, [contacts, filter]);
    return (
        <List>
            {visibilContact.map(({ id, name, number }) => (
                <Item key={id}>
                    <p>{name} : {number}</p>
                    <Button type="button" onClick={() => dispatch(deleteContact(id))}>Delete</Button>
                </Item>

            ))}
        </List>
    );
};

