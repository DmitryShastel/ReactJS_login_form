import React from "react";
import './App.css';
import {theme} from "./theme";
import {ThemeProvider} from "@material-ui/core/styles";
import {Buttons} from "./Buttons/buttons";
import {Fields} from "./TextFields/fields";
import {Typography} from "./Typography/typography";


export const App = () => {
    return (
        <div className='wrapper'>

            <div className = 'buttons'>
                <Buttons/>

            </div>

            <div className = 'typography'>
                <Typography/>
            </div>

            <div className = 'field'>
                <Fields/>
            </div>




        </div>

        /*{/!*  <CssBaseline>
        </CssBaseline>*!/}
/!* <ThemeProvider theme = {theme}>
    </ThemeProvider>*!/*/
    )
}
