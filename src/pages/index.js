import { useAppContext } from '../store/store';
import Layout from '../components/Layout';
import Book from '../components/Book';

export default function Index () {

    const store = useAppContext();

    const booksContainerStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
    };

    return (
        <Layout>
            <div style={booksContainerStyle}>
            {store.items.map((item) => (
                <Book key={item.id} item={item} />
            ))}
            </div>  
        </Layout>
    );
}