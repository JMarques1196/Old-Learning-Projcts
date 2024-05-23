import React from 'react'
 
const SearchBox = ({searchfield, searchChange}) => {

		return(


			<div className='pa2'>

				<input // creates a input 
				
				className='pa3 ba b--green bg-lightest-blue'
				type = 'search' // type specifies type of input
				placeholder='search robots' // description inside the box
				onChange={searchChange}
				/>

			</div>

		);


}

export default SearchBox;