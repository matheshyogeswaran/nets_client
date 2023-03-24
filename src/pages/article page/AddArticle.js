import React, { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
function AddArticle() {
    const [artName, setArtName] = useState('');
    const [artIntro, setArtIntro] = useState('');
  
    const onChangeArtName = (e) => {
      setArtName(e.target.value);
    };
  
    const onChangeArtIntro = (e) => {
      setArtIntro(e.target.value);
    };
  
    const onSubmit = (e) => {
      e.preventDefault();
       
      console.log(`Form submitted:`);
      console.log(`Article Name: ${artName}`);
      console.log(`Article Introduction: ${artIntro}`);
  
      const newArticle = {
        articleName: artName,
        articleDesc: artIntro,
      };
  
       

      axios.post('http://localhost:1337/arts/add', newArticle)
            .then((res) => {
                console.log(res.data);
                    swal({
                      icon: "success",
                      text: "Successfully created",
                    });
                    setArtName('');
                    setArtIntro('');
                   
                })
                .catch((error) => {
                  console.log(error);
                  swal({
                    icon: "warning",
                    text: "Error",
                  });
                });
    };
  
    return (
      <div style={{marginTop: 20}}>
        <form onSubmit={onSubmit}>
          <div className="form-control">
            <label>Article</label>
            <input  type="text"
                    className="form-control"
                    value={artName}
                    required
                    onChange={onChangeArtName}
            />
            <br></br>
            <label>Introduction </label>
            <input  type="text"
                    className="form-control"
                    value={artIntro}
                    onChange={onChangeArtIntro}
            />
            <br></br>
            <input type="file" className="form-control" aria-label="file example" required/>
            <br></br>
            <input type="submit" value="Save Article" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
  
  export default AddArticle;

