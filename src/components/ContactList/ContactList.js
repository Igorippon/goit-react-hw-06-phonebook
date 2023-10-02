import { useDispatch, useSelector } from "react-redux";
import { Item, List, Button } from "./ContactList.styled";
import { useMemo } from "react";
import { deleteContact, getContactValue } from "redux/contactsSlice";

export const ContactList = () => {
    const contacts = useSelector(getContactValue);
    const filter = useSelector(state => state.filter)
    const dispatch = useDispatch();
    console.log(contacts);
    const visibilContact = useMemo(() => {
        return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
    }, [contacts, filter]);
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

