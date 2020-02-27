import React, {Component} from 'react';
import {usersJSON} from '../data';

export default class Table extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: usersJSON
		}
	}

    componentDidMount(){
        console.log('[Table.js] did mount')
    }

	componentWillReceiveProps() {

	}

    // complete the comparators
	compareByAge(a, b) {
		return a > b
	}

	compareByName(a, b) {
		return a > b
	}

	compareByPoints(a, b) {
		return a > b
	}

	compareByRank(a, b) {
		return a > b
	}

	render() {
 
		return (<div>
			<table className="table table-striped">
				<thead>
					<tr key="head">
						<th>Age</th>
						<th>Name</th>
						<th>Points</th>
						<th>Rank</th>
					</tr>
				</thead>
				<tbody>
				<td>
				{this.state.users.map((item, index) => <p key={item.index}>{item.age}</p>)}
				</td>
				<td>
				{this.state.users.map((item, index) => <p key={item.index}>{item.name}</p>)}
				</td>
				<td>
                {this.state.users.map((item, index) => <p key={item.index}>{item.points}</p>)}
                </td>
                <td>
                {this.state.users.map((item, index) => <p key={item.index}>{item.rank}</p>)}
                </td>
				</tbody>
			</table>
		</div>)
	}
}
