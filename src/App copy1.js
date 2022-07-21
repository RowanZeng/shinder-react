import React, {useEffect} from 'react'
import { AB_GET_LIST } from './config/ajax-path';

export default function App() {

  const getData = async () => {
    // 底下是分別用網址或變數兩種引入資料庫資料，結果會是一樣的(用命名變數來連資料庫的方式要搭配config > ajax-path.js檔)
    // const r = await fetch('http://localhost:3600/address-book/api');
    const r = await fetch(AB_GET_LIST);
    const obj = await r.json();
    console.log(obj);
  }

  useEffect(() => {
    getData();
  }, []);




  return (
    <div>
      App
    </div>
  )
}

