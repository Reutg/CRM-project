import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';



const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    input: {
        margin: theme.spacing.unit,
        marginTop: theme.spacing.unit * 2,
        borderBottomColor: '#F7CE3E'
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
        width: '200px'
    },
});

class TextFields extends React.Component {
    state = {
        name: 'Search',
    };

    handleSelection = (event) => {
        this.props.handleSelection(event)
      }
    
    handleSearch = (event) => {
        this.props.handleSearch(event)
    }

    render() {
        const { classes } = this.props;
        const ITEM_HEIGHT = 48;
        const ITEM_PADDING_TOP = 8;
        const MenuProps = {
            PaperProps: {
                style: {
                    maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                    width: 350,
                },
            },
        };

        return (
            <form className={classes.container} noValidate autoComplete="off">
         
                <Input
                    className={classes.input}
                    name="searchInput"
                    value={this.props.searchInput}
                    inputlabel="Search"
                    onChange={this.handleSearch}
                />
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="select-multiple">Search by</InputLabel>
                    <Select
                        value={this.props.selection}
                        onChange={this.handleSelection}
                        className={classes.selectEmpty}
                        input={<Input id="select-multiple" />}
                    >
                        <MenuItem value='name'>Name</MenuItem>
                        <MenuItem value='owner'>Owner</MenuItem>
                        <MenuItem value='country'>Country</MenuItem>
                    </Select>
                </FormControl>

            </form>
        );
    }
}

TextFields.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);