import React from 'react';

const Comment = ({comment})=>{
	return (
	 	<div class="">
	        <form>
	        	<textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Add a comment..."></textarea>
	        
			    <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
				    Submit
				</button>
			</form>
		</div>
	)
}

export default Comment;