import React from 'react'

function TopButtons() {

	const cities = [
		{
			id: 1,
			title: 'Seattle',
		},
		{
            id: 2,
            title: 'New York',
		},
		{
			id: 3,
            title: 'Los Angeles',
		},
		{
			id: 4,
            title: 'Paris',
		}
	]

  return (
	<div className="flex items-center justify-around my-6">
		{cities.map((city, index) => {
                return <button key={city.id} className="text-white text-lg font-medium"> {city.title}</button>
			})
		}

	</div>
  )
}

export default TopButtons