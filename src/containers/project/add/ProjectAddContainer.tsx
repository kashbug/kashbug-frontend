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
import Confirm from './Confirm';
// api
import { ProjectAdd as ProjectAddInterface} from '../../../api/Project';
// enum
import { CategoryType } from '../../../enumType/Project';

const AddWrap = styled.div`
    position:relative;height:100vh;
`;
const Add = styled.div`
    position:absolute;left:50%;top:50%;transform:translate(-50%, -50%);padding:20px;width:100%;
`;

const STEP = ['기본정보', '부가정보', '미리보기', '결제'];

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
    const [projectData, setProjectData] = useState<ProjectAddInterface>({
        name: '',
        category: Object.entries(CategoryType).map(v => ({ name: v[1], value: v[0], status: false })),
        contents: '',
        reward: 0,
        reward_duration: 0,
        url: '',
        imageUrl: [],
        status: '',
        startAt: new Date(),
        deadlineAt: new Date(),
    });
    const steps = STEP;
    const handleNext = () => {
        router.push(`/project/add/step${activeStep + 1}`);
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        router.push(`/project/add/step${activeStep - 1}`);
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    const onChangeInfoHandler = (e:any) => {
        const { name, value } = e.target;
        setProjectData({
            ...projectData,
            [name]: value,
        });
    };
    const onChangeDateHandler = (e:any) => {
        setProjectData({
            ...projectData,
            deadlineAt: e,
        });
    }
    const onChangeCategoryHandler = (e:any) => {
        const { name, checked } = e.target;
        const tempCategory = projectData.category.map(v => {
            let returnObj = { ...v };
            if(v.value === name) {
                returnObj = {
                    ...v,
                    status: checked,
                }
            }
            return returnObj;
        });
        setProjectData({
            ...projectData,
            category: tempCategory,
        });
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
                            <Info
                                projectData={projectData}
                                onChangeInfoHandler={onChangeInfoHandler}
                                onChangeDateHandler={onChangeDateHandler}
                                onChangeCategoryHandler={onChangeCategoryHandler}
                            />
                        )
                    }
                    {
                        activeStep === 1 && (
                            <SubInfo projectData={projectData} layoutSize={width} onChangeInfoHandler={onChangeInfoHandler} />
                        )
                    }
                    {
                        activeStep === 2 && (
                            <Confirm projectData={projectData} />
                        )
                    }
                    <div style={{ textAlign: 'center' }}>
                        {activeStep === steps.length ? (
                            <div>
                                <Typography className={classes.instructions}>All steps completed</Typography>
                            </div>
                        ) : (
                            <div style={{ marginTop: '30px' }}>
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