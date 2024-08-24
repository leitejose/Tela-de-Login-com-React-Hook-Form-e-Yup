// src/components/Button/styles.ts
import styled from 'styled-components';

export const ButtonContainer = styled.button<{ disabled?: boolean }>`
    width: 100%;
    height: 42px;
    background-color: ${props => (props.disabled ? '#ccc' : '#81259D')};
    color: ${props => (props.disabled ? '#666' : '#FFF')};
    border: 1px solid ${props => (props.disabled ? '#ccc' : '#81259D')};
    border-radius: 21px;
    cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
    opacity: ${props => (props.disabled ? 0.6 : 1)};

    &:hover {
        opacity: ${props => (props.disabled ? 0.6 : 0.8)};
    }
`;
