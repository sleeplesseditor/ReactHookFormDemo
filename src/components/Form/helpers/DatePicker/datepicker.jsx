import React, { useEffect, useState } from 'react';
import './datepicker.scss';

const DatePicker = ({ ...props	}) => {
const [dateFormatString, setDateFormatString] = useState();
	
useEffect(() => {
	if (dateFormat == null) { setDateFormatString('DD/MM/YYYY'); } else { setDateFormatString(dateFormat); }
}, [dateFormat]);
	
	return (
		<div>
			{console.log('PROPS', props)}
		</div>
	)
}
	
export default DatePicker;