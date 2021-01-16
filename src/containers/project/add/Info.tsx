import React from 'react';
import styled from "styled-components";
//  mui
import {
    FormControl,
    TextField,
    Select,
    InputLabel,
} from '@material-ui/core';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
// api
import { ProjectAdd as ProjectAddInterface } from '../../../api/Project';
// enum
import { CategoryType, StatusType, RewardDurationType, RewardPriceType } from '../../../enumType/Project';

const Wrap = styled.div`
    text-align:center;
`;
const SelectBox = styled.div`
    margin-top:20px;
    overflow:hidden;
`;

interface InfoProps {
    projectData: ProjectAddInterface,
    onChangeInfoHandler: (e:any) => void,
    onChangeDateHandler: (e:any) => void,
};

const Info = ({ projectData, onChangeInfoHandler, onChangeDateHandler }: InfoProps) => {
    const {
        name,
        category,
        reward,
        reward_duration,
        url,
        status,
        deadlineAt,
    } = projectData;
    return (
        <Wrap>
            <FormControl style={{ width: '100%' }}>
                <TextField id="name" name="name" value={name} label="프로젝트명" onChange={onChangeInfoHandler} />
                <TextField id="url" name="url" value={url} label="프로젝트 확인 경로" onChange={onChangeInfoHandler} style={{ marginTop: '20px' }} />
            </FormControl>
            <SelectBox>
                <FormControl style={{ width: '45%', float:'left' }}>
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
                <FormControl style={{ width: '45%', float:'right' }}>
                    <InputLabel htmlFor="category">카테고리</InputLabel>
                    <Select
                        native
                        inputProps={{
                            name: 'category',
                            id: 'category',
                        }}
                        value={category}
                        onChange={onChangeInfoHandler}
                    >
                        <option aria-label="선택" value="" />
                    {
                        Object.entries(CategoryType).map(v => (
                            <option key={v[0]} value={v[0]}>{v[1]}</option>
                        ))
                    }
                    </Select>
                </FormControl>
            </SelectBox>
            <SelectBox>
                <FormControl style={{ width: '45%', float:'left' }}>
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
                <FormControl style={{ width: '45%', float:'right' }}>
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
            </SelectBox>
        </Wrap>
    );
};

export default Info;