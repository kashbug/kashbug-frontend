// mui
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const QnaContainer = () => {
    return (
        <>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                    <Typography>캐시버그는 어떤 플랫폼인가요?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    안녕하세요. 프로젝트 등록은 기업 회원 가입 -> 마이페이지...
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                    <Typography>프로젝트를 등록하려먼 어떻게 해야 하나요?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    안녕하세요. 프로젝트 등록은 기업 회원 가입 -> 마이페이지...
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                >
                    <Typography>기업, 개인 회원의 차이는 무엇인가요?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    안녕하세요. 기업은 프로젝트를 ...
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                >
                    <Typography>기업, 개인 회원의 차이는 무엇인가요?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    안녕하세요. 기업은 프로젝트를 ...
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                >
                    <Typography>기업, 개인 회원의 차이는 무엇인가요?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    안녕하세요. 기업은 프로젝트를 ...
                </Typography>
                </AccordionDetails>
            </Accordion>
        </>
    );
};

export default QnaContainer;