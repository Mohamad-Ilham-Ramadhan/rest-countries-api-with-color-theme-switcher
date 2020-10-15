import React from "react";
import ReactPaginate from "react-paginate";
import clsx from "clsx";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
    "&.dark": {
      backgroundColor: theme.palette.neutral.darkBlue,
      color: "white",
    },
  },
  pagination: {
    margin: 0,
    padding: 0,
    listStyle: "none",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    marginBottom: 80,
    position: "relative",
    "@media (max-width: 400px)": {
      paddingBottom: 40,
    },
    "& li": {
      cursor: "pointer",
      "&:hover": {
        textDecoration: "underline",
      },
      "&.active": {
        backgroundColor: "#fedf00",
        color: "black",
      },
      "@media (max-width: 400px)": {
        "&.previous": {
          order: 1,
          position: "absolute",
          bottom: 0,
          left: 0,
        },
        "&.next": {
          order: 2,
          position: "absolute",
          bottom: 0,
          right: 0,
        },
      },
      "& a": {
        padding: 10,
        display: "block",
      },
    },
  },
}));

function Pagination({
  className,
  colorScheme,
  pageCount,
  handlePageClick,
  selectedPage,
}) {
  const styles = useStyles();
  return (
    <Paper elevation={5} className={clsx(styles.root, colorScheme, className)}>
      <ReactPaginate
        pageCount={pageCount}
        pageRangeDisplayed={5}
        marginPagesDisplayed={1}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
        onPageChange={handlePageClick}
        forcePage={selectedPage}
        containerClassName={styles.pagination}
      ></ReactPaginate>
    </Paper>
  );
}
function mapState(state) {
  return {
    colorScheme: state.colorScheme,
  };
}
export default connect(mapState, null)(Pagination);
