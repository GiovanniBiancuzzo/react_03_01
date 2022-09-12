import { Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
    addToFavouriteAction,
    removeFromFavouriteAction,
} from "../redux/actions";

const Job = ({ data }) => {
    const favourites = useSelector((state) => state.favourite.list);
    const dispatch = useDispatch();
    const favourited = favourites.includes(data);

    return (
        <Row
            className="mx-0 mt-3 p-3"
            style={{ border: "1px solid #00000033", borderRadius: 4 }}
        >
            <Col xs={1}>
                {favourited ? (
                    <BsHeartFill
                        onClick={() => {
                            console.log(
                                "set 'non preferito', dispatch rimuovi preferiti e cambio icona"
                            );
                            dispatch(removeFromFavouriteAction(data));
                        }}
                    />
                ) : (
                    <BsHeart
                        onClick={() => {
                            console.log(
                                "set 'preferito',dispatch aggiungi preferiti e cambio icona"
                            );
                            dispatch(addToFavouriteAction(data));
                        }}
                    />
                )}
            </Col>
            <Col xs={1}>
                <Image src="data.company_logo_url" thumbnail />
            </Col>
            <Col xs={3}>
                <Link to={`/${data.company_name}`}>{data.company_name}</Link>
            </Col>
            <Col xs={7}>
                <a href={data.url} target="_blank" rel="noreferrer">
                    {data.title}
                </a>
            </Col>
        </Row>
    );
};

export default Job;
