import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        maxWidth: 300,
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: 2,
    },
    noLabel: {
        marginTop: theme.spacing(3),
    },
}));


class BlogCategorySelect extends React.Component {


    handleChange = evt => {

    }

    render() {

        const names = ['abababababababa','bababbabba','c','d']
        return (
            <div>
                <FormControl>
                    <InputLabel htmlFor="select-multiple">Name</InputLabel>
                    <Select
                        onChange={this.handleChange}
                    >
                        {names.map(name => (
                            <MenuItem key={name} value={name}>
                                {name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
        );
    }
}

export default BlogCategorySelect;