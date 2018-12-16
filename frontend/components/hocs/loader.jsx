import React from "react";

const loader = WrappedComponent => {
	return class extends React.Component {
		componentDidMount() {
			const { wrappedPropsLoader } = this.props;
			wrappedPropsLoader();
		}

		render() {
			const { initialWrappedProps } = this.props;
			if (initialWrappedProps) {
				return <WrappedComponent {...initialWrappedProps} />;
			} else {
				return <p>I'm LOADING!</p>;
			}
		}
	};
};

export default loader;
