import React, { Component } from 'react';

class　Bill extends Component {
	getData () {
		let url = 'https://github.com/RxWylj/normal/blob/master/bill.json'
		$.ajax({
			url: url,
			type: 'GET',
			dataType: 'json',
		})
		.done(function(res) {
			console.log(res);
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});
	},
	render () {
		let table = []
		table.push(
				<ul>
					<li onClick={this.getData}>序号</li>
					<li>银行名</li>
					<li>总欠款</li>
					<li>本期应还</li>
					<li>本期最低应还</li>
					<li>本期已还</li>
				</ul>)
		return (
			<div>
			</div>
		)
	}
}

export default Bill;