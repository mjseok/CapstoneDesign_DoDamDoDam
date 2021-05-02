import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import { yellow } from '@material-ui/core/colors';

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
  const { onSubmit } = props;
  const classes = useStyles();
  const [value, setValue] = useState('');
  const [modalStyle] = useState({
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  });
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
          <textarea
            className={classes.textarea}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            rows="18"
            columns="18"
          />
          <div className={classes.submitDiaryWrapper}>
            <button
              type="button"
              className={classes.submitDiary}
              onClick={() => onSubmit(value)}
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

export default SimpleModal;
