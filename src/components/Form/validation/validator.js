import * as yup from 'yup';

const mandatory = 'This field is required';
const requireMandatoryString = yup.string().required(mandatory);
const requireMandatoryNumber = yup.number().typeError('This field is required').required(mandatory);

const mainSectionValidator = yup.object({
    name: requireMandatoryString,
    email: requireMandatoryString,
    age: requireMandatoryNumber
});

const errorMessageSchema = yup.object().shape({
    mainSection: mainSectionValidator
});

export default errorMessageSchema;