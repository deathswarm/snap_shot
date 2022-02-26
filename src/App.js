import './App.css';
// import { Box } from '@material-ui/core'
import { getImages } from './services/api';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import BreadCrumb from './components/BreadCrumb';
import Images from './components/Images';
// import SnackBar from './components/SnackBar';


function App() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(20);
  const [text, setText] = useState("cars");
  const [loading, setLoading] = useState(false)



  useEffect(() => {

    getImages(text, count).then(response => {
      setData(response.data.hits);
    })
  }, [text, count])

  const onTextChange = (text) => {
    setText(text)
  }
  return (
    <>
      <Navbar />
      <BreadCrumb onTextChange={onTextChange} />
      <div className="content-wrapper">
        <section id="photos">
          <Images data={data} />
        </section>
        <br />
        <div className="load-more-btn-container">
          <a className="load-more-btn" onClick={() => setCount(count + 10)}><span>Load More</span>
            <div class="wave"></div></a>
        </div>
      </div>
    </>
  );
}

export default App;
