import React from "react";
import { Link } from "react-router-dom";
import CollectionImageTitle from "./collection_image_title";

// props: {
//    primaryTo: string path
//    secondaryTo: string path (optional)
//   imageUrl: string link
//   title: string
//   subTitle: string (optional)
// }
class CollectionItem extends React.Component {
	render() {
		let {
			circular,
			primaryTo,
			secondaryTo,
			imageUrl,
			title,
			subTitle,
			onClick
		} = this.props;
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

		if (onClick) {
			return (
				<div className="collection-item">
					<CollectionImageTitle
						onClick={onClick}
						imageUrl={imageUrl}
						title={title}
						circular={circular}
						overlayIcon={true}
					/>

					{optional}
				</div>
			);
		} else {
			return (
				<div className="collection-item">
					<CollectionImageTitle
						primaryTo={primaryTo}
						imageUrl={imageUrl}
						title={title}
						circular={circular}
					/>

					{optional}
				</div>
			);
		}
	}
}

export default CollectionItem;
