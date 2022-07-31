import React from 'react';
import { Box, IconButton } from '@mui/material'
import { ContentCopy } from '@mui/icons-material'
import styles from './LinkDisplay.module.css';


const LinkDisplay = ({data, copyToClipboard}) => {



    const BoxStyle = {
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        my: 2,
        px: 0.5,
        py: 0.2,
        fontSize: '0.775rem',
        fontWeight: '700',
        bgcolor: 'white',
        borderRadius: 2,
        border: '1px solid rgba(0, 0, 0, 0.54)',
        color: 'rgba(0, 0, 0, 0.54)',
        width: 200,
    }

    return ( 
        <div style={{ whiteSpace: 'nowrap' }} className={styles.link} > 
          <Box
        component="div"
        sx={{...BoxStyle}}
        >
            {data && data.result.full_short_link}
            <IconButton
            
            onClick={() => copyToClipboard()}
            >
                <ContentCopy/>
            </IconButton>
        </Box>
        </div>
        
    );
}
 
export default LinkDisplay;