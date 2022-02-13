import * as yup from 'yup';

export const item_init = {
    id: 0,
    name: '',
    value: 0,
    weight: 0,
    description: '',
    qty: '',
}

export const item_schema = yup.object().shape({
    name: yup.string().required("Name required"),
    description: yup.string(),
    qty: yup.number().required().min(1),
    weight: yup.number().required().min(0),
    value: yup.number().required().min(0)
});