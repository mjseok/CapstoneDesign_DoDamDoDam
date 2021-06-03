import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useContext,
} from "react";
import classnames from "classnames";

import {
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Row,
} from "reactstrap";
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
import { AuthContext } from "../../context/auth";
import Chart from "chart.js";
import { chartOptions, parseOptions, chartExample1 } from "variables/charts.js";
import { Line } from "react-chartjs-2";

const Calendar = ({ studentID,studentName }) => {
  console.log(studentID)
  const [activeNav, setActiveNav] = useState(1);
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
  const auth = useContext(AuthContext);

  const element = useRef();
  const [data1, setData1] = useState(0);
  const [data2, setData2] = useState(0);
  const [data3, setData3] = useState(0);
  const [data4, setData4] = useState(0);
  const [data5, setData5] = useState(0);
  const [data6, setData6] = useState(0);
  const [data7, setData7] = useState(0);
  const [barData, setBarData] = useState({
    labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Performance",
        data: [data1,data2,data3,data4,data5,data6,data7],
      },
    ],
  });
  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
  };

  const showJournal = async (day) => {
    const { data } = await service.getJournal(studentID, day);
    if (day !== undefined) setOpen(!open);
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
      if(mainEmotions.length===0){
        setData1(0);
         setData2(0);
         setData3(0);
         setData4(0);
         setData5(0);
         setData6(0);    
         setData7(0);    
      }
      for (let i = 0; i < mainEmotions.length; i += 1) {
        const date1 = new Date(mainEmotions[i].date);
        date1.setHours(0, 0, 0, 0);
        if (date.getTime() === date1.getTime()) {
          if(date1.getDay()==0){
            if(mainEmotions[i].main_emotion==='happy') setData1(10);
            else if(mainEmotions[i].main_emotion==='neutral') setData1(5);
            else setData1(0);
          }
          if(date.getDay()==1){
            if(mainEmotions[i].main_emotion==='happy') setData2(10);
            else if(mainEmotions[i].main_emotion==="neutral") setData2(5);
            else setData2(0);
          }
          if(date.getDay()==2){
            if(mainEmotions[i].main_emotion==='happy') setData3(10);
            else if(mainEmotions[i].main_emotion==="neutral") setData3(5);
            else setData3(0);
          }
          if(date.getDay()==3){
            if(mainEmotions[i].main_emotion==='happy') setData4(10);
            else if(mainEmotions[i].main_emotion==="neutral") setData4(5);
            else setData4(0);
          }
          if(date.getDay()==4){
            if(mainEmotions[i].main_emotion==='happy') setData5(10);
            else if(mainEmotions[i].main_emotion==="neutral") setData5(5);
            else setData5(0);
          }
          if(date.getDay()==5){
            if(mainEmotions[i].main_emotion==='happy') setData6(10);
            else if(mainEmotions[i].main_emotion==="neutral") setData6(5);
            else setData6(0);    }
          if(date.getDay()==6){
            if(mainEmotions[i].main_emotion==='happy') setData7(10);
            else if(mainEmotions[i].main_emotion==="neutral") setData7(5);
            else setData7(0);    }
  
          switch (mainEmotions[i].main_emotion) {
            case "happy":
              return (
                <RiEmotionHappyFill
                  style={{
                    color: "rgb(254,214,93)",
                    fontSize: "40px",
                    marginTop: "23px",
                  }}
                />
              );
            case "sadness":
              return (
                <FaSadTear
                  style={{
                    color: "rgb(70,103,157)",
                    fontSize: "40px",
                    marginTop: "23px",
                  }}
                />
              );
            case "anger":
              return (
                <FaAngry
                  style={{
                    color: "rgb(254,78,98)",
                    fontSize: "40px",
                    marginTop: "23px",
                  }}
                />
              );
            case "neutral":
              return (
                <ImNeutral
                  style={{
                    color: "rgb(59,205,124)",
                    fontSize: "40px",
                    marginTop: "23px",
                  }}
                />
              );
            case "fear":
              return (
                <FaGrimace
                  style={{
                    color: "rgb(198,165,199)",
                    fontSize: "40px",
                    marginTop: "23px",
                  }}
                />
              );

            default:
              return (
                <FaExclamationCircle
                  style={{ fontSize: "40px", marginTop: "23px" }}
                />
              );
          }
          
                    
        }

        
      }
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
        setEmotionImg("https://i.ibb.co/prqZdjD/Clipart-Key-118032.png");
        break;
    }
  };
  useEffect(() => {
    getMainEmo();
    showJournal();
  }, [studentID]);

  useEffect(()=>{
    setBarData({
      labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "Performance",
          data: [data1,data2,data3,data4,data5,data6,data7],
        },
      ],
    });
  },[data1,data2,data3,data4,data5,data6,data7,studentID])
  console.log(barData)

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
            <h1 className="display-2">{studentName}학생의 일기</h1>
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
                {auth.isTeacher && (
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
                )}
              </Content2>
            </Wrapper>
            <Comment>
              {comment && `${comment}`}
              {!comment &&
                diary &&
                auth.isTeacher&&(
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
       <div className="chart" style={{marginTop:"30px"}}>
       <Card className="bg-gradient-default shadow">
                    <CardHeader className="bg-transparent">
                      <Row className="align-items-center">
                        <div className="col">
                          <h6 className="text-uppercase text-light ls-1 mb-1">
                            Graph
                          </h6>
                          <h2 className="text-white mb-0">감정 변화</h2>
                        </div>
                        <div className="col">
                          <Nav className="justify-content-end" pills>
                            <NavItem>
                              <NavLink
                                className={classnames("py-2 px-3", {
                                  active: activeNav === 1,
                                })}
                                data-toggle="tab"
                                href="#pablo"
                                onClick={(e) => toggleNavs(e, 1)}
                              >
                                <span className="d-none d-md-block">Week</span>
                                <span className="d-md-none">W</span>
                              </NavLink>
                            </NavItem>
                          </Nav>
                        </div>
                      </Row>
                    </CardHeader>
                    <CardBody>
                      {/* Chart */}
                      <div className="chart">

                        <Line data={barData}
                          options={chartExample1.options}
                          getDatasetAtEvent={(e) => console.log(e)}
                        />
                      </div>
                    </CardBody>
                  </Card>
      </div>
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
