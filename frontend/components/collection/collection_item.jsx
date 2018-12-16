import React from "react";
import { Link } from "react-router-dom";

// props: {
//    primaryTo: string path
//    secondaryTo: string path (optional)
//   imageUrl: string link
//   title: string
//   subTitle: string (optional)
// }
const CollectionItem = props => {
	let { primaryTo, secondaryTo, imageUrl, title, subTitle } = props.itemInfo;
	let optional;
	if (subTitle && secondaryTo) {
		optional = (
			<Link className="sub-title" to={secondaryTo}>
				<div>{subTitle}</div>
			</Link>
		);
	} else if (subTitle) {
		optional = <div>{subTitle}</div>;
	} else {
		optional = <div />;
	}
	return (
		<div className="collection-item">
			<Link className="image" to={primaryTo} style={{ textDecoration: "none" }}>
				<img src={imageUrl} height="200px" width="200px" />
			</Link>

			<Link className="title" to={primaryTo} style={{ textDecoration: "none" }}>
				<div>{title}</div>
			</Link>

			{optional}
		</div>
	);
};

export default CollectionItem;
