import { Formik, Field } from "formik";
import * as Yup from 'yup';
import { Label, StyledForm, Button, ErrorMsg } from "./ContactForm.styled";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "redux/store";


const ContactSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, 'Too Short!')
        .required('Required'),
    number: Yup.number()
        .min(5, 'Too Short!')
        .positive()
        .required('Required'),
})

export const ContactForm = () => {
    const contacts = useSelector(state => state.contacts);
    const dispatch = useDispatch();
    return (
        <div>
            <Formik
                initialValues={{ name: "", number: '' }}
                validationSchema={ContactSchema}
                onSubmit={(values, actions) => {
                    const contactName = contacts.some(contact => contact.name.toLowerCase() === values.name.toLowerCase());
                    if (contactName) {
                        alert(`${values.name} is already contacts.`)
                        return
                    }
                    dispatch(addContact(values));
                    actions.resetForm();
                }
                }
            >
                <StyledForm>
                    <Label>Name
                        <Field name="name" type="text" />
                        <ErrorMsg name="name" component="div" />
                    </Label>
                    <Label>Number
                        <Field name="number" type="tel" />
                        <ErrorMsg name="number" component="div" />
                    </Label>
                    <Button type="submit">Add contact</Button>
                </StyledForm>
            </Formik>
        </div>
    );
};

