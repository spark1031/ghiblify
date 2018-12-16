import React from "react";
import { Link } from "react-router-dom";
import PlayButtonOverlay from "./play_button_overlay";

// props: {
//    primaryTo: string path
//    secondaryTo: string path (optional)
//   imageUrl: string link
//   title: string
//   subTitle: string (optional)
// }
class CollectionItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isHovering: false
		};
	}
	// componentDidMount() {
	// 	const imageTitle = document.getElementsByClassName(
	// 		"collection-image-title"
	// 	);
	// 	imageTitle.addEventListener(
	// 		"mouseover",
	// 		() => {
	// 			this.setState({ isHovering: true });
	// 		}
	// 	);
	// }

	toggleHover(isHovering) {
		return () => {
			this.setState({ isHovering });
		};
	}

	render() {
		let {
			primaryTo,
			secondaryTo,
			imageUrl,
			title,
			subTitle
		} = this.props.itemInfo;
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

		const overlay = this.state.isHovering ? <PlayButtonOverlay /> : null;

		return (
			<div className="collection-item">
				<div
					className="collection-image-title"
					onMouseEnter={this.toggleHover(true)}
					onMouseLeave={this.toggleHover(false)}
				>
					<Link to={primaryTo} style={{ textDecoration: "none" }}>
						<div className="image">
							<img src={imageUrl} height="200px" width="200px" />
							{overlay}
						</div>
					</Link>

					<Link
						className="title"
						to={primaryTo}
						style={{ textDecoration: "none" }}
					>
						<div>{title}</div>
					</Link>
				</div>

				{optional}
			</div>
		);
	}
}

export default CollectionItem;
