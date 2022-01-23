import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import moment from 'moment';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import AuthenticationService from './AuthenticationService';
import TodoService from '../../api/todo/TodoService';

function TodoComponent() {
    
    const { id } = useParams()

    const [state, setState] = useState({
        id: id,
        description: 'Test',
        targetDate: moment(new Date()).format('YYYY-MM-DD')
    })


    const navigate = useNavigate();

    const onSubmit = (values) => {
        let username = AuthenticationService.getLoggedInUserName()

        let todo = {
            id: state.id,
            description: values.description,
            targetDate: values.targetDate
        }

        if (state.id === -1) {
            TodoService.createTodo(username, todo)
                .then(() => navigate('/todos'))
        } else {
            TodoService.updateTodo(username, state.id, todo)
                .then(() => navigate('/todos'))
        }

    }

    const validate = (values) => {
        let errors = {}
        if (!values.description) {
            errors.description = 'Enter a Description'
        } else if (values.description.length < 5) {
            errors.description = 'Enter atleast 5 Characters in Description'
        }

        if (!moment(values.targetDate).isValid()) {
            errors.targetDate = 'Enter a valid Target Date'
        }

        return errors
    }

    useEffect(() => {
        if (state.id === -1) {
            return
        }

        let username = AuthenticationService.getLoggedInUserName()

        
        TodoService.getTodo(username, state.id)
            .then(response => {
                setState({...state, 
                    description: response.data.description, 
                    targetDate: moment(response.data.targetDate).format('YYYY-MM-DD')
                }) 
            })
    }, []);


    return (
        <div>
        <h1>Todo</h1>
        <div className='container'>
            <Formik 
                initialValues={{ description: state.description, targetDate: state.targetDate }}
                onSubmit={onSubmit}
                validateOnChange={false}
                validateOnBlur={false}
                validate={validate}
                enableReinitialize={true} >
                {
                    (props) => (
                        <Form>
                            <ErrorMessage name="description" component="div"
                                className="alert alert-warning" />
                            <ErrorMessage name="targetDate" component="div"
                                className="alert alert-warning" />
                            <fieldset className='form-group'>
                                <label>Description</label>
                                <Field className="form-control" type="text" name="description"></Field>
                            </fieldset>
                            <fieldset className='form-group'>
                                <label>Target Date</label>
                                <Field className="form-control" type="date" name="targetDate"></Field>
                            </fieldset>
                            <button className="btn btn-success" type="submit">Save</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    </div>
    );
}

export default TodoComponent;
