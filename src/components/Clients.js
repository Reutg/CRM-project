import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Client from './Client.js';
import TablePagination from '@material-ui/core/TablePagination';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import TableFooter from '@material-ui/core/TableFooter';
import FilterClients from './FilterClients.js';
const axios = require('axios')


const actionsStyles = theme => ({
    root: {
        flexShrink: 0,
        color: theme.palette.text.secondary,
        marginLeft: theme.spacing.unit * 2.5,
    },
});

class TablePaginationActions extends React.Component {
    handleFirstPageButtonClick = event => {
        this.props.onChangePage(event, 0);
    };

    handleBackButtonClick = event => {
        this.props.onChangePage(event, this.props.page - 1);
    };

    handleNextButtonClick = event => {
        this.props.onChangePage(event, this.props.page + 1);
    };

    handleLastPageButtonClick = event => {
        this.props.onChangePage(
            event,
            Math.max(0, Math.ceil(this.props.count / this.props.rowsPerPage) - 1),
        );
    };

    render() {
        const { classes, count, page, rowsPerPage, theme } = this.props;

        return (
            <div className={classes.root}>
                <IconButton
                    onClick={this.handleFirstPageButtonClick}
                    disabled={page === 0}
                    aria-label="First Page"
                >
                    {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
                </IconButton>
                <IconButton
                    onClick={this.handleBackButtonClick}
                    disabled={page === 0}
                    aria-label="Previous Page"
                >
                    {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                </IconButton>
                <IconButton
                    onClick={this.handleNextButtonClick}
                    disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                    aria-label="Next Page"
                >
                    {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                </IconButton>
                <IconButton
                    onClick={this.handleLastPageButtonClick}
                    disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                    aria-label="Last Page"
                >
                    {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
                </IconButton>
            </div>
        );
    }
}

TablePaginationActions.propTypes = {
    classes: PropTypes.object.isRequired,
    count: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
    theme: PropTypes.object.isRequired,
};

const TablePaginationActionsWrapped = withStyles(actionsStyles, { withTheme: true })(
    TablePaginationActions,
);

/////

const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: '#F7CE3E',
        color: theme.palette.common.black,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);


const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});

class Clients extends React.Component {
    constructor() {
        super()
        this.state = {
            data: [],
            searchInput: "",
            page: 0,
            rowsPerPage: 20,
            selection: "",
      
        }
    }

    componentDidMount = async () => {
        let clients = await axios.get('http://localhost:4000/clients')
        this.setState({ data: clients.data })
      }
    
    handleInput = (event) => {
        let inputValue = event.target.value
        let inputName = event.target.name
    
        this.setState({ [inputName]: inputValue })
    }

    handleChangePage = (event, page) => {
        this.setState({ page })
      };

      handleChangeRowsPerPage = event => {
        this.setState({ page: 0, rowsPerPage: event.target.value })
      };

      handleSearch = (event) => {
        let searchValue = event.target.value
        let inputName = event.target.name
        this.setState({ [inputName]: searchValue })
      }

      handleSelection = (selection) => {
        this.setState({ selection })
      }

    //   updateClient = (name, surname, country) => {

    //   }

    render() {
        const { classes, count, theme } = this.props;
        const { page, rowsPerPage, selection } = this.state;

        // const filterOptions = Object.keys(this.state.data)
        return (
            <div style={{ padding: 10 }}>
            <FilterClients filterOptions={Object.keys(this.state.data)} handleSelection={this.handleSelection} selection={this.state.selection} searchInput={this.state.searchInput} handleSearch={this.handleSearch} />
                <Paper className={classes.root}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <CustomTableCell>Name</CustomTableCell>
                                <CustomTableCell>Surname</CustomTableCell>
                                <CustomTableCell>Country</CustomTableCell>
                                <CustomTableCell>First Contact</CustomTableCell>
                                <CustomTableCell>Email</CustomTableCell>
                                <CustomTableCell>Sold</CustomTableCell>
                                <CustomTableCell>Owner</CustomTableCell>
                                <CustomTableCell />
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .filter(client => !selection || client[selection].toLowerCase().includes(this.state.searchInput))
                                .map(c => <Client 
                                            key={c._id}
                                            client={c}
                                        />)}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TablePagination
                                    rowsPerPageOptions={[20, 100, 200]}
                                    colSpan={3}
                                    count={this.state.data.length}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    SelectProps={{
                                        native: true,
                                    }}
                                    onChangePage={this.handleChangePage}
                                    onChangeRowsPerPage={this.handleChangeRowsPerPage}
                                    ActionsComponent={TablePaginationActionsWrapped}
                                />
                            </TableRow>
                        </TableFooter>
                    </Table>
                </Paper>
            </div>
        )
    }
}


export default withStyles(styles)(Clients);
