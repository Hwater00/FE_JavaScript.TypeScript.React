import styled from "styled-components";

const Label = () =>{
    // Label 컴폰넌트는 Counter App이라는 문구 아래에 숫자를 표시해줍니다.


    const StyledSpan = styled.span`
        margin: 0 16px;
        font-size:1.2em;
    `;

    return(
        
        <StyledSpan>0</StyledSpan>
      
    )
}
export default Label;