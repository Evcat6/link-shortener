import React from "react";
import { InputBase, Paper, IconButton } from "@mui/material";
import { Send } from "@mui/icons-material"
import styles from './Input.module.css'

const Input = ({fetchData, query, setQuery}) => {
    const PaperStyles = {
        p: '4px 4px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 400,
        borderRadius: '24px'
    }

    return (
           <Paper
        sx={{...PaperStyles}}
        >
            <InputBase
            onChange={(e) => setQuery(e.target.value)} 
            value={query} 
            className={styles.input}
            placeholder='paste URL'   
            />
            <IconButton
            onClick={fetchData}
            >
                <Send/>
            </IconButton> 
        </Paper> 
    );
}
 
export default Input;