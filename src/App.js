import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './components/Budget'; 
import Remaining from './components/Remaining';
import Total from './components/Total'; 

function App() {
  return (
  <>
 		<div className='container'>
				<h1 className='mt-3 align-content-center'>Budget Tracker</h1>
				<div className='row mt-3'>
					<div className='col-sm'>
						<Budget />
					</div>
					<div className='col-sm'>
						<Remaining />
					</div>
					<div className='col-sm'>
						<Total />
					</div>
				</div>
			</div>
  </> 
  );
}

export default App;
