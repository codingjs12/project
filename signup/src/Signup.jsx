import React from "react";
export default function Signup() {
    return (
        <div className="page">
            <div className='titleWrap'>
                회원가입
            </div>
            <div className="contentWrap">
                <div className="inputTitle">
                    아이디</div>
                <div className="inputWrap">
                    <input className="input"
                    placeholder="아이디를 입력하세요."
                    />
                </div>
                <div className="errorMessageWrap">
                    {}
                </div>
                <div className="inputTitle">비밀번호</div>
                <div className="inputWrap">
                    <input className="input"
                    placeholder="영문, 숫자, 특수문자를 포함한 8자 이상"
                    />
                </div>
                <div className="errorMessageWrap">
                    영문, 숫자, 특수문자를 포함한 8자리 이상의 비밀번호를 입력해주세요.
                </div>
                <div className="inputTitle">비밀번호확인</div>
                <div className="inputWrap">
                    <input className="input"
                    placeholder="비밀번호를 다시 입력해주세요."/>
                </div>
                <div className="errorMessageWrap">
                    비밀번호가 일치하지 않습니다.
                </div>
            </div>
            
            <div>
                <button disabled={true} className="bottomButton">
                    회원가입
                </button>
            </div>

        </div>
    );
}
