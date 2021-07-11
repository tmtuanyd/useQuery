import { TextFields } from '@material-ui/icons';
import React from 'react';
import FormContainer from '../Component/FormContainer';
import { BookType } from '../Type/Book';

const BookForm = () => {
    const initialValue: BookType = {
        title:  '',
        author: ''

    }
    const handleSubmit = () => {

    }
    return (
        <FormContainer initialValue={initialValue} onSubmit={handleSubmit}/>
            <TextFields name='title'>
        </FormContainer>
    );
};

export default BookForm;