import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles({
  root: {
    width: 400,
    maxWidth: '90vw',
    padding: 30,
    opacity: 0.95,
  },
  title: {
    fontSize: 14,
    marginBottom: 20,
  },
});

const FormContainer = ({ title, children }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {title}
        </Typography>
        {children}
      </CardContent>
    </Card>
  );
};

export default FormContainer;

FormContainer.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
