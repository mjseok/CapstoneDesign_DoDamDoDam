import React from 'react';
import ReactPaginate from "react-paginate";
import StudentInfoStyled from './StudentInfo.style';
import styled from 'styled-components';
import PageLayout from '../../layouts/PageLayout'
import ReactWordcloud from 'react-wordcloud';

const StudentInfo = (props) => {
    let words = [
        {
          text: '일일일',
          value: 1,
        },
        {
          text: '이이이',
          value: 2,
        },
        {
          text: '삼삼삼삼',
          value: 3,
        },
        {
          text: '사사사',
          value: 4,
        },
        {
          text: '오오오',
          value: 5,
        },
        {
          text: '육육육육육',
          value: 6,
        },
        {
          text: '칠칠칠',
          value: 7,
        },
        {
          text: '팔',
          value: 8,
        },
        {
          text: '구구',
          value: 9,
        },
        {
          text: '십십십',
          value: 10,
        },
        
      ];
      
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

    function makeDog(e) {
        //e.target.setAttribute('src', 'https://source.unsplash.com/LYK3ksSQyeo');
        e.target.setAttribute('src', 'http://placehold.it/90x90');
        e.target.setAttribute('alt', 'dog');
    }
    const theme = 'circle'
    return (
        <PageLayout>
            <StudentInfoStyled>
                <div className='flex-container2'>
                    <div className='box'>
                        <div className='row-thumbnails2'>
                            <img src="http://placehold.it/80x80" alt="cat" onClick={makeDog} />
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
                <div className='flex-container3 abs'>
                </div>







            </StudentInfoStyled>

        </PageLayout>





    );
};




StudentInfo.defaultProps = {
    positiveItems: [
        'http://placehold.it/80x80',
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

export default StudentInfo;

