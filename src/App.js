import './App.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



function App() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 8
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3
    }
  };
  return (
    <div className='App'>
      <h4>Beauty Product and More</h4>
      <Carousel responsive={responsive}>
  <div className='card'>
    <a href="#" className='a'><img className='product--image' src="https://tse1.mm.bing.net/th?id=OIP.dcLtZnQtLx1m4ZZQNSlOnQHaH3&pid=Api&P=0&h=180" alt="image" />
    <h4>Nail Polish</h4>
    <h6>Up to 70% Off</h6>
    </a>
  </div>
  <div className='card'>
    <a href="#" className='a'><img className='product--image' src="https://tse1.mm.bing.net/th?id=OIP.dcLtZnQtLx1m4ZZQNSlOnQHaH3&pid=Api&P=0&h=180" alt="image" />
    <h4>Nail Polish</h4>
    <h6>Up to 70% Off</h6>
    </a>
  </div>
  <div className='card'>
    <a href="#" className='a'><img className='product--image' src="https://tse1.mm.bing.net/th?id=OIP.dcLtZnQtLx1m4ZZQNSlOnQHaH3&pid=Api&P=0&h=180" alt="image" />
    <h4>Nail Polish</h4>
    <h6>Up to 70% Off</h6>
    </a>
  </div>
  <div className='card'>
    <a href="#" className='a'><img className='product--image' src="https://tse1.mm.bing.net/th?id=OIP.dcLtZnQtLx1m4ZZQNSlOnQHaH3&pid=Api&P=0&h=180" alt="image" />
    <h4>Nail Polish</h4>
    <h6>Up to 70% Off</h6>
    </a>
  </div>
  <div className='card'>
    <a href="#" className='a'><img className='product--image' src="https://tse1.mm.bing.net/th?id=OIP.dcLtZnQtLx1m4ZZQNSlOnQHaH3&pid=Api&P=0&h=180" alt="image" />
    <h4>Nail Polish</h4>
    <h6>Up to 70% Off</h6>
    </a>
  </div>
  <div className='card'>
    <a href="#" className='a'><img className='product--image' src="https://tse1.mm.bing.net/th?id=OIP.dcLtZnQtLx1m4ZZQNSlOnQHaH3&pid=Api&P=0&h=180" alt="image" />
    <h4>Nail Polish</h4>
    <h6>Up to 70% Off</h6>
    </a>
  </div>
  <div className='card'>
    <a href="#" className='a'><img className='product--image' src="https://tse1.mm.bing.net/th?id=OIP.dcLtZnQtLx1m4ZZQNSlOnQHaH3&pid=Api&P=0&h=180" alt="image" />
    <h4>Nail Polish</h4>
    <h6>Up to 70% Off</h6>
    </a>
  </div>
  <div className='card'>
    <a href="#" className='a'><img className='product--image' src="https://tse1.mm.bing.net/th?id=OIP.dcLtZnQtLx1m4ZZQNSlOnQHaH3&pid=Api&P=0&h=180" alt="image" />
    <h4>Nail Polish</h4>
    <h6>Up to 70% Off</h6>
    </a>
  </div>
  
  
</Carousel>;
    </div>
  );
}

export default App;
