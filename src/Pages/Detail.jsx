import { useParams } from 'react-router-dom';
import { Loader, PageWrapper } from './Home';

export default function Detail({ coin, isLoading }) {
    const { coinId } = useParams();

    console.log(coinId);

    return (
        <PageWrapper>
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <div>{coinId}</div>
                </>
            )}
        </PageWrapper>
    );
}
