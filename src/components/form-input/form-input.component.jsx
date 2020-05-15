import React from 'react';

const FormInput = ({onChange, ...othersProps}) => (
    <input onChange = {onChange} {...othersProps} />
)

export default FormInput;