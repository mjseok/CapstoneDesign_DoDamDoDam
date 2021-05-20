import React, { useState, useEffect } from 'react';
import ReactPaginate from "react-paginate";
import StudentInfoStyled from './StudentInfo.style';
import styled from 'styled-components';
import PageLayout from '../../layouts/PageLayout'
import service from '../../service';
import StudentList from '../../components/student/StudentList';

const StudentInfo = (props) => {
    const hello = ["안녕요?ㅎ", "Hello?", "니하오"];
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

    function makeDog(e) {
        //e.target.setAttribute('src', 'https://source.unsplash.com/LYK3ksSQyeo');
        e.target.setAttribute('src', 'http://placehold.it/90x90');
        e.target.setAttribute('alt', 'dog');
    }

    const [show, setShow] = useState(false);

    const handleModalClose = (e) => {
        setShow(false);
    };

    const handleModalOpen = () => {
        setShow(true);
    };


    const theme = 'circle'
    return (
        <PageLayout>
            <StudentInfoStyled>
                <div className='flex-container2'>
                    <div className='box'>
                        <div className='row-thumbnails2'>
                            <div
                                hidden={!show}
                            >
                                <div
                                    className="modal-background"
                                    onClick={handleModalClose}
                                >
                                    <div className="modal-card">

                                    </div>
                                </div>
                            </div>
                            <img src="http://placehold.it/50x50" alt="cat" onClick={handleModalOpen} />
                            <img src="http://placehold.it/80x80" alt="student2" onClick={makeDog} />
                            <img src="http://placehold.it/80x80" alt="student3" onClick={makeDog} />
                            <img src="http://placehold.it/80x80" alt="student4" onClick={makeDog} />
                        </div>
                        <div className='row-thumbnails2'>
                            <img src="http://placehold.it/80x80" alt="student5" onClick={makeDog} />
                            <img src="http://placehold.it/80x80" alt="student6" onClick={makeDog} />
                            <img src="http://placehold.it/80x80" alt="student7" onClick={makeDog} />
                            <img src="http://placehold.it/80x80" alt="student8" onClick={makeDog} />
                        </div>
                        <div>
                            <List>
                                <StudentList students={students} />
                            </List>
                        </div>

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