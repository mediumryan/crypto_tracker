import { styled } from 'styled-components';

export const LoaderWrapper = styled.div`
    font-size: 2rem;
    color: ${(props) => props.theme.text_dark};
`;

export default function Loader() {
    return <LoaderWrapper>Loading...</LoaderWrapper>;
}
