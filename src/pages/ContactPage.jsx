import React, { useState } from "react";
import Button from '@material-ui/core/Button';

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import { Text } from '../containers/Language';
import ContactFormular from '../components/ContactFormular'

function ContactPage({ setHeaderType }) {
    setHeaderType(1)
    const [isOpenedForm, setOpenForm] = useState(false);

    const toggleOpenedForm = () => {
        setOpenForm((isOpenedForm) => !isOpenedForm);
    };

    return (
        <Box id="contact-page" className='content-dark content-padd-top padd-btm t-center'>
            <h3 className='page-title padd-top-dbl'><Text tid="contact"/></h3>
            <Box className="push-btm push-top padd-btm-hlf padd-top-hlf">
                <Grid className="contact-content" container alignItems='center'>
                    <Grid className="contact-info" item xs={isOpenedForm ? 5 : 12}>
                        <p>
                            <span className="o-low">Ján Durovčík</span>
                        </p>
                        <p>
                            Adress<br/>
                            <span className="o-low">Pribinova 25, 811 09 Bratislava, SLOVAKIA</span>
                        </p>
                        <p>
                            Phone<br/>
                            <span className="o-low">+421-2-54645811</span>
                        </p>
                        <p>
                            Email<br/>
                            <span className="o-low">jan@jan.sk</span>
                        </p>
                    </Grid>
                    <Grid className='contact-form-wrapper' item xs={isOpenedForm ? 6 : 1}>
                        {isOpenedForm ? 
                            <ContactFormular toggleOpen={toggleOpenedForm}/>
                        :
                            <Grid item xs={1} className="contact-form-btn-wrapper">
                                <Button className='btn btn-2 contact-form-btn' onClick={toggleOpenedForm}>Contact form</Button>
                            </Grid>
                    }
                    </Grid>
                </Grid>
                <Box className="fake-space"></Box>
            </Box>
        </Box>
    );
}
export default ContactPage;