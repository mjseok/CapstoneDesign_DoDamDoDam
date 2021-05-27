import React, { useState, useEffect } from 'react';
import ReactPaginate from "react-paginate";
import StudentInfoStyled from './StudentInfo.style';
import styled from 'styled-components';
import PageLayout from '../../layouts/PageLayout'
import service from '../../service';
import StudentList from '../../components/student/StudentList';

const StudentInfo = (props) => {
    const { positiveItems } = props;

    const handlePageClick = (data) => {
        let selected = data.selected;
        console.log(selected);
        // let offset = Math.ceil(selected * this.props.perPage);

        // this.setState({ offset: offset }, () => {
        //   this.loadCommentsFromServer();
        // });
    };

    const [students, setStudents] = useState([{}]);

    // 서버에서 studentlist를 가져오는 방식
    const getAllStudent = async () => {
        const { data: AllStudent } = await service.getStudents(window.localStorage.getItem('id'));
        setStudents(AllStudent);//가져온 studentList를 students에 저장 
    };

    useEffect(() => {
        getAllStudent();//page가 넘어갈때마다 getAllStudent()함수 실행(useEffect안에 함수쓰면 page바뀔때마다 함수 실행됨)
    }, []);


    const [show, setShow] = useState(false);

    const addModalClose = (e) => {
        setShow(false);
    };

    const addModalOpen = () => {
        setShow(true);
    };

    const [show2, setShow2] = useState(false);

    const modifyModalClose = (e) => {
        setShow2(false);
    };

    const modifyModalOpen = () => {
        setShow2(true);
    };



    const theme = 'circle'
    return (
        <PageLayout>
            <StudentInfoStyled>
                <div className='flex-container2'>
                    <div className='box'>
                        <div className='row-thumbnails2'>
                            <div hidden={!show}>
                                <div className="modal-background">
                                    <div className="modal-card">
                                        <span className="close" onClick={addModalClose}>
                                            &times;
                                        </span>
                                        <label>학생 추가 화면입니다!</label>
                                    </div>
                                </div>
                            </div>

                            <div hidden={!show2}>
                                <div className="modal-background">
                                    <div className="modal-card">
                                        <span className="close" onClick={modifyModalClose}>
                                            &times;
                                        </span>
                                        <label>학생 수정 화면입니다!</label>
                                    </div>
                                </div>
                            </div>

                            <img src=" https://i.ibb.co/wg4kJYq/add.png" alt="cat" onClick={addModalOpen} />
                            <img src="http://placehold.it/80x80" alt="student2" onClick={modifyModalOpen} />
                            <img src="http://placehold.it/80x80" alt="student3" onClick={modifyModalOpen} />
                            <img src="http://placehold.it/80x80" alt="student4" onClick={modifyModalOpen} />
                        </div>
                        <div className='row-thumbnails2'>
                            <img src="http://placehold.it/80x80" alt="student5" onClick={modifyModalOpen} />
                            <img src="http://placehold.it/80x80" alt="student6" onClick={modifyModalOpen} />
                            <img src="http://placehold.it/80x80" alt="student7" onClick={modifyModalOpen} />
                            <img src="http://placehold.it/80x80" alt="student8" onClick={modifyModalOpen} />
                        </div>
                        {/* <div>
                            {"DB에서 불러온 학생 목록"}
                            <List>
                                <StudentList students={students} />
                            </List>
                        </div> */}

                    </div>
                    <div className='react-paginate'>
                        <ReactPaginate
                            previousLabel={'<<'}
                            nextLabel={'>>'}
                            breakLabel={'...'}
                            breakClassName={'break-me'}
                            pageCount={positiveItems.length / 8}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            onPageChange={handlePageClick}
                            containerClassName={'pagination'}
                            activeClassName={'active'}
                        />
                    </div>
                    <div>
                        DB에서 불러온 현재 학생 목록
                        <List>
                            <StudentList students={students} />
                        </List>
                    </div>

                   


                </div>

            </StudentInfoStyled>

        </PageLayout>





    );
};




StudentInfo.defaultProps = {
    positiveItems: [
        'https://cdn.icon-icons.com/icons2/1515/PNG/512/add_105065.png',
        'http://placehold.it/80x80',
        'http://placehold.it/80x80',
        'http://placehold.it/80x80',
        'http://placehold.it/80x80',
        'http://placehold.it/80x80',
        'http://placehold.it/80x80',
        'http://placehold.it/80x80',

    ]
};
const label = styled.div`
    width: 100px;
    font-size: 20px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const List = styled.div`
  margin-right:auto;
  width:40%;
  height:100%;
`;
export default StudentInfo;