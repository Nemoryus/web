import React, { useContext, useEffect } from 'react';

import { languageOptions } from '../languages';
import { LanguageContext } from '../containers/Language';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

export default function LanguageSelect(props) {
    const { userLanguage, userLanguageChange } = useContext(LanguageContext);

    // set selected language by calling context method
    const handleLanguageChange = e => userLanguageChange(e.target.value);

    useEffect(() => {
        let defaultLanguage = window.localStorage.getItem('rcml-lang');
        if (!defaultLanguage) {
            defaultLanguage = window.navigator.language.substring(0, 2);
        }
        userLanguageChange(defaultLanguage);
    });


    return (
        <div className='language-select'>
            <FormControl className='language-select-form-control'>
                <NativeSelect
                    value={userLanguage}
                    onChange={handleLanguageChange}
                >
                    {Object.entries(languageOptions).map(([id, name]) => (
                        <option key = {id} value={id}>{name}</option>
                    ))}
                </NativeSelect>
            </FormControl>
        </div>
    );
}
