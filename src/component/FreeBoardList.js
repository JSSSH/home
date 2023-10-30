import { useEffect, useState } from 'react';
import '../css/FreeBoardList.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function FreeBoardList() {
	const [boardList, setBoardList] = useState();
  const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}`)
    .then(response => {
      setBoardList(response.data);
      setIsLoading(false);
    }).catch(error => {
      console.log(error);
    }) 
  },[])
	
	if(isLoading)
	return <div>로딩중...</div>

  return (
    <div className="board-list">
      <h1>게시판 리스트</h1>
      <table>
        <thead>
          <tr>
            <th>글번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일</th>
            <th>조회수</th>
          </tr>
        </thead>
        <tbody>
          {
						boardList.map((board, i) => {
              return(
                <tr key={i}>
                  <td>{board.id}</td>
                  <td>
                    <Link to = {`/board/${board.id}`}>
                      {board.title}
                    </Link>
                  </td>
                  <td>{board.writer}</td>
                </tr>
              )
            })
					}
        </tbody>
      </table>
      <button className="btn">글쓰기</button>
    </div>
  );
}

export default FreeBoardList;