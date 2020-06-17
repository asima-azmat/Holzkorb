import React, {useContext, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from '@material-ui/core/Typography';
import {useHttp} from "../hooks/http.hook";
import {AuthContext} from "../context/AuthContext";
import history from './../history'

const useStyles = makeStyles((theme) => ({
    button: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}))

export const AuthPage = () => {
    const auth = useContext(AuthContext)
    const classes = useStyles()
    const {loading, request, error, clearError} = useHttp()
    const [form, setForm] = useState({
        email: '', password: ''
    })

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const loginHandler = async () => {
        try {
            const data = await request('/auth/login', 'POST', {...form})
            auth.login(data.token, data.userId)
        } catch (e) {}
    }

    return (
        <Grid container
              spacing={0}
              direction="column"
              alignItems="center"
              justify="center">
            <Card>
                <CardContent>
                    <Typography>
                        Sign in to your account
                    </Typography>
                    <div>
                        <TextField id="email" label="Email" name="email" onChange={changeHandler}/>
                    </div>
                    <div>
                        <TextField id="password" label="Password" name="password" onChange={changeHandler}/>
                    </div>

                </CardContent>
                <CardActions>
                    <div className={classes.button}>
                        <Button variant="contained" color="primary" onClick={loginHandler}>Sign in</Button>
                        <from action="/registration">
                            <Button variant="contained" onClick={()=> history.push('/registration')}>Sign up</Button>
                        </from>
                    </div>
                </CardActions>
            </Card>
        </Grid>
    )
}