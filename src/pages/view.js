import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { useAppContext } from "../store/store";

export default function View () {

    const [item, setItem] = useState({});
    const params = useParams();
    const store = useAppContext();

    useEffect(() => {
        const book = store.getItem(params.bookId);
        setItem(book);
    }, [])

    const itemStyles = {
        container: {
            display: 'flex',
            gap: '20px',
            color: '#AAD8D3',
            width: '800px',
            margin: '0 auto',
        },
    };

    if (!item) {
        return <Layout>Item not found</Layout>
    }

    return (
        <Layout>
            <div style={itemStyles.container}>
                <div>
                    <div>{item?.cover ? <img src={item?.cover} width='300' alt={item.title} /> : ''}</div>
                </div>
                <div>
                    <h2>{item?.title}</h2>
                    <div>{item?.author}</div>
                    <div>{item?.genre}</div>
                    <div>{item.completed ? 'Read' : 'Book to finish'}</div>
                    <div>{item?.review}</div>
                </div>
            </div>
        </Layout>
    );
}