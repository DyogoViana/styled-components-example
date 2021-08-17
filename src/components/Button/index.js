import styled from "styled-components";

const Button = styled.button`
    font-family: 'Press Start 2P', cursive;
    font-size: 1.5rem;
    color: #d1d8e0;

    border: none;
    border-radius: 5em;
    background-color: #778ca3;
    cursor: pointer;
    width: 10em;
    height: 10em;

        &:hover {
            color: #d1d8e0;
            background-color: #4b6584;
            border: .1em solid #26de81;
        }
`;

export default Button;