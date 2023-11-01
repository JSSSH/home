import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../css/WriteFreeBoard.css';

function WriteFreeBoard({ userInfo }) {

  const [board, setBoard] = useState({
    title : '',
    content : '',
    writer : ''
  });

  const navigate = useNavigate();

  const changeHandler = (e) => {
    setBoard({
      ...board,
      [e.target.name] : e.target.value
    })
  }

  return(
    <div className="form-container">
      <h3 className="write-title">게시판 글쓰기</h3>
        <div className="input-container">
          <label className="form-label" for="title">제목</label>
          <input type="text" id="title" name="title" placeholder="제목을 입력하세요"/>
        </div>
        <div class="input-container">
          <label className="form-label" for="content">내용</label>
          <textarea id="content" name="content" placeholder="내용을 입력하세요"></textarea>
        </div>
        <div class="input-container">
          <label className="form-label" for="file">첨부파일</label>
          <input type="file" id="file" name="file" accept=".pdf, .doc, .docx, .jpg, .png"/>
        </div>
        <div class="button-container">
          <button className="write-cancel-btn">취소</button>
          <button className="write-submit-btn">등록</button>
        </div>
    </div>
  );
}

export default WriteFreeBoard;