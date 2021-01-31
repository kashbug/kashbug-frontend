import React from 'react';
import styled from "styled-components";
//  mui
import {
    FormControl,
    TextField,
    Select,
    InputLabel,
    FormControlLabel,
    Checkbox,
} from '@material-ui/core';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
// api
import { ProjectAdd as ProjectAddInterface } from '../../../api/Project';
// enum
import { StatusType, RewardDurationType, RewardPriceType } from '../../../enumType/Project';

const Wrap = styled.div`
    text-align:center;
`;
const SelectBox = styled.div`
    margin-top:20px;
    overflow:hidden;
`;
const CategoryBox = styled.div`
    padding: 5px;
    margin-top:20px;
    border-radius: 10px;
    box-shadow: 1px 1px 1px 1px #000;
    text-align: left;
`;

interface InfoProps {
    projectData: ProjectAddInterface,
    onChangeInfoHandler: (e:any) => void,
    onChangeDateHandler: (e:any) => void,
    onChangeCategoryHandler: any,
};

const Info = ({ projectData, onChangeInfoHandler, onChangeDateHandler, onChangeCategoryHandler }: InfoProps) => {
    const {
        name,
        category,
        reward,
        reward_duration,
        url,
        status,
        startAt,
        deadlineAt,
    } = projectData;
    return (
        <Wrap>
            <FormControl style={{ width: '100%' }}>
                <TextField id="name" name="name" value={name} label="프로젝트명" onChange={onChangeInfoHandler} />
                <TextField id="url" name="url" value={url} label="프로젝트 확인 경로" onChange={onChangeInfoHandler} style={{ marginTop: '20px' }} />
            </FormControl>
            <SelectBox>
                <FormControl style={{ width: '30%', float:'left' }}>
                    <InputLabel htmlFor="reward">버그보상 금액</InputLabel>
                    <Select
                        native
                        inputProps={{
                            name: 'reward',
                            id: 'reward',
                        }}
                        value={reward}
                        onChange={onChangeInfoHandler}
                    >
                         <option aria-label="선택" value="" />
                    {
                        Object.entries(RewardPriceType).map(v => (
                            <option key={v[0]} value={v[0]}>{v[1]}</option>
                        ))
                    }
                    </Select>
                </FormControl>
                <FormControl style={{ width: '30%' }}>
                    <InputLabel htmlFor="reward_duration">버그 채택 이후 보상 기간</InputLabel>
                    <Select
                        native
                        inputProps={{
                            name: 'reward_duration',
                            id: 'reward_duration',
                        }}
                        value={reward_duration}
                        onChange={onChangeInfoHandler}
                    >
                        <option aria-label="선택" value="" />
                        {
                            Object.entries(RewardDurationType).map(v => (
                                <option key={v[0]} value={v[0]}>{`${v[1]}일`}</option>
                            ))
                        }
                    </Select>
                </FormControl>
                <FormControl style={{ width: '30%', float: 'right' }}>
                    <InputLabel htmlFor="status">서비스 상태</InputLabel>
                    <Select
                        native
                        inputProps={{
                            name: 'status',
                            id: 'status',
                        }}
                        value={status}
                        onChange={onChangeInfoHandler}
                    >
                        <option aria-label="선택" value="" />
                        {
                            Object.entries(StatusType).map(v => (
                                <option key={v[0]} value={v[0]}>{v[1]}</option>
                            ))
                        }
                    </Select>
                </FormControl>
            </SelectBox>
            <SelectBox>
                <FormControl style={{ width: '45%', float:'left' }}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="yyyy/MM/dd"
                            margin="normal"
                            id="deadlineAt"
                            name="deadlineAt" 
                            label="프로젝트 마감일"
                            value={deadlineAt}
                            onChange={onChangeDateHandler}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </MuiPickersUtilsProvider>
                </FormControl>
                <FormControl style={{ width: '45%', float:'right' }}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="yyyy/MM/dd"
                            margin="normal"
                            id="startAt"
                            name="startAt" 
                            label="프로젝트 오픈일"
                            value={startAt}
                            onChange={onChangeDateHandler}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </MuiPickersUtilsProvider>
                </FormControl>
            </SelectBox>
            <CategoryBox>
                <h3>카테고리</h3>
                {
                    projectData.category.map((v, i) => (
                        <FormControlLabel
                            control={<Checkbox color="primary" checked={v.status} onChange={onChangeCategoryHandler} name={v.value} id={v.value} />}
                            label={v.name}
                            key={`key_${i}`}
                        />
                    ))
                }
            </CategoryBox>
        </Wrap>
    );
};

export default Info;