import React, { useContext, useEffect,useState } from 'react';

import { languageOptions } from '../languages';
import { LanguageContext } from '../containers/Language';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import Select from '@material-ui/core/Select';

export default function LanguageSelect(props) {
    const { userLanguage, userLanguageChange } = useContext(LanguageContext);
    const [isOpened, setIsOpened] = useState(false);
    
    
    const toggleIsOpened = () => {
        // document.getElementsByTagName('body')[0].cssText="overflow-x:visible!important";
        // document.getElementsByTagName("body").style.cssText="overflow-x:visible!important";
        // document.body.style.cssText="overflow-x:visible!important";
        document.getElementsByTagName('body')[0].style.overflow="visible";
    };

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
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={userLanguage}
                    onChange = {handleLanguageChange}
                    onOpen= {toggleIsOpened}
                >
                    {Object.entries(languageOptions).map(([id, name]) => (
                        <option key = {id} value={id}>{name}</option>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}
