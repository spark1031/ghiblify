import React from "react";
import { NavLink, Link } from "react-router-dom";

class CategorySelector extends React.Component {
	render() {
		let categories = this.props.categoryItemInfos.map((item, i) => (
			<CategoryItem key={i} itemInfo={item} />
		));

		return <div className="category-selector-main">{categories}</div>;
	}
}

const CategoryItem = props => {
	const { itemInfo } = props;
	const { to, displayText } = itemInfo;

	return (
		<NavLink
			className="category-item-link"
			to={to}
			style={{ textDecoration: "none" }}
		>
			<div className="category-item-wrapper">
				<div className="category-item">{displayText}</div>
			</div>
		</NavLink>
	);
};

export default CategorySelector;
