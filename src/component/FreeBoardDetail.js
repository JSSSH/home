import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import '../css/FreeBoardDetail.css';

function FreeBoardDetail({ userInfo }) {

  const {id} = useParams();
  const [board, setBoard] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/board/${id}`)
    .then(response => {
      setBoard(response.data);
      setIsLoading(false);
    }).catch(error => {
      console.log(error);
    })
  },[id])

  if(isLoading)
    return <div>로딩중...</div>

  return(
    <div className="fb-detail-con">
      <h3 className="fb-detail-title">게시글 상세페이지</h3>
      <div className="fb-detail-window">
        <table className="fb-detail-table">
          <colgroup>
            <col width="15%"/>
            <col width="35%"/>
            <col width="15%"/>
            <col width="*"/>
          </colgroup>
          
          <tbody>
            <tr>
              <th>제목</th>
              <td>테스트</td>
              <th>조회수</th>
              <td>1</td>
            </tr>
            <tr>
                <th>작성자</th>
                <td>관리자</td>
                <th>작성일</th>
                <td>2023-01-01</td>
            </tr>
            <tr>
              <th className="fb-detail-content">내용</th>
              <td colspan="3">
                  테스트 내용입니다
              </td>
            </tr>
          </tbody>
        </table>
        <div className="fb-detail-btn-box">
          <button className="fb-detail-back-btn">목록</button>
          <button className="fb-detail-modify-btn">수정</button>
          <button className="fb-detail-delete-btn">삭제</button>
        </div>
      </div>
      <div class="fb-comment-section">
        <div class="fb-comment-input">
          <input type="text" placeholder="댓글을 입력하세요"/>
          <button class="fb-comment-submit">등록</button>
        </div>
        <div class="fb-comment-list">
          <div class="fb-comment">
            <div class="fb-comment-info">
              <span class="fb-comment-author">사용자1:</span>
              <span class="fb-comment-date">2023-01-03</span>
            </div>
            <p class="fb-comment-text">댓글 내용입니다.</p>
          </div>
          <div class="fb-comment">
            <div class="fb-comment-info">
              <span class="fb-comment-author">사용자2:</span>
              <span class="fb-comment-date">2023-01-04</span>
            </div>
            <p class="fb-comment-text">다른 댓글 내용입니다.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FreeBoardDetail;