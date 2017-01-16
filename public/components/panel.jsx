import React from 'react';


class Panel extends React.Component {

  render() 
	{
	 return (
	   	 <div className="container con">
			<div className="row">
			{this.props.children}		
			</div>
		</div>
		);
	 }
}
export default Panel;