import React, { useState, useCallback, useEffect } from 'react';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import { yellow } from '@material-ui/core/colors';
import ContentEditable from 'react-contenteditable';
import { isEmpty } from 'lodash';
import Axios from '../../../api/axios';
import styled from 'styled-components';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';

export const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 900,
    // backgroundColor: theme.palette.background.paper,
    backgroundColor: '#fddd7d',
    // border: '8px solid #6d540775',
    //borderTop: '8px solid #6d540775',
    // borderTop: '70px solid #e2818175',
    // borderBottom: '18px solid #e2818175',
    boxShadow: theme.shadows[5],
    borderRadius: 30,
    //borderBottom: '4px solid rgba(0,0,0,0.21)'
  },
  modalOpenButtonArea: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '24px 64px',
  },
  modalOpenButton: {
    background: 'none',
    border: 'none',
    padding: '24px 64px',
    width: '200px',
    backgroundColor: 'yellow',
    color: 'black',
    fontWeight: 'bold',
    fontSize: '16px',
    padding: '8px',
    borderRadius: '8px',
    textAlign: 'center',
    outline: 'none',
    border: 'none',
    cursor: 'pointer',
  },
  simpleModalTitle: {
    padding: '16px 12px',
    //backgroundColor: 'yellow',
    fontSize: '20px',
    margin: '1px',
    textAlign: 'center',
  },
  textarea: {
    width: '60%',
    minWidth: '60%',
    height: '300px',
    padding: '40px',
    boxSizing: 'border-box',
    // border: 'solid 2px #fddd7d',
    border: 'double 8px #8b8269',
    borderRadius: '5px',
    fontSize: '16px',
    resize: 'both',
    resize: 'none;',
    borderRadius: 30,
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
  submitDiaryWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    margin: '24px 0',
    padding: '8px',
  },
  microphoneIcon: {
    position: 'relative',
    width: '50px',
    height: '50px',
    margin: '32px 0 0 220px',
  },
  nopeMicrophoneIcon: {
    position: 'relative',
    left: '250px',
    width: '50px',
    height: '50px',
  },
  microphoneStatus: {
    position: 'relative',
  },
}));

const SimpleModal = (props) => {
  const { onSubmit, onChange } = props;
  const { transcript, resetTranscript, listening } = useSpeechRecognition();
  const [speechValue, setSpeechValue] = useState('');
  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }
  const classes = useStyles();
  const [value, setValue] = useState('');
  const [modalStyle] = useState({
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  });
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

  function changeImage() {
    if (img1.src == 'https://i.ibb.co/5F3yfb9/keyboard.png') {
      SpeechRecognition.stopListening();
      console.log('마이크 꺼짐 ' + speechValue);
      setSpeechValue('');
      console.log('setValue 초기화 ' + speechValue);
      img1.src = 'https://i.ibb.co/t48ps4X/microphone.png';
    } else if (img1.src == 'https://i.ibb.co/t48ps4X/microphone.png') {
      img1.src = 'https://i.ibb.co/5F3yfb9/keyboard.png';
      SpeechRecognition.startListening({ continuous: true });

      console.log(transcript);
      setSpeechValue(transcript);
    }
  }

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

  return (
    <>
      <div className={classes.modalOpenButtonArea}>
        <button
          type="button"
          className={classes.modalOpenButton}
          onClick={handleOpen}
        >
          오늘 일기 쓰기
        </button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <ModalBody>
          <div style={modalStyle} className={classes.paper}>
            <h2 className={classes.simpleModalTitle}>기백이의 2월 19일 일기</h2>
            <div className="top">
              <EditArea>
                <ContentEditable
                  className={classes.textarea}
                  html={value}
                  onChange={handleChange}
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
            <div className="right">
              <div className={classes.submitDiaryWrapper}>
                <button
                  type="button"
                  className={classes.submitDiary}
                  onClick={() => {
                    spellCheck(value);
                  }}
                >
                  맞춤법 검사
                </button>
                {isChecked && (
                  <button
                    type="button"
                    className={classes.submitDiary}
                    onClick={() => handleSubmit(value + speechValue)}
                    style={{ marginLeft: '16px' }}
                  >
                    일기 제출하기
                  </button>
                )}
                <button
                  type="button"
                  className={classes.submitDiary}
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  닫기
                </button>
              </div>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
};

SimpleModal.defaultProps = {
  onSubmit: console.log,
};

const ModalBody = styled.div`
  .top {
    padding: 0 30px;
    height: 100%;
  }
  .contents {
    display: flex;
    width: 100%;
  }
`;

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
