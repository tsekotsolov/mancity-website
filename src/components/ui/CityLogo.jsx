import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../resources/images/logos/manchester_city_logo.png';

export const CityLogo = (props) => {
	let template = (
		<div
			className="img_cover"
			style={{
				width: props.width,
				height: props.height,
				background: `url(${logo}) no-repeat`
			}}
		/>
	);

	props.link &&
		(template = (
			<Link to={props.linkTo} className="link_logo">
				{template}
			</Link>
		));

	return template;
};
