import styled from "styled-components";

// 해당 컴포넌트에서 전달받을 자료에 대한 명칭: 자료형을 interdace를 이용햐
// 지정할 수 있고, export를 이용해 외부에서 해당 규칙을 조회할 수 있습니다.
// 자식쪽에 지정합니다.
export interface ButtonProps{
    brnTitle:string;
    // 만약 필수 요구자료가 아닌 경우는 프로퍼티명 끝에 ?를 추가로 붙여주면 선택적으로 받습니다.
    btnNumber?: number;
};
// Button이라는 컴포넌트가 받아올 것이라고 주장함. 
const Button = (props:ButtonProps) =>{//(왼쪽 변수명: 오른쪽 타입)

    const StyledButton = styled.button`
        border:0;
        color:#ffffff;
        background-color: #ff5722;
        curdor:pointer;
        padding: 8px, 16px;
        border-redius: 4px;

        // 마우스가 올라감hobver , 자기 자신을 가리키는 &
        &:hobver{
            background-cilor:#ff5722;
            opacity:0.8;
        }
        
        
        &:active{
            box-shadow: inset 5px 5px 10px rgba(0,0,0, 0.2);
        }
    `;

    return(
        <StyledButton>
            {props.brnTitle}/{props.btnNumber}
        </StyledButton>
    );
}
export default Button;