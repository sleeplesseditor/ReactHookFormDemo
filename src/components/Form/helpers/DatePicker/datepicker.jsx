import React, { Fragment, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './datepicker.scss';

const DatePickerComponent = ({
	onChange,
	value,
	className,
	errorType,
	errorMessage,
	calendarCustomClass,
	dateFormat,
	withTime = false,
	onlyTime = false,
	placeholder,
	disabled = false,
	noKeyboardNagivation = true,
	readOnly = false,
	withPortal = false,
	showWeekNumbers = false,
	customInput,
	onlyMonth = false,
	dataTestId,
	customBorder,
	label,
	name,
	required,
	fillSpace = false,
	maxDate,
	isClearable = false
}) => {
const [dateFormatString, setDateFormatString] = useState();
	
useEffect(() => {
	if (dateFormat == null) { setDateFormatString('dd/MM/yyyy'); } else { setDateFormatString(dateFormat); }
}, [dateFormat]);

	const GenericInput = (props) => (
		<Fragment>
			<div className={className} {...{ fillSpace }}>
				<input
					value={props.value}
					data-testid={dataTestId}
					onClick={props.onClick}
					name={name}
					placeholder={placeholder}
					className={errorMessage !== null ? errorMessage && (`${className} error-display`) : className}
					readOnly
					customBorder={customBorder}
					errorMessage={errorMessage}
					fillSpace={fillSpace}
				/>
			</div>
			{errorMessage !== null && (<p className="datepicker-error-message">{errorMessage}</p>)}
		</Fragment>
	);

	
	return (
		<div className="datepicker-component">
			{label != null && <label className="datepicker-label" htmlFor={name}>{required ? `${label} *` : label}</label>}
			<DatePicker
				selected={value ? value : undefined}
				calendarClassName={calendarCustomClass != null ? calendarCustomClass : 'datepicker-custom'}
				dateFormat={`${dateFormatString}${(withTime) ? ' h:mm' : ''}`}
				onChange={onChange}
				showTimeSelect={withTime}
				showTimeSelectOnly={onlyTime}
				timeFormat="HH:mm"
				timeIntervals={15}
				maxDate={maxDate}
				timeCaption="Time"
				placeholderText={placeholder}
				disabled={disabled}
				disabledKeyboardNavigation={noKeyboardNagivation}
				readOnly={readOnly}
				withPortal={withPortal}
				showWeekNumbers={showWeekNumbers}
				customInput={(customInput != null ? customInput : <GenericInput />)}
				showMonthYearPicker={onlyMonth}
				isClearable={isClearable}
			/>
		</div>
	)
}
	
export default DatePickerComponent;