import styled from "styled-components";
import Subtitle from "../subtitle/Subtitle";
import "./Title.css";

// 컴포넌트 명으로 함수를 만듭니다.
const Title = () =>{
    // 스타일링 등은 해당 컴포넌트의 리턴 구문 전에 js 객체형태로 작성해둡니다.
    const style ={color:'red',backgroundColor:"yellow" }

    // styled h1을 적용해줍니다.
    const TitleH1 = styled.h1`
        margin-bottom:32px
    `;

    // TSX 내지는 JSX 양식에 맞춰서 마크업을 합니다.

    return(
        <>
        <TitleH1>Counter APP</TitleH1>

        {/* <h1 style = {style}> Counter APP</h1>
        <h1 style = {style}>
            스타일 태그에 직접 작성시: 태그 여러개면 일일이 다 붙여줌
        </h1>
        <h2 className="title">
            리액트
        </h2>
        <h2>
            타입스크립트
        </h2>
        <h2>
            스프링부트
        </h2> */}
        
        {/* 자식 컴포넌트가 같은 태그를 포함하면 자식 css가 같이 적용되는 문제가 생길 수 있습니다. */}
        {/* <Subtitle/> 
        <Subtitle/>
        <Subtitle/> */}
        {/* 따로 적용 되는 것이 아니라 마지막이 적용됩니다.  
        렌더링 순서: 컨테이너-> 타이틀-> Subtitle이 적용되면서 Subtitle.css h2가 전체 적용됩니다.*/} 

        </>
    )
}
// 외부에서 해당 tsx 파일을 로드할 수 있도록 위쪽의 함수를 export 해줍니다.
export default Title;