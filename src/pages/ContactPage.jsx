import React, { memo, useState, useEffect } from "react";
import Button from '@material-ui/core/Button';

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

import { Text } from '../containers/Language';
import ContactFormular from '../components/ContactFormular'

function ContactPage({ setHeaderType, setSelectedPerformance }) {
    const [isOpenedForm, setOpenForm] = useState(false);

    useEffect(() => {
        setHeaderType(1)
        setSelectedPerformance(null)
    }, [])

    const toggleOpenedForm = () => {
        setOpenForm((prev) => !prev);
    };

    const closeOpenedForm = () => {
        setOpenForm(false);
    };
    
    return (
        <Box id="contact-page" className='content-dark content-padd-top padd-btm-dbl'>
            <h3 className='page-title push-top-dbl padd-top-dbl'><Text tid="contact"/></h3>
            <Box className="push-btm push-top padd-btm-hlf padd-top">
                <Grid className="contact-content" container alignItems='center'>
                    <Grid className="contact-info" item xs={isOpenedForm ? 6 : 12}>
                        <p className={`${isOpenedForm ? "" : "text-center"}`}>
                            <span className="o-low push-btm-hlf">Ján Durovčík</span>
                            <br/>
                            <span>Adress</span>
                            <br/>
                            <span className="o-low push-btm-hlf">Pribinova 25, 811 09 Bratislava, SLOVAKIA</span>
                            <br/>
                            <span>Phone</span>
                            <br/>
                            <span className="o-low push-btm-hlf">+421-2-54645811</span>
                            <br/>
                            <span>Email</span>
                            <br/>
                            <span className="o-low push-btm-hlf">jan@jan.sk</span>
                        </p>
                    </Grid>
                    <ClickAwayListener onClickAway={closeOpenedForm}>
                        <Box>
                            <Button className='btn btn-2 contact-form-btn' onClick={toggleOpenedForm}>Contact form</Button>
                            <Grid className={`contact-form-wrapper ${isOpenedForm ? "opened" : ""}`} item xs={6}>
                                <ContactFormular isOpenedForm={isOpenedForm}/>
                            </Grid>
                        </Box>
                    </ClickAwayListener>
                </Grid>
            </Box>
        </Box>
    );
}
export default memo(ContactPage);