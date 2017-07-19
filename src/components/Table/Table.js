import React from 'react';
import PropTypes from 'prop-types';
import  './table.css';
 
/** A simple table with sorting, searching feature */
class Table extends React.Component {
   constructor (props) {
       super(props);
       this.sort = this.sort.bind(this);
       console.log("CTOR: ", this.props);
       this.state = {
           data: this.props.initialData,
           headers: []
       }
   } 

   getCells(row) {
     var cells = row.map((cell, index) => {
        return <td key={index}>{cell}</td>
     });

     return cells;
   }

   sort(e) {
       var column = e.target.cellIndex;
       var data = this.state.data.slice();
       data.sort((a, b) => {
         return a[column] > b[column];
       });

       this.setState({
           data: data
       })
   }

   render() {
       console.log("RENDER: ", this.props);
       
       var thead = this.props.headers.map ((title, index) => {
          return <th key={index}>{title}</th>
       });  
        
       var tbody = this.state.data.map ((row, index) => {
          return (
            <tr key={index}>
                {this.getCells(row)}
            </tr>
          );
       });
      
       return (
        <table>
            <thead onClick={this.sort}>
                <tr>
                    {thead}
                </tr>
            </thead>
            <tbody>
                {tbody}
            </tbody>
        </table>
    );
   }
}

Table.propTypes = {
  /** Table headers array */
  headers: PropTypes.array,

  /** Initial data. */
  initialData: PropTypes.array
};

export default Table;