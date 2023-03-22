import axios from 'axios';
import React, { useState } from 'react';
import swal from "sweetalert";

export default function AddTask() {
    const [unit_name, setUnitName] = useState('');
    const [unit_intro, setUnitIntro] = useState('');

    const onChangeunitname = (e) => {
        setUnitName(e.target.value);
    }

    const onChangeunitintro = (e) => {
        setUnitIntro(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
         
        console.log(`Form submitted:`);
        console.log(`Unit Name: ${unit_name}`);
        console.log(`Unit Introduction: ${unit_intro}`);

        const newTodo = {
            unit_name: unit_name,
            unit_intro: unit_intro,
        };

        axios.post('http://localhost:4000/units/add', newTodo)
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
                    <label>Unit </label>
                    <input  type="text"
                            className="form-control"
                            value={unit_name}
                            required
                            onChange={onChangeunitname}
                    />
                    <br></br>
                    <label>Introduction </label>
                    <input  type="text"
                            className="form-control"
                            value={unit_intro}
                            onChange={onChangeunitintro}
                    />
                    <br></br>
                    <input type="submit" value="Save Unit" className="btn btn-primary" />
                </div>
            </form>
        </div>
    )
}
