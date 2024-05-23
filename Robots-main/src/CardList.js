import React from 'react'; // Import React so JSX is available	
import Card from './Card'; 

const CardList = ({robots}) => { // gets robot prop

	return( // a component needs to return something, in this case card 

		<div>
	{
		robots.map((user, i) => { // Check out map

		return(

			<Card 

				key={i} // Give a unique key to each element (react semantincs)
				id={ robots[i].id } //get id, name and email for each value of i
				name={ robots[i].name }
		 		email={  robots[i].email }

			 /> 
			)		
		})

	}
		</div>
	)
}

export default CardList; // Need to export de component 