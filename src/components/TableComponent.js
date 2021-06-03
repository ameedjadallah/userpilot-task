import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import classnames from "classnames";

import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import Paper from "@material-ui/core/Paper";

import TablePaginationActions from "./TablePaginationActions";

const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
  tableHeadCell: {
    color: "#9FA2B4",
  },
  tableContainer: {
    boxShadow: "none",
    borderColor: "#DFE0EB",
  },
  tableCell: {
    borderColor: "#DFE0EB",
  },
});

function TableComponent({
  tableHead,
  count,
  rowsPerPage,
  handleChangePage,
  handleChangeRowsPerPage,
  colSpan,
  page,
  children,
}) {
  const classes = useStyles();
  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            {tableHead.map((item, index) => {
              return (
                <TableCell
                  key={index}
                  className={classnames(
                    classes.tableHeadCell,
                    classes.tableCell
                  )}
                >
                  {item}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>{children}</TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[8, 16, 32, { label: "All", value: -1 }]}
              colSpan={colSpan}
              count={count}
              rowsPerPage={rowsPerPage}
              labelDisplayedRows={() => ``}
              page={page}
              SelectProps={{
                inputProps: { "aria-label": "rows per page" },
                native: true,
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}

TableComponent.propTypes = {
  tableHead: PropTypes.arrayOf(PropTypes.string).isRequired,
  count: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  handleChangePage: PropTypes.func.isRequired,
  handleChangeRowsPerPage: PropTypes.func.isRequired,
  colSpan: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};

export default TableComponent;
