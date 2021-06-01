import React, { useState, useCallback, useEffect } from 'react';
//import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import { yellow } from '@material-ui/core/colors';
import ContentEditable from 'react-contenteditable';
import { isEmpty } from 'lodash';
import Axios from '../../../api/axios';
import styled from 'styled-components';
import SpeechRecognition, {
    useSpeechRecognition,
} from 'react-speech-recognition';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Input} from "reactstrap";
import '../../../assets/scss/react/stuPage/stuPageStyle.scss'

export const useStyles = makeStyles((theme) => ({
    Modal:{
      width:'70vw',
    },
    modalOpenButtonArea: {
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '24px 64px',
    },
    textarea: {
        width: '800px',
        padding: '40px',
        boxSizing: 'border-box',
        border: 'double 8px #8b8269',
        fontSize: '16px',
        resize: 'none;',
        borderRadius: 30,
    },
    right:{
        display:'flex',
      justifyContent : 'flex-end'
    },
    submitDiary: {
        // background: '#9CC0BA',
        background: '#93cce2b8',
        fontSize: '18px',
        fontWeight: 'bold',
        padding: '8px 24px',
        margin: '0 16px',
        border: 'none',
        borderRadius: '20px',
        justifyContent: 'flex-end',
        borderBottom: '4px solid rgba(0,0,0,0.21)',
    },
    microphoneIcon: {
        position: 'relative',
        width: '50px',
        height: '50px',
        left:'50%',
        marginTop:'10px',
        marginLeft: '-25px'
    },
    microphoneStatus: {
        position: 'relative',
    },
}));

const SimpleModal = (props) => {
    const { onSubmit, onChange } = props;
    const { transcript, resetTranscript, listening } = useSpeechRecognition();
    const [speechValue, setSpeechValue] = useState('');

    const classes = useStyles();
    const [value, setValue] = useState('');
    const [open, setOpen] = useState(false);
    const [corrections, setCorrections] = useState([]);
    const [isChecked, setIsChecked] = useState(false);
    const filteredCorrections = corrections.filter((x) => !x.isCorrected);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setValue('');
        setCorrections([]);
        setIsChecked(false);
        setOpen(false);
    };

    const handleChange = (e) => {
        setValue(e.target.value);
        onChange && onChange(e.target.value);
    };

    const removeAllError = (value) => {
        return value.replace(/<span([^>]*)>(\W+)<\/span>/gi, '$2');
    };

    const spellCheck = useCallback(async (text) => {
        const result = removeAllError(text);
        const corrections = (
            await Axios.get('/student/spell', {
                params: { text: result },
            })
        ).data;
        setValue(text);
        setCorrections(corrections);
        setIsChecked(true);
    }, []);

    useEffect(() => {
        if (!corrections) return;
        setValue((value) => {
            let str = removeAllError(value);
            corrections.forEach((correction, i) => {
                str = str.replace(
                    correction.token,
                    correction.isCorrected
                        ? `${correction.suggestions[0]}`
                        : `<span class="error" data-index=${i}>${correction.token}</span>`
                );
            });
            return str;
        });
    }, [corrections]);

    useEffect(() => {
        const errors = document.querySelectorAll('.error');

        Array.from(errors).map((error, i) => {
            const text = error.innerText;
            error.addEventListener('click', () => {
                const correction = corrections.find((x) => x.token === text);
                const suggestion = correction.suggestions[0];

                setCorrections((prevs) => {
                    return prevs.map((x) => {
                        if (x.suggestions[0] === suggestion) {
                            x.isCorrected = true;
                        }
                        return x;
                    });
                });
            });
        });
    }, [corrections, value]);

    function changeImage(elem) {
        if (elem.src == 'https://i.ibb.co/5F3yfb9/keyboard.png') {
            SpeechRecognition.stopListening();
            console.log('마이크 꺼짐 ' + speechValue);
            setSpeechValue('');
            console.log('setValue 초기화 ' + speechValue);
            elem.src = 'https://i.ibb.co/t48ps4X/microphone.png';
        } else if (elem.src == 'https://i.ibb.co/t48ps4X/microphone.png') {
            elem.src = 'https://i.ibb.co/5F3yfb9/keyboard.png';
            SpeechRecognition.startListening({ continuous: true });

            console.log(transcript);
            setSpeechValue(transcript);
        }
    }

    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const handleSubmit = useCallback(
        (value) => {
            if (corrections && corrections.filter((x) => !x.isCorrected).length > 0)
                return alert('맞춤법을 전부 수정하셔야 제출할 수 있습니다.');
            const text = removeAllError(value);
            console.log(value, text);
            onSubmit && onSubmit(value);
        },
        [onSubmit, corrections]
    );

    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return null;
    }

    return (
        <>
            <div className={classes.modalOpenButtonArea}>
                <Button color="danger" onClick={toggle}>오늘 일기 쓰기</Button>
            </div>

            <Modal
                style={{maxWidth: '800px', width: '90%'}}
                isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}><h2>기백이의 2월 19일 일기</h2></ModalHeader>
                <ModalBody>
                    <div>
                        <EditArea>
                            <Input
                                className={classes.textarea}
                                type="textarea"
                                name="text"
                                id="exampleText"
                                onChange={handleChange}
                                html={value}
                                style={{
                                    height:'500px'
                                }}
                            />
                            <CorrectionArea>
                                {!isEmpty(filteredCorrections) && (
                                    <CorrectionTitle>아래와 같이 변경해주세요.</CorrectionTitle>
                                )}
                                {filteredCorrections.map((c, i) => {
                                    if (isEmpty(c.suggestions)) return null;
                                    return (
                                        <Correction key={i}>
                                            {c.token} -> {c.suggestions[0]}
                                        </Correction>
                                    );
                                })}
                            </CorrectionArea>
                        </EditArea>
                        <div>{transcript}</div>
                        <img
                            id="img1"
                            src="https://i.ibb.co/t48ps4X/microphone.png"
                            className={classes.microphoneIcon}
                            onClick={changeImage}
                        />
                    </div>
                </ModalBody>
                <ModalFooter>
                    <div >
                        <Button
                            type="button"
                            color="primary"
                            onClick={() => {
                                spellCheck(value);
                            }}
                        >
                            맞춤법 검사
                        </Button>
                        {isChecked && (
                            <Button
                                type="button"
                                color="primary"
                                onClick={() => handleSubmit(value + speechValue)}
                                style={{ marginLeft: '16px' }}
                            >
                                일기 제출하기
                            </Button>
                        )}
                    </div>
                    <Button color="secondary" onClick={toggle}>취소</Button>
                </ModalFooter>
            </Modal>
        </>
    );
};

SimpleModal.defaultProps = {
    onSubmit: console.log,
};
const CorrectionArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const EditArea = styled.div`
  display: flex;
  .error {
    color: red;
    text-decoration: underline;
    cursor: pointer;
  }
`;

const CorrectionTitle = styled.h3`
  font-size: 18px;
  padding: 16px;
  font-weight: bold;
`;

const Correction = styled.p`
  padding: 8px 16px;
  color: red;
`;

export default SimpleModal;

// function mikeOn(){
//   SpeechRecognition.startListening({ continuous: true })
//   const btnElement
//   = document.getElementById('mikeplz');

//   btnElement.value = "🎤❌";

// }
