import React, { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import * as Yup from "yup";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from "../../Firebase config/firebase";
import { v4 } from "uuid";

function AddArticle() {
  const [articleUpload, setArticleUpload] = useState(null)

  const validationSchema = Yup.object().shape({
    articleName: Yup.string().required('Article name is required'),
    articleDesc: Yup.string().required('Description is required'),
  });

    const [articleName, setarticleName] = useState('');
    const [articleDesc, setarticleDesc] = useState('');
    const [errors, setErrors] = useState({});
  
    const onChangeArtName = (e) => {
      setarticleName(e.target.value);
    };
  
    const onChangeArtIntro = (e) => {
      setarticleDesc(e.target.value);
    };
  
    async function onSubmit (e)  {
      e.preventDefault();
      try {
        await validationSchema.validate({ articleName: articleName, articleDesc: articleDesc }, { abortEarly: false });

      console.log(`Form submitted:`);
      console.log(`Article Name: ${articleName}`);
      console.log(`Article Introduction: ${articleDesc}`);
  
      var newArticle = {
        articleName: articleName,
        articleDesc: articleDesc,
      };
  
      if (articleUpload == null) return;
      const articleRef = ref(storage, `Articles/${articleUpload.name + v4()}`);
       

      uploadBytes(articleRef, articleUpload).then((article) => {
        getDownloadURL(article.ref).then((url) => {
          console.log(url);
          newArticle = {...newArticle,articleUrl:url}
          axios.post('http://localhost:1337/arts/add', newArticle)
          .then((res) => {
              console.log(res.data);
                  swal({
                    icon: "success",
                    text: "Successfully created",
                  });
                  setarticleName('');
                  setarticleDesc('');
                  setErrors({});
              })
          
        });
      }); 
     
                }catch(err) {
                console.error(err);
                const validationErrors = {};
                err.inner.forEach((e) => {
                  validationErrors[e.path] = e.message;
                });
                setErrors(validationErrors);
                  swal({
                    icon: "warning",
                    text: "Error",
                  });
                };
    };
  
    return (
      <div style={{marginTop: 20}}>
        <form onSubmit={onSubmit}>
          <div className="form-control">
            <label>Article</label>
            <input  type="text"
                    className="form-control"
                    value={articleName}
                     
                    onChange={onChangeArtName}
            />
            {errors.articleName && <div className="error">{errors.articleName}</div>}
            <br></br>
            <label>Introduction </label>
            <input  type="text"
                    className="form-control"
                    value={articleDesc}
                    onChange={onChangeArtIntro}
            />
            {errors.articleDesc && <div className="error">{errors.articleDesc}</div>}
            <br></br>
            <input type="file" accept=".pdf,.doc,.docx" className="form-control" aria-label="file example"  
             onChange={(event) => {
              setArticleUpload(event.target.files[0]);
            }}/>
            <br></br>
            <input type="submit" value="Save Article" className="btn btn-primary"
             />
          </div>
        </form>
      </div>
    );
  }
  
  export default AddArticle;

