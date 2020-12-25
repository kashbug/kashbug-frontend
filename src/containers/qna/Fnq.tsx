// mui
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
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
        </>
    );
};

export default QnaContainer;