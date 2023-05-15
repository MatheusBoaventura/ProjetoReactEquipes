import styled from "styled-components";

const LoginContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(to bottom, #2E0249, #570A57, #A91079, #F806CC);
`

function Login(){
    return(
        <LoginContainer>
            <Header/>
        </LoginContainer>
    );
}