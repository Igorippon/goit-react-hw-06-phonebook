import { Form, ErrorMessage, Field } from 'formik';
import styled from 'styled-components';

export const Container = styled.div`
  width: 320px;
    border-radius: 0.75rem;
   background-color: rgba(17, 24, 39, 1);
    padding: 2rem;
    color: rgba(243, 244, 246, 1);
`;

export const StyledForm = styled(Form)`
 margin-top: 1.5rem;
/* display: flex;
flex-direction:column;
width: 375px;
border-radius: 4px;
padding: 30px 12px;
justify-content: start;
 box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 2px 1px rgba(0, 0, 0, 0.08), 0px 2px 2px rgba(0, 0, 0, 0.12);
 border: 1px solid  rgba(229, 236, 231, 0.99); */
`;

export const Label = styled.label`
display: flex;
flex-direction:column;
gap: 10px;
margin-bottom:20px;
`;

export const Button = styled.button`
 display: block;
  width: 100%;
  background-color: rgba(167, 139, 250, 1);
  padding: 0.75rem;
  text-align: center;
  color: rgba(17, 24, 39, 1);
  border: none;
  border-radius: 0.375rem;
  font-weight: 600;
  &:hover
 {
    color: var(--mien-title-color);
    background-color: rgba(167, 139, 250, 0.6);
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 2px 1px rgba(0, 0, 0, 0.08), 0px 2px 2px rgba(0, 0, 0, 0.12);
}
/* font-weight: 500;
font-size: 18px;
line-height: 1.11;
width: 120px;
margin: 0 auto;
cursor: pointer;
margin-top: 20px;
border-radius: 4px;
&:hover
 {
    color: var(--mien-title-color);
    background-color: rgba(229, 236, 231, 0.99);
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 2px 1px rgba(0, 0, 0, 0.08), 0px 2px 2px rgba(0, 0, 0, 0.12);
} */
`;

export const ErrorMsg = styled(ErrorMessage)`
color: red;
`;

export const Input = styled(Field)`
  width: 100%;
  border-radius: 0.375rem;
  border: 1px solid rgba(55, 65, 81, 1);
  outline: 0;
  background-color: rgba(17, 24, 39, 1);
  padding: 0.75rem 1rem;
  color: rgba(243, 244, 246, 1);
`;

// .form - container {
//     width: 320px;
//     border - radius: 0.75rem;
//     background - color: rgba(17, 24, 39, 1);
//     padding: 2rem;
//     color: rgba(243, 244, 246, 1);
// }

// .title {
//     text - align: center;
//     font - size: 1.5rem;
//     line - height: 2rem;
//     font - weight: 700;
// }

// .form {
//     margin - top: 1.5rem;
// }

// .input - group {
//     margin - top: 0.25rem;
//     font - size: 0.875rem;
//     line - height: 1.25rem;
// }

// .input - group label {
//     display: block;
//     color: rgba(156, 163, 175, 1);
//     margin - bottom: 4px;
// }

// .input - group input {
//     width: 100 %;
//     border - radius: 0.375rem;
//     border: 1px solid rgba(55, 65, 81, 1);
//     outline: 0;
//     background - color: rgba(17, 24, 39, 1);
//     padding: 0.75rem 1rem;
//     color: rgba(243, 244, 246, 1);
// }

// .input - group input:focus {
//     border - color: rgba(167, 139, 250);
// }

// .forgot {
//     display: flex;
//     justify - content: flex - end;
//     font - size: 0.75rem;
//     line - height: 1rem;
//     color: rgba(156, 163, 175, 1);
//     margin: 8px 0 14px 0;
// }

// .forgot a,.signup a {
//     color: rgba(243, 244, 246, 1);
//     text - decoration: none;
//     font - size: 14px;
// }

// .forgot a: hover, .signup a:hover {
//     text - decoration: underline rgba(167, 139, 250, 1);
// }

// .sign {
//     display: block;
//     width: 100 %;
//     background - color: rgba(167, 139, 250, 1);
//     padding: 0.75rem;
//     text - align: center;
//     color: rgba(17, 24, 39, 1);
//     border: none;
//     border - radius: 0.375rem;
//     font - weight: 600;
// }

// .social - message {
//     display: flex;
//     align - items: center;
//     padding - top: 1rem;
// }

// .line {
//     height: 1px;
//     flex: 1 1 0 %;
//     background - color: rgba(55, 65, 81, 1);
// }

// .social - message.message {
//     padding - left: 0.75rem;
//     padding - right: 0.75rem;
//     font - size: 0.875rem;
//     line - height: 1.25rem;
//     color: rgba(156, 163, 175, 1);
// }

// .social - icons {
//     display: flex;
//     justify - content: center;
// }

// .social - icons.icon {
//     border - radius: 0.125rem;
//     padding: 0.75rem;
//     border: none;
//     background - color: transparent;
//     margin - left: 8px;
// }

// .social - icons.icon svg {
//     height: 1.25rem;
//     width: 1.25rem;
//     fill: #fff;
// }

// .signup {
//     text - align: center;
//     font - size: 0.75rem;
//     line - height: 1rem;
//     color: rgba(156, 163, 175, 1);
// }