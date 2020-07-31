import * as yup from 'yup';

const mandatory = 'This field is required';
const requireMandatoryString = yup.string().required(mandatory);
const requireMandatoryNumber = yup.number().typeError('This field is required').required(mandatory);

const mainEntryValidator = yup.array().of(yup.object({
    name: requireMandatoryString
}));

export default yup.object().shape({
    mainSection: mainEntryValidator
})