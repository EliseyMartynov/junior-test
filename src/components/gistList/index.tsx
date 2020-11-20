import { Grid, CircularProgress } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Pagination } from "@material-ui/lab";
import Error from "../Error";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/redux/Store";
import { Gist } from "../gist";
import { getGists } from "../../redux/thunks/gists/getGists";
import { GistData } from 'src/types/GistData';

export interface GistListProps {}

export const GistList: React.FC<GistListProps> = () => {
  const dispatch = useDispatch();

  let { pages, isLoading, gists, error } = useSelector((state: RootState) => {
    return state.gists;
  });

  const inPage: number = 12;
  const since: Date = new Date("2020-11-20");

  useEffect(() => {
    dispatch(getGists({ inPage, since }));
  }, [dispatch]);

  const pagiHandler = (
    event: React.ChangeEvent<unknown>,
    value: number
  ): void => {
    dispatch(getGists({ page: value, inPage, since }));
  };

  const StyledPagi = withStyles({
    root: {
      position: "absolute",
      bottom: "-3rem",
      width: "100%"
    },
    ul: {
      justifyContent: "center",
      padding: "1rem"
    }
  })(Pagination);

  return (
    <div>
      <Grid style={{ minHeight: "75vh", position: "relative" }} item xs={12}>
        <Grid container justify="center" spacing={2}>
          {isLoading ? (
            <CircularProgress style={{ width: "150px", height: "150px" }} />
          ) : error ? (
            <Error message={error} />
          ) : gists.message ? (
            <Error message={gists.message} />
          ) : (
            <>
              {gists.map(gist => (
                <Grid key={gist.id} item>
                  <Gist data={gist} />
                </Grid>
              ))}
            </>
          )}
        </Grid>
        {(!isLoading && !error) && (
          <StyledPagi count={5} page={pages.page} onChange={pagiHandler} />
        )}
      </Grid>
    </div>
  );
};
