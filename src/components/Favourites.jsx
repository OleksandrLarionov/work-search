import { Button, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Favourites = () => {
	const myFavorites = useSelector((state) => state.favorite.content);
	const dispatch = useDispatch();
	return (
		<Container>
			<Row>
				<Col>
					<ListGroup>
						{myFavorites.map((favorite, i) => {
							return (
								<ListGroup.Item
									key={favorite._id}
									className='d-flex justify-content-between'>
									<Link to={`/${favorite.company_name}`}>{favorite.company_name}</Link>
									<Button
										variant='danger'
										onClick={() => {
											dispatch({
												type: 'REMOVE_FROM_FAVORITE',
												payload: i,
											});
										}}>
										Remove
									</Button>
								</ListGroup.Item>
							);
						})}
					</ListGroup>
				</Col>
			</Row>
		</Container>
	);
};
export default Favourites;
