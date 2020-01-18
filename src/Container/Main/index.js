import React from 'react';
import 'Asset/Styles/Container/Main/index.scss';

function App() {
  console.log(process.env.REACT_APP_Test, "取得.env 檔的 REACT_APP_XXX 參數");
  return (
    <div className="base_container">
      123
    </div>
  );
}

export default App;
