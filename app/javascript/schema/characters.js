import * as yup from 'yup';

export const character_init = {
    characterName: '',
};

export const character_schema = yup.object().shape({
    characterName: yup.string().required("Character name required"),
});