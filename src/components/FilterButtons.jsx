import React from 'react'

const FilterButtons = ({ filterValue, setFilterValue }) => {
    return (
        <div className="container center">
            <button 
                className="spacing btn-small blue"
                onClick={() => setFilterValue("SHOW_ALL")}
            >
                All
            </button>
            <button 
                className="spacing btn-small blue"
                onClick={() => setFilterValue("SHOW_ACTIVE")}
            >
                Active
            </button>
            <button 
                className="spacing btn-small blue"
                onClick={() => setFilterValue("SHOW_COMPLETED")}
            >
                Completed
            </button>
            
        </div>
    )
}

export default FilterButtons