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
    marginLeft:'30px'
    
  },
  
  submitDiary: {
    // background: '#9CC0BA',
    background:'#93cce2b8',
    fontSize: '18px',
    fontWeight: 'bold',
    padding: '8px 24px',
    border: 'none',
    borderRadius: '20px',
    justifyContent: 'flex-end',
    marginLeft: '580px',
    borderBottom: '4px solid rgba(0,0,0,0.21)'
  },
  submitDiaryWrapper: {
    display: 'flex',
    //justifyContent: 'flex-end',
    margin: '24px auto',
    padding: '8px',
  },
  microphoneIcon: {
    position: 'relative',
    left: '270px',
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
  const { transcript, resetTranscript, listening} = useSpeechRecognition();
  const [ speechValue, setSpeechValue] = useState('');
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
    
    if(img1.src=="https://i.ibb.co/5F3yfb9/keyboard.png"){
      SpeechRecognition.stopListening();
      console.log("마이크 꺼짐 " + speechValue);
      setSpeechValue('');
      console.log("setValue 초기화 " + speechValue);
      img1.src="https://i.ibb.co/t48ps4X/microphone.png" ;
    }
      
    else if(img1.src=="https://i.ibb.co/t48ps4X/microphone.png" ){
      img1.src="https://i.ibb.co/5F3yfb9/keyboard.png";
        SpeechRecognition.startListening({ continuous: true });
       
        console.log(transcript);
        setSpeechValue(transcript);
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
            value={value+speechValue} //음성으로 입력 합친 값
            onChange={(e) => setValue(e.target.value)}
            rows="18"
            columns="18"
          />
          <div className={classes.submitDiaryWrapper}>
            <img 
              id='img1'
              src="https://i.ibb.co/t48ps4X/microphone.png " 
              className={classes.microphoneIcon} 
              onClick={changeImage} 
            />
            {/* <img 
              src="https://i.ibb.co/S7zyBnC/nomike.png" 
              className={classes.nopeMicrophoneIcon} 
              onClick={SpeechRecognition.stopListening} 
            /> */}
            {/* {listening && <div className = {classes.microphoneStatus}>음성인식 작동중</div>} */}
            <div>{transcript}</div>
            <button
              type="button"
              className={classes.submitDiary}
              onClick={() => onSubmit(value+speechValue)}
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