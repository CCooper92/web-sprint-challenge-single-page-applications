import * as yup from 'yup';

export default yup.object().shape({
    name: yup
        .string()
        .required('name is required')
        .min(2, 'name must be 2 chars long'),
    size: yup
        .string()
        .oneOf(['small', 'medium', 'large'],"size is required"),
    pepperoni: yup.boolean(),
    peppers:yup.boolean(),
    onion:yup.boolean(),
    spinach:yup.boolean(),

});