import React from "react";
import PropsTypes from "prop-types";

export default class FilteredList extends React.Component {
  static propsType = {
    list: PropsTypes.arrayOf(PropsTypes.object).isRequiered,
    filterValue: PropsTypes.string.isRequired,
  };

  state = {
    list: this.props.list,
  };

  // method to filter the list, this is part of the component life cycle
  componentDidUpdate(prevProps) {

    if (prevProps.filterValue !== this.props.filterValue) {
      this.setState({
        list: this.props.list.filter((item) => {
          return item.name
            .toLowerCase()
            .includes(this.props.filterValue.toLowerCase());
        }),
      }
      );
    }
   
  }

  render() {
  
    return (
      <div>
        {this.state.list.map((item) => {
          return (
            <div key={item.id}>
              <pre>{JSON.stringify(item, null, 2)}</pre>
            </div>
          );
        })}
        ;
      </div>
    );
  }
}
