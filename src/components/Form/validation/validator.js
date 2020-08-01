import * as yup from 'yup';

const mandatory = 'This field is required';
const requireMandatoryString = yup.string().required(mandatory);
const requireNumber = yup.lazy(value => {
	if (Number.isNaN(parseFloat(value))) {
	return yup.string()
        .oneOf(['', undefined], 'TypeError Number') // allow empty value
        .typeError('TypeError Number')
        .transform((val) => {
            return val === null ? '' : val;
        });
	}
	return yup.number().typeError('TypeError Number');
});
const requireMandatoryNumber = yup.number().typeError('This field is required').required(mandatory);

const mainSectionValidator = yup.object({
    name: requireMandatoryString,
    email: requireMandatoryString,
    dateOfBirth: requireMandatoryString
});

const errorMessageSchema = yup.object().shape({
    mainSection: mainSectionValidator
});

export default errorMessageSchema;