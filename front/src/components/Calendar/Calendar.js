import React, { useState, useRef, useEffect, useCallback } from "react";
import CalendarStyled from "./Calendar.style.js";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useHistory } from "react-router";
import { RiEmotionHappyFill } from "react-icons/ri";
import {
  FaSadTear,
  FaAngry,
  FaGrimace,
  FaExclamationCircle,
} from "react-icons/fa";
import { ImNeutral } from "react-icons/im";
import service from "../../service";
import styled from "styled-components";
import { Button, Input } from "reactstrap";
import { fontSize, height } from "@material-ui/system";

const Calendar = ({ studentID }) => {
  const [value, onChange] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [diary, setDiary] = useState("");
  const [student, setStudent] = useState();
  const [comment, setComment] = useState();
  const [mainEmotions, setmainEmotions] = useState([]);
  const [mainEmotion, setMainEmotion] = useState();
  const [happy, setHappy] = useState();
  const [neutral, setNeutral] = useState();
  const [fear, setFear] = useState();
  const [anger, setAnger] = useState();
  const [sadness, setSadness] = useState();
  const [values, setValues] = useState({
    idx: 0,
    comment: "",
  });
  const [emotionImg, setEmotionImg] = useState("");

  const element = useRef();
  const showJournal = async (day) => {
    const { data } = await service.getJournal(studentID, day);
    if(day!==undefined) setOpen(!open);
    console.log(data);
    if (data !== null) {
      setDiary(data.content);
      setStudent(data.student_id);
      setComment(data.comment);
      setMainEmotion(data.main_emotion);
      setHappy(data.happy);
      setNeutral(data.neutral);
      setFear(data.fear);
      setAnger(data.anger);
      setSadness(data.sadness);
      setValues({ ...values, idx: data.idx });
    }
    if (data == null) {
      setDiary("");
      setStudent(studentID);
      setComment("");
      setMainEmotion("");
      setHappy(0);
      setNeutral(0);
      setFear(0);
      setAnger(0);
      setSadness(0);
    }
  };
  const handleClickBg = (e) => {
    if ((open && !element.current) || !element.current.contains(e.target))
      setOpen(!open);
  };
  const getMainEmo = async () => {
    const { data } = await service.getMainEmo(studentID);
    setmainEmotions(data);
  };
  const showEmotion = useCallback(
    ({ date, view }) => {
      for (let i = 0; i < mainEmotions.length; i += 1) {
        const date1 = new Date(mainEmotions[i].date);
        date1.setHours(0, 0, 0, 0);
        if (date.getTime() === date1.getTime()) {
          switch (mainEmotions[i].main_emotion) {
            case "happy":
              return (
                <RiEmotionHappyFill
                  style={{
                    color: "rgb(254,214,93)",
                    fontSize: "40px",
                    marginTop: "10px",
                  }}
                />
              );
            case "sadness":
              return (
                <FaSadTear
                  style={{
                    color: "rgb(70,103,157)",
                    fontSize: "40px",
                    marginTop: "10px",
                  }}
                />
              );
            case "anger":
              return (
                <FaAngry
                  style={{
                    color: "rgb(254,78,98)",
                    fontSize: "40px",
                    marginTop: "10px",
                  }}
                />
              );
            case "neutral":
              return (
                <ImNeutral
                  style={{
                    color: "rgb(59,205,124)",
                    fontSize: "40px",
                    marginTop: "10px",
                  }}
                />
              );
            case "fear":
              return (
                <FaGrimace
                  style={{
                    color: "rgb(198,165,199)",
                    fontSize: "40px",
                    marginTop: "10px",
                  }}
                />
              );

            default:
              return (
                <FaExclamationCircle
                  style={{ fontSize: "40px", marginTop: "10px" }}
                />
              );
          }
        }
      }
      // return (
      //   <FaExclamationCircle
      //     style={{ color: "gray", fontSize: "20px", marginTop: "10px" }}
      //   />
      // );
    },
    [mainEmotions]
  );
  const submitComment = () => {
    service.addComment({ idx: values.idx, comment: values.comment });
    setComment(values.comment);
  };
  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };
  //forEach사용하면 안됨...왜지?
  const handleMainEmo = () => {
    switch (mainEmotion) {
      case "happy":
        setEmotionImg(
          "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Noto_Emoji_KitKat_263a.svg/190px-Noto_Emoji_KitKat_263a.svg.png"
        );
        break;
      case "sadness":
        setEmotionImg("https://i.ibb.co/SNBt8PM/Png-Item-1094304.png");
        break;
      case "fear":
        setEmotionImg(
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJHyJ84wfFIeNfHDc6sEGvfs-1LixqbKDy5g&usqp=CAU"
        );
        break;
      case "anger":
        setEmotionImg(
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEEDdnDqRiKeY_BcFvX_F0WHIO88mBg1HEby7KKSnIpFdeiXZ50qU3-0VRWP-bwyzDcxQ&usqp=CAU"
        );
        break;
      case "neutral":
        setEmotionImg(
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpkxEPVjZoe2ju1CQbgIXzjVxIOlHAaC6YtSTFiQQe7CpttbNb7BtZLcrXb-q2E3HBVR8&usqp=CAU"
        );
        break;
      default:
        setEmotionImg(
          "https://e7.pngegg.com/pngimages/629/162/png-clipart-computer-icons-x-mark-symbol-miscellaneous-angle-thumbnail.png"
        );
        break;
    }
  };
  useEffect(() => {
    getMainEmo();
    showJournal();
  }, [studentID]);
  useEffect(() => {
    handleMainEmo();
  }, [mainEmotion]);
  return (
    <CalendarStyled>
      <ReactCalendar
        onChange={onChange}
        value={value}
        calendarType={"US"}
        onClickDay={showJournal}
        tileContent={showEmotion}
      />

      {open && (
        <DiaryBack onClick={handleClickBg}>
          {" "}
          <Diary ref={element}>
            <h1 className="display-2">{student}의 일기</h1>
            <Wrapper>
              <Content>{diary}</Content>
              <Content2>
                <MainEmo>
                  {mainEmotion}
                  <br />
                  <img
                    src={emotionImg}
                    style={{ height: "180px", width: "230px" }}
                  />
                </MainEmo>

                <DetailEmo>
                  {`행복 - ${happy}%`}
                  <br />
                  {`중립 - ${neutral}%`}
                  <br />
                  {`분노 - ${anger}%`}
                  <br />
                  {`슬픔 - ${sadness}%`}
                  <br />
                  {`두려움 - ${fear}%`}
                  <br />
                </DetailEmo>
              </Content2>
            </Wrapper>
            <Comment>
              {comment && `${comment}`}
              {!comment && diary && (
                <>
                  <Input
                    placeholder="comment를 입력해주세요"
                    type="textarea"
                    value={values.comment}
                    onChange={handleChange("comment")}
                    style={{ height: "100%", width: "90%" }}
                  />
                  <Button
                    color="primary"
                    type="button"
                    style={{ float: "right", width: "10%" }}
                    onClick={submitComment}
                  >
                    제출
                  </Button>
                </>
              )}
            </Comment>
          </Diary>{" "}
        </DiaryBack>
      )}

    </CalendarStyled>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 60%;
  width: 90%;
`;
const Diary = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: 180px;
  width: 70%;
  height: 70%;
  background-color: rgba(255, 213, 105, 1);
  border-radius: 15px;
  z-index: 10;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const DiaryBack = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 9;
`;
const Content = styled.div`
  width: 60%;
  height: 100%;
  z-index: 11;
  background-color: rgba(255, 255, 255, 1);
  font-size: x-large;
`;
const Comment = styled.div`
  width: 90%;
  height: 15%;
  z-index: 11;
  margin-top: 30px;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  flex-direction: row;
`;
const Content2 = styled.div`
  width: 40%;
  height: 100%;
  z-index: 11;
  background-color: rgba(255, 213, 105, 1);
  font-size: x-large;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-end;
`;
const MainEmo = styled.div`
  width: 90%;
  height: 50%;
  background-color: rgba(255, 255, 255, 1);
  text-align: center;
`;
const DetailEmo = styled.div`
  width: 90%;
  height: 50%;
  background-color: rgba(255, 255, 255, 1);
  text-align: center;
`;
export default React.memo(Calendar);
