// import "./Subtitle.css";

import styled from "styled-components";

const Subtitle = () =>{

    // styled-component의 특징
    // 특정 컴포넌트 내부의 여러 요소의 전역적으로 css 적용 가능
    // 외부 컴포넌트에는 적용되지 않음.
    // 그래서 컴포넌트 스타일링을 저녁적으로 불필요하게 적용하지 않을 수 있음.
    const SubtitleH2 = styled.h2`
        color: gold;
        background:red;
    `;


    return(
        <>
        <SubtitleH2>
            Sub Title 입니다.
        </SubtitleH2>
        </>
    )
}

export default Subtitle;
