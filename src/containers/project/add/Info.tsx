import styled from "styled-components";
//  mui
import {
    FormControl,
    TextField,
    Button,
    Select,
    InputLabel,
} from '@material-ui/core';

const Wrap = styled.div`
    text-align:center;
`;
const SelectBox = styled.div`
    margin-top:20px;
    overflow:hidden;
`;

const Info = () => {
    return (
        <Wrap>
            <FormControl style={{ width: '100%' }}>
                <TextField id="projectName" name="projectName" label="프로젝트명" />
                <TextField id="projectConfirm" name="projectConfirm" label="프로젝트 확인 경로" style={{ marginTop: '20px' }} />
            </FormControl>
            <SelectBox>
                <FormControl style={{ width: '45%', float:'left' }}>
                    <InputLabel htmlFor="price">버그보상 금액</InputLabel>
                    <Select
                        native
                        inputProps={{
                            name: 'price',
                            id: 'price',
                        }}
                    >
                        <option aria-label="None" value="" />
                        <option value={10}>Ten</option>
                        <option value={20}>Twenty</option>
                        <option value={30}>Thirty</option>
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
                    >
                        <option aria-label="None" value="" />
                        <option value={10}>Ten</option>
                        <option value={20}>Twenty</option>
                        <option value={30}>Thirty</option>
                    </Select>
                </FormControl>
            </SelectBox>
            <SelectBox>
                <FormControl style={{ width: '45%', float:'left' }}>
                    <InputLabel htmlFor="dueDate">마감일</InputLabel>
                    <Select
                        native
                        inputProps={{
                            name: 'dueDate',
                            id: 'dueDate',
                        }}
                    >
                        <option aria-label="None" value="" />
                        <option value={10}>Ten</option>
                        <option value={20}>Twenty</option>
                        <option value={30}>Thirty</option>
                    </Select>
                </FormControl>
                <FormControl style={{ width: '45%', float:'right' }}>
                    <InputLabel htmlFor="warrantyDay">버그 채택 이후 보상 기간</InputLabel>
                    <Select
                        native
                        inputProps={{
                            name: 'warrantyDay',
                            id: 'warrantyDay',
                        }}
                    >
                        <option aria-label="None" value="" />
                        <option value={10}>Ten</option>
                        <option value={20}>Twenty</option>
                        <option value={30}>Thirty</option>
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
                    >
                        <option aria-label="None" value="" />
                        <option value={10}>Ten</option>
                        <option value={20}>Twenty</option>
                        <option value={30}>Thirty</option>
                    </Select>
                </FormControl>
            </SelectBox>
        </Wrap>
    );
};

export default Info;