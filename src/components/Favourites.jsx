import { Button, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

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
									{favorite.company_name} || {favorite.title}{' '}
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
