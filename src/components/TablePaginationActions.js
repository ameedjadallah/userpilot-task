import { useEffect } from "react";
import PropTypes from "prop-types";

import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));

function TablePaginationActions({ page, onChangePage }) {
  const classes = useStyles();

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  useEffect(() => {
    console.log(page);
  }, [page]);

  return (
    <div className={classes.root}>
      <IconButton
        disabled={page === 0}
        onClick={handleBackButtonClick}
        aria-label="previous page"
      >
        <KeyboardArrowLeft />
      </IconButton>
      <IconButton onClick={handleNextButtonClick} aria-label="next page">
        <KeyboardArrowRight />
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
};

export default TablePaginationActions;
