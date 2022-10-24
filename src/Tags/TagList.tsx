import React from 'react';
import { useTagStore } from './hooks';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const TagList = () => {
	const { tags, removeTagByIndex } = useTagStore();
	return (
		<Row>
			<Col xs={6} className="p-3">
				<ListGroup>
					{tags.map((tag, index) => (
						<ListGroup.Item key={`${tag}${index}`} onClick={() => removeTagByIndex(index)}>
							{tag}
						</ListGroup.Item>
					))}
				</ListGroup>
			</Col>
		</Row>
	);
};

export default TagList;
