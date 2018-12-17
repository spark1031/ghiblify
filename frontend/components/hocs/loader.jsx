import React from "react";

const loader = WrappedComponent => {
	return class extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
				isLoaded: false
			};
		}
		componentDidMount() {
			const { wrappedPropsLoader } = this.props;
			// wrappedPropsLoader().then(() =>
			// 	this.state({
			// 		isLoaded: true
			// 	})
			// );
			wrappedPropsLoader();
		}
		render() {
			const { initialWrappedProps } = this.props;
			const { isLoaded } = this.state;
			if (initialWrappedProps) {
				return (
					<WrappedComponent {...initialWrappedProps} isLoaded={isLoaded} />
				);
			} else {
				return <p>I'm LOADING!</p>;
			}
		}
	};
};

export default loader;
