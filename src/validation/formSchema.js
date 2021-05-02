import * as yup from 'yup';

export default yup.object().shape({
    day: yup.string()
            .required('Please select a day'),
    month: yup.string()
    .required('Please select a month'),
    year: yup.string()
    .required('Please select a year'),
})