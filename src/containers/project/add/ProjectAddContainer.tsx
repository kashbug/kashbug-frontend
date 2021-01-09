import React, { useState } from 'react';
import { useRouter } from 'next/router';
// lib
import styled from "styled-components";
// mui
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import withWidth from '@material-ui/core/withWidth';
// component
import Info from './Info';
import SubInfo from './SubInfo';

const AddWrap = styled.div`
    position:relative;height:100vh;
`;
const Add = styled.div`
    position:absolute;left:50%;top:50%;transform:translate(-50%, -50%);padding:20px;border:1px solid red;width:100%;
`;

const STEP = ['기본정보', '부가정보', '확인', '결제'];

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
        },
        button: {
            marginRight: theme.spacing(1),
        },
        instructions: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
        },
    }),
);

interface ProjectAddContainerProps {
    width: string;
};

const ProjectAddContainer = ({ width }: ProjectAddContainerProps) => {
    const router = useRouter();
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const steps = STEP;
    const handleNext = () => {
        router.push(`/project/add/step${activeStep + 1}`);
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        router.push(`/project/add/step${activeStep - 1}`);
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    return (
        <AddWrap>
            <Add>
                <h2>프로젝트 등록하기</h2>
                <div className={classes.root}>
                    <Stepper activeStep={activeStep} alternativeLabel>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {
                        activeStep === 0 && (
                            <Info />
                        )
                    }
                    {
                        activeStep === 1 && (
                            <SubInfo layoutSize={width} />
                        )
                    }
                    <div style={{ textAlign: 'center' }}>
                        {activeStep === steps.length ? (
                            <div>
                                <Typography className={classes.instructions}>All steps completed</Typography>
                            </div>
                        ) : (
                            <div style={{ marginTop: '20px' }}>
                                <Button
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                >
                                    이전
                                </Button>
                                <Button variant="contained" color="primary" onClick={handleNext}>
                                    {activeStep === steps.length - 1 ? '완료' : '다음'}
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </Add>
        </AddWrap>
    );
};

export default withWidth()(ProjectAddContainer);