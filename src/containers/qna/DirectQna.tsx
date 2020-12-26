import React, { useState } from 'react';
// mui
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
    MenuItem,
    InputLabel,
    FormHelperText,
    FormControl,
    Select,
    TextField,
    Button,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      width: '100%',
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    content: {
        marginTop: '20px',
    },
    btnGroup: {
        textAlign: 'center',
    },
    btn: {
        margin: '5px'
    },
    errBtn: {
        margin: '5px',
        backgroundColor: theme.palette.error.main,
        color: '#fff'
    }
  }),
);

const DirectQna = () => {
    const classes = useStyles();
    const [age, setAge] = useState('');

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setAge(event.target.value as string);
    };
    return (
        <>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">카테고리</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    onChange={handleChange}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <FormHelperText>질문 유형을 선택해주세요.</FormHelperText>
                <TextField id="standard-basic" label="제목" />
                <TextField
                    className={classes.content}
                    id="outlined-multiline-static"
                    label="내용"
                    multiline
                    rows={4}
                    defaultValue="어떤 내용 인가요?"
                    variant="outlined"
                />
            </FormControl>
            <div className={classes.btnGroup}>
                <Button className={classes.btn} variant="contained" color="primary">
                    확인
                </Button>
                <Button className={classes.errBtn} variant="contained">
                    취소
                </Button>
            </div>
        </>
    );
};

export default DirectQna;