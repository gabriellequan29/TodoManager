import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import { Formik, Form, Field, ErrorMessage } from 'formik';

function TodoComponent() {

    const {id} = useParams();
    const [description, setdescription] = useState('');
    const [targetDate, settargetDate] = useState(moment(new Date()).format('YYYY-MM-DD'));


    return (
        <div>
        <h1>Todo</h1>
        <div className='container'>
            <Formik>
                {
                    (props) => (
                        <Form>
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
