import React, { memo } from 'react';
import { Dustbin } from './Dustbin';
import { Box } from './Box';
import { Grid } from '@material-ui/core'

const employees = [
    "Anna",
    "Dan",
    "David"]

const missions = [
    "100",
    "101",
    "102"]

export const Container = memo(function Container() {
    return (
        <React.Fragment>
            <Grid container>
                <Grid item xs={4}>
                    {employees.map((employee) => (
                        <div style={{ overflow: 'hidden', clear: 'both' }}>
                            <Dustbin name={employee}/>
                        </div>
                    ))}
                </Grid>
                <Grid xs={8}>
                    {missions.map((task)=>(
                        <div style={{ overflow: 'hidden', clear: 'both' }}>
                            <Box name={task} />
                        </div>
                    ))}
                </Grid>
            </Grid>
    </React.Fragment>);
});
