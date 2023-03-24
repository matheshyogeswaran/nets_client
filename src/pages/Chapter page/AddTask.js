import axios from 'axios';
import React, { useState } from 'react';
import swal from "sweetalert";

export default function AddTask() {
    const [UnitName, setUnitName] = useState('');
    const [UnitIntro, setUnitIntro] = useState('');

    const onChangeunitname = (e) => {
        setUnitName(e.target.value);
    }

    const onChangeunitintro = (e) => {
        setUnitIntro(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
         
        console.log(`Form submitted:`);
        console.log(`Unit Name: ${UnitName}`);
        console.log(`Unit Introduction: ${UnitIntro}`);

        const newTodo = {
            unitName: UnitName,
            unitDesc: UnitIntro,
        };

        axios.post('http://localhost:1337/units/add', newTodo)
        .then((res) => {
            console.log(res.data);
                swal({
                  icon: "success",
                  text: "Successfully created",
                });
                setUnitName('');
                setUnitIntro('');
               
            })
            .catch((error) => {
              console.log(error);
              swal({
                icon: "warning",
                text: "Error",
              });
            });

        

         
    }

    return (
        <div style={{marginTop: 20}}>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="unitName">Unit </label>
                    <input  type="text"
                            id="unitName"
                            className="form-control"
                            value={UnitName}
                            required
                            onChange={onChangeunitname}
                    />
                    <br></br>
                    <label htmlFor="unitIntro">Introduction </label>
                    <input  type="text"
                            id="unitIntro"
                            className="form-control"
                            value={UnitIntro}
                            onChange={onChangeunitintro}
                    />
                    <br></br>
                    <input type="submit" value="Save Unit" className="btn btn-primary" />
                </div>
            </form>
        </div>
    )
}
