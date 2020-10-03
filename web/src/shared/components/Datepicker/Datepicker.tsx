// import React, { useState } from 'react';
// import { SingleDatePicker } from 'react-dates';
// import 'react-dates/lib/css/_datepicker.css';
// import 'react-dates/initialize';

// const Datepicker = ({ field, form: { setFieldValue, setFieldTouched, values }, ...props }) => {
//     const [focusedInput, setFocusedInput] = useState<boolean>(true);

//     const handleDateChange = ({ date }) => {
//         setFieldValue('date', date);
//     };

//     return (
//         <div>
//             <SingleDatePicker
//                 date={props.form.date} // momentPropTypes.momentObj or null
//                 onDateChange={handleDateChange} // PropTypes.func.isRequired
//                 focused={focusedInput} // PropTypes.bool
//                 onFocusChange={({ focused }) => setFocusedInput(focused)} // PropTypes.func.isRequired
//                 id="your_unique_id" // PropTypes.string.isRequired,
//             />
//         </div>
//     );
// };

// export default Datepicker;
