import './App.css';
import ClassExample from './components/ClassExample';
import FunctionExample from './components/FunctionExample';
import useWindowWidth from './hooks/useWindowWidth';
import withHasMounted from './hocs/withHasMounted';
import useHasMounted from './hooks/useHasMounted';

function App({ hasMounted }) {
  const width = useWindowWidth();
  const hasMountedFromHooks = useHasMounted();

  console.log(hasMounted, hasMountedFromHooks);

  return (
    <div className="App">
      {/* s */}

      {width}
    </div>
  );
}


export default withHasMounted(App);