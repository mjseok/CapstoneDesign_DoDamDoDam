import React, { useState, useCallback, useEffect } from 'react';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import { yellow } from '@material-ui/core/colors';
import ContentEditable from 'react-contenteditable';
import { isEmpty } from 'lodash';
import Axios from '../../../api/axios';
import styled from 'styled-components';

export const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 800,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
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
    backgroundColor: 'yellow',
    fontSize: '20px',
    margin: '0px',
  },
  textarea: {
    width: '100%',
    height: '300px',
    padding: '10px',
    boxSizing: 'border-box',
    border: 'solid 2px #1e90ff',
    borderRadius: '5px',
    fontSize: '16px',
    resize: 'both',
    resize: 'none;',
  },
  submitDiary: {
    background: 'yellow',
    fontSize: '22px',
    fontWeight: 'bold',
    padding: '8px 24px',
    border: 'none',
    borderRadius: '5px',
  },
  submitDiaryWrapper: {
    display: 'flex',
    justifyContent: 'center',
    margin: '24px auto',
  },
}));

const SimpleModal = (props) => {
  const { onSubmit, onChange } = props;
  const classes = useStyles();
  const [value, setValue] = useState('');
  const [modalStyle] = useState({
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  });
  const [open, setOpen] = useState(false);
  const [corrections, setCorrections] = useState([]);
  const filteredCorrections = corrections.filter((x) => !x.isCorrected);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
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
  }, []);
  // 안녕하새요. 오늘저는 치킨을 먹었습니다. 맞있었어요. 엄마사랑해요.

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

        // text.replace(/<(\/span|span)([^>]*)>/gi, '');
        // const replace = setValue();
      });
    });
  }, [corrections, value]);

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
        <div style={modalStyle} className={classes.paper}>
          <h2 className={classes.simpleModalTitle}>
            강기백 학생 - 2월 19일 일기
          </h2>
          <EditArea>
            <ContentEditable
              className={classes.textarea}
              html={value}
              onChange={handleChange}
            />
          </EditArea>
          {!isEmpty(filteredCorrections) && (
            <>
              <CorrectionTitle>아래와 같이 변경해주세요.</CorrectionTitle>
              {filteredCorrections.map((c, i) => {
                if (isEmpty(c.suggestions)) return null;
                return (
                  <Correction key={i}>
                    {c.token} -> {c.suggestions[0]}
                  </Correction>
                );
              })}
            </>
          )}
          <div className={classes.submitDiaryWrapper}>
            <button
              type="button"
              className={classes.submitDiary}
              onClick={() => spellCheck(value)}
            >
              맞춤법 검사
            </button>
            <button
              type="button"
              className={classes.submitDiary}
              onClick={() => onSubmit(value)}
              style={{ marginLeft: '16px' }}
            >
              일기 제출하기
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

SimpleModal.defaultProps = {
  onSubmit: console.log,
};

const EditArea = styled.div`
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
