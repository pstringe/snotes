import {Box} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
 
const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
    }
});

const Editor = () => {
    const { quill, quillRef } = useQuill();
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Box ref={quillRef}>
            </Box>
        </Box>
    );

}
 
export default Editor;