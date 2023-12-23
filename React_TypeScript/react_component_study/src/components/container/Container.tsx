import styled from "styled-components";
import Title from "../title/Title";
import Lable from "../label/Lable";
import Button from "../button/Button";




// 컴포넌트 명으로 함수를 만듭니다.
const Container = ()=>{ 
    const StyleDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
    `;

    const ContainerdDiv = styled.div`
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `;
    // 만약 CSS 기본문법이 아닌 JSX 문법으로 스타일링을 할 때는 케밥케이스(단어 사이에 -로 구분)
    // 아니라 카멜케이스로 적어주셔야 합니다. -는 자바스크립트에서 예약어를 사욯하기 때문입니다.
    // TSX에서는 CSS 관련해서 사용할 때 반드시 태그명을 대문자로 시작시켜야

    // TSX내지는 JSX양식에 맞춰서 마크업을 합니다.
    return(
        <>
            <ContainerdDiv>
            <Title/>
            <StyleDiv>
                <Button brnTitle="빼기" btnNumber={20}/>
                <Lable/>
                <Button brnTitle="더하기"/>
            </StyleDiv>
            </ContainerdDiv>
        </>
    )
}
// 외부에서 해당 tsx 파일을 로드할 수 있도록 위쪽의 함수를 ex0ㅁㄴ\7port 해줍니다.
export default Container;