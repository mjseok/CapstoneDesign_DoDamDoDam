import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import { yellow } from '@material-ui/core/colors';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

export const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 900,
    // backgroundColor: theme.palette.background.paper,
    backgroundColor: '#fddd7d', 
    border: '2px solid #fddd7d',
    boxShadow: theme.shadows[5],
    borderRadius: 30,
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
    height: '300px',
    padding: '20px',
    boxSizing: 'border-box',
    border: 'solid 2px #fddd7d',
    borderRadius: '5px',
    fontSize: '16px',
    resize: 'both',
    resize: 'none;',
    borderRadius: 30, 
    marginLeft:'30px'
    
  },
  
  submitDiary: {
    background: '#9CC0BA',
    fontSize: '22px',
    fontWeight: 'bold',
    padding: '8px 24px',
    border: 'none',
    borderRadius: '5px',
    justifyContent: 'flex-end',
    marginLeft: '580px'
  },
  submitDiaryWrapper: {
    display: 'flex',
    //justifyContent: 'flex-end',
    margin: '24px auto',
    padding: '8px',
  },
  microphoneIcon: {
    position: 'relative',
    left: '200px',
    width: '50px',
    height: '50px',
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
  const { transcript, resetTranscript, listening } = useSpeechRecognition()

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null
  }

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

  function changeImage() {
    
    if(img1.src=="https://i.ibb.co/S7zyBnC/nomike.png"){
      SpeechRecognition.stopListening();
      img1.src="https://i.ibb.co/71XnQLg/mike.png" ;
    }
      
    else if(img1.src=="https://i.ibb.co/71XnQLg/mike.png" ){
      SpeechRecognition.startListening({ continuous: true });
      img1.src="https://i.ibb.co/S7zyBnC/nomike.png";
    }
      
  }

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
            기백이의 2월 19일 일기
          </h2>
          <textarea
            className={classes.textarea}
            // value={Value} //키보드로 입력
            value={value+transcript} //음성으로 입력 합친 값
            onChange={(e) => setValue(e.target.value)}
            rows="18"
            columns="18"
          />
          <div className={classes.submitDiaryWrapper}>
            <img 
              id='img1'
              src="https://i.ibb.co/71XnQLg/mike.png" 
              className={classes.microphoneIcon} 
              onClick={changeImage} 
            />
            {/* <img 
              src="https://i.ibb.co/S7zyBnC/nomike.png" 
              className={classes.nopeMicrophoneIcon} 
              onClick={SpeechRecognition.stopListening} 
            /> */}
            {listening && <div className = {classes.microphoneStatus}>음성인식 작동중</div>}
            <button
              type="button"
              className={classes.submitDiary}
              onClick={() => onSubmit(value+transcript)}
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


  // function mikeOn(){
  //   SpeechRecognition.startListening({ continuous: true })
  //   const btnElement 
  //   = document.getElementById('mikeplz');
    
  //   btnElement.value = "🎤❌";
    
  // }