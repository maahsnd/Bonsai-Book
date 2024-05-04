import style from './tree-profile.module.css';
import Data from '../../DummyData.json';

function TreeProfile() {
  return <div className={style.test}>{Data.Trees.tree1.height}</div>;
}

export default TreeProfile;
