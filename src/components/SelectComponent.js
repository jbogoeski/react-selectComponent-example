import React from 'react';

import { InputLabel, Select, MenuItem } from '@material-ui/core';


class SelectComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: '',
        }


    }

    handleChange = (e) => {
        this.setState({ selected: e.target.value});
    }


    render() {
        console.log('selected', this.state.selected);


        return (
            <div>
                <InputLabel id="label">Age</InputLabel>
                <Select labelId="label" id="select" 
                value={this.state.selected}
                onChange={this.handleChange}
                >
                    {this.props.names.map((name) => {
                    return <MenuItem
                     key={name.id} 
                     value={name.id}
                    >{name.name}</MenuItem>

                    })}
                </Select>
            </div>
        );
    }

}


export default SelectComponent;