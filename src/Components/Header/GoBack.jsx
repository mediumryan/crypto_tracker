import { useNavigate } from 'react-router-dom';
import { keyframes, styled } from 'styled-components';
// import icons
import { FaBackward } from 'react-icons/fa';

const goBackBtnAnimation = keyframes`
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(-20px);
    }
`;

const GoBackBtn = styled.button`
    font-size: 1.15rem;
    color: ${(props) => props.theme.accent_dark};
    &:hover {
        animation: ${goBackBtnAnimation} 750ms linear infinite;
    }
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        top: 0.5rem;
    }
`;

export default function GoBack() {
    const navigate = useNavigate();

    return (
        <GoBackBtn
            onClick={() => {
                navigate('/');
            }}
        >
            <FaBackward />
        </GoBackBtn>
    );
}
