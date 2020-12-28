import React, {useContext } from "react";
import { useHistory } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import YodlrApi from "../YodlrApi";
import DispatchContext from "../dispatchContext";
import { addUser } from "../actions/userActions";

    const Register = () => {
        const dispatch = useContext(DispatchContext);
        const history = useHistory();
        let response;
        const initialValues = {
            firstName: '',
            lastName:  '',
            email:'',
        }
        
        const validationSchema = Yup.object({
            firstName: Yup.string().required('Required!'),
            lastName: Yup.string().required('Required!'),
            email: Yup.string()
                .email('Invalid email format')
                .required('Required!')
        })
        

        
          const onSubmit = async(values) => {
            try {
                response = await YodlrApi.register(values)
                await dispatch(addUser(response));
                history.push(`/${response.id}`);
            }catch(error) {
                console.log(error);
        }
    }
        
        return (
            <div className="container">
            <div className="col-lg-6 offset-lg-3">
            <h2>Register</h2>
            <Formik initialValues={initialValues} validationSchema= {validationSchema} onSubmit={onSubmit}>
                <Form>
                    <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <Field type="text" name="firstName"
                        placeholder="First Name" 
                        className='form-control'
                    />
                    <ErrorMessage name ="firstName" render={msg => <div className="error">{msg}</div>} />
                
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <Field type="text" name="lastName"  placeholder="Last Name"
                        className='form-control' />
                        <ErrorMessage name ="lastName"  render={msg => <div className="error">{msg}</div>} />
                </div>
                <div className="form-group">
                <label htmlFor="email">Email</label>
                <Field type="text" name="email"
                        placeholder="Email" className='form-control'
                    />
                    <ErrorMessage name ="email" render={msg => <div className="error">{msg}</div>} />
                </div>
                        
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">
                    Register
                    </button>{' '}
                    <button type="reset" className="btn btn-secondary">Reset</button>
                    </div>
            </Form>
            </Formik>
        </div>
        </div>
        )
    }
    

    export default Register;