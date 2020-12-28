import React,{useState, useEffect, useContext} from "react";
import { useParams, useHistory} from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import DispatchContext from "../dispatchContext";
import UserContext from "../UserContext";
import { updateUser } from "../actions/userActions";

const UpdateProfile = () => {
    const { id } = useParams();
    const history = useHistory();
const dispatch = useContext(DispatchContext);
const users = useContext(UserContext);
const usersList = Object.values(users)
// const initialValues = {
//     firstName: "",
//     lastName:  "",
//     email: ""
// };

const [user, setUser] = useState({});
const [submitting, setSubmitting] = useState(false)

useEffect(()=> {
    async function getUserDetails(){
        for(let singleUser of usersList) {
            if(+singleUser.id === +id) {
                setUser(singleUser);
            }
        }

    }
    getUserDetails();
}, [id, usersList])

const savedValues = {
    firstName: user.firstName || "",
    lastName: user.lastName || "",
    email: user.email || "",
};

const validationSchema = Yup.object({
    firstName: Yup.string().required('Required!'),
    lastName: Yup.string().required('Required!'),
    email: Yup.string()
        .email('Invalid email format')
        .required('Required!')
})

const onSubmit = async(values) => {
    try {
        setSubmitting(true)
        values.id = id;
        values.state = 'pending';
        await dispatch(updateUser(values))
        }catch(err) {
        console.log("Error updating ", err) 
        } 
        history.push(`/${id}`);
}

    return (
        <div className="container">
        <div className="col-lg-6 offset-lg-3">
        <h2>Update</h2>
        <Formik initialValues={savedValues} validationSchema= {validationSchema} onSubmit={onSubmit} enableReinitialize>
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
                {submitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                Update
                </button>{' '}
                <button type="reset" className="btn btn-secondary">Reset</button>
                </div>
        </Form>
        </Formik>
    </div>
    </div>
        )
    
    }
export default React.memo(UpdateProfile);


