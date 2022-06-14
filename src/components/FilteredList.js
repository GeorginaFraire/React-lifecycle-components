import React from "react";
import PropsTypes from 'prop-types'

export default class FilteredList extends React.Component {

    static propsType = {
        list: PropsTypes.arrayOf(PropsTypes.object).isRequiered,
        filterValue: PropsTypes.string.isRequired
    };

    render() {
       return( 
       <div>
            { this.props.list.map((item) => {    
              return (<div key={item.id}>
                        <pre>{JSON.stringify(item, null, 2)}</pre>
                    </div>)
            })};
        </div>
        );
    }
}