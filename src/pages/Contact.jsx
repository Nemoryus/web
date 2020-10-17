import React from "react";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
//picture
import TmavaModra from '../picture/modratmava.jpg';
import { Text } from '../containers/Language';
import ContactFormular from '../components/ContactFormular'
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    dropdown: {
        position: 'absolute',
        top: 28,
        right: 0,
        left: 0,
        zIndex: 1,
        border: '1px solid',
        padding: theme.spacing(1),
        backgroundColor: theme.palette.background.paper,
    },
}));


function ContactPage() {
    const [isOpened, setOpen] = React.useState(false);

    return (
        //`url(${TmavaModra})`
        <div className='container-contact' style={{ backgroundImage:`url(${TmavaModra})`}}>
            <h3 className=''><Text tid="contact" /></h3>
            <Grid container className='contanct-grid-container'>
                <Grid item xs={isOpened ? 6 : 11} className='contanct-grid-first' >
                    <Paper >
                        <p>
                            Ján Durovčík<br />
                                Adress<br />
                                Pribinova 25, 811 09 Bratislava, SLOVAKIA<br />
                                Phone<br />
                                +421-2-54645811<br />
                                E-mail<br />
                                jan@jan.sk<br />
                        </p>
                    </Paper>
                </Grid>
                <Grid item xs={1}>
                    <Paper className='button-paper'>
                        <div className='button-cointainer'>
                            <Button className='nav-link-button' onClick={() => setOpen(!isOpened)}>contact form</Button>
                        </div>
                    </Paper>
                </Grid>
                {isOpened && <Grid className='grid-contact-formular' item xs={5} >
                    <Paper>
                        <ContactFormular />
                    </Paper>
                </Grid>
                }
            </Grid>
        </div>
    );
}
export default ContactPage;