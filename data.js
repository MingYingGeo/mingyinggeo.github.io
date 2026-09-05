/* ============================================================
   MINGYING GEO — 網站內容資料 (data.js)
   ------------------------------------------------------------
   之後要新增或修改「產品資訊」「案件分享」「GIS教學區」
   「程式下載」「關於」「聯絡資訊」，都只需要改這個檔案，
   不需要碰 index.html 或 app.js。

   規則：
   - 每一筆資料都是用 { 欄位: "內容" } 包起來，多筆資料用逗號 , 分隔。
   - 要新增一筆，複製其中一組 { ... }，貼上、改文字即可。
   - 要刪除一筆，把整組 { ... } 連同前後的逗號一起刪掉即可。
   - icon 欄位請填 app.js 裡 ICONS 已經定義好的名稱
     （目前有：layers, pin, compass, info, target, grid, drone, mesh,
     phone, email, facebook, youtube, download）。
   - link 欄位：目前先填 "#" 就好。以後要換成連結的圖片頁、
     介紹網頁或下載檔案網址時，把 "#" 換成完整網址即可，
     例如 "https://example.com/case1.html"。
     如果填的是 http 開頭的網址，會自動用新分頁開啟。
   ============================================================ */

const SITE_DATA = {

  // 品牌名稱與標語，頁首、頁尾共用同一份，改這裡兩處會一起更新
  brand: {
    name: "MingYing Geo",
    tagline: "智慧地圖 探索在地"
  },

  // 首頁主標題與說明文字
  hero: {
    title: "用地圖看世界，用定位探索在地",
    lead: "Ming Ying Geo 專注於 GIS、空間資訊與定位技術，結合社區規劃、景點探索與觀光導覽，將地理資訊融入在地生活，探索地方景點、認識人文特色，讓更多人看見土地的故事與魅力。"
  },

  // 上方選單、以及首頁的四個快速連結方塊，共用同一份資料
  navItems: [
    { target: "products",  icon: "layers",   title: "產品資訊",      desc: "社區規劃、景點探索與觀光導覽解決方案" },
    { target: "cases",     icon: "pin",      title: "案例分享",      desc: "實際導入案例與應用成果" },
    { target: "tutorials", icon: "compass",  title: "GIS/GPS教學區", desc: "空間資訊觀念與操作教學" },
    { target: "download",  icon: "download", title: "程式下載",      desc: "App 安裝檔、工具與文件下載" },
    { target: "about",     icon: "info",     title: "關於",          desc: "團隊理念與服務範圍" }
  ],

  // 產品資訊頁：要新增產品，複製一組貼在陣列最後面
  // link：以後要幫某個產品加上介紹網頁或圖片集，把 "#" 換成該網址即可
  products: [
    {
      icon: "target",
      tag: "在地導覽 APP應用",
      title: "景點探索家(Spot Explorer)",
      desc: "結合GPS定位與在地導覽，帶領使用者探索社區、景點與地方特色。透過位置引導、景點介紹與互動任務，讓使用者在旅途中認識自然環境、歷史文化與在地故事，發現每一個地方獨特的魅力",
      link: "https://drive.google.com/drive/folders/1mw3hN1KOTQ6kdMPtS0rAoUibtLCfVFJG?usp=drive_link"
    },
	 {
      icon: "target",
      tag: "旅行行程規劃 APP 應用",
      title: "旅程記事(Trip Note)",
      desc: "提供出國(國內)旅行行程規劃、景點記錄與旅程資訊整理，讓使用者輕鬆規劃並記錄每一趟旅程。",
      link: "#"
    },
    {
      icon: "grid",
      tag: "系統開發",
      title: "Field GIS 手機版建置",
      desc: "將 GIS 地圖與空間資料應用於手機，提供現場定位、地圖查詢與資料紀錄功能。",
      link: "#"
    },
    {
      icon: "drone",
      tag: "現場服務",
      title: "RTK快速架設教學服務",
      desc: "提供 RTK 設備快速架設、基本設定與實務操作教學，協助使用者快速掌握定位測量應用(工程測量、無人機、機器人..)。",
      link: "#"
    },
    {
      icon: "mesh",
      tag: "資料處理",
      title: "GIS空間資料處理整合",
      desc: "提供空間資料整理、轉換與 GIS 圖資整合服務",
      link: "#"
    }
  ],

  // 案件分享頁：要新增案例，複製一組貼在陣列「最前面」，最新的案例就會顯示在最上方
  // link：以後要幫某個案例加上詳細介紹頁或照片集，把 "#" 換成該網址即可
  cases: [
    {
      tag: "社區創生",
      title: "社區創生與在地特色探索",
      date: "2026.11",
      desc: "結合地圖與在地資料，整理社區特色、文化景點與生活資源，協助社區呈現地方故事，推動社區創生與觀光發展。。",
      link: "#"
    },
    {
      tag: "都市規劃",
      title: "都市更新地籍套繪整合",
      date: "--------",
      desc: "建置地籍與地上物套繪圖層，提供都市更新單位快速比對土地權屬與現況資料。",
      link: "#"
    },
    {
      tag: "RTK防災監測應用",
      title: "山區道路邊坡監測系統",
      date: "------",
      desc: "結合 RTK 高精度定位與 GIS 空間資訊，進行地表位移與環境變化監測，協助掌握災害風險。",
      link: "#"
    },
    {
      tag: "RTK 基站架設教學",
      title: "RTK 基站快速架設教學",
      date: "-----",
      desc: "利用 NTRIP caster/server，利用手機通訊30秒內快速完成 RTK 基站架設與定位設定。",
      link: "#"
    }
  ],

  // GIS 教學區：level 請填 "入門" 或 "進階"；link 若還沒有文章網址，先填 "#" 即可
  tutorials: [
    {
      level: "入門",
      title: "什麼是 RTK？衛星定位原理入門",
      desc: "用淺顯的方式說明 RTK 如何達到公分級定位精度，以及最適合使用的現場情境。",
      link: "#"
    },
    {
      level: "入門",
      title: "GIS 是什麼？空間資訊系統基礎觀念",
      desc: "認識圖層、座標系統與屬性資料的關係，建立 GIS 的基本知識架構。",
      link: "#"
    },
    {
      level: "進階",
      title: "座標系統轉換實務：TWD97 與 WGS84",
      desc: "說明台灣常用坐標系統的差異與轉換方式，避免測繪與資料套疊時產生誤差。",
      link: "#"
    },
    {
      level: "進階",
      title: "無人機航拍後製：從影像到正射地圖",
      desc: "介紹空拍影像的後製處理流程，如何產出可用於分析與套疊的正射影像成果。",
      link: "#"
    }
  ],

  // 程式下載頁：要新增下載項目，複製一組貼在陣列最後面
  // link：請填實際的下載檔案網址（例如放在雲端硬碟、GitHub Release 的連結）
  // icon 建議用 phone（App／手機安裝檔）或 download（一般檔案／文件）
  downloads: [
    {
      icon: "phone",
      tag: "Android APP",
      title: "景點探索家 Spot Explorer",
      desc: "GPS 定位景點導覽 App 安裝檔（.apk），適用 Android 手機與平板。",
      version: "v1.0",
      size: "25 MB",
      link: "#"
    },
    {
      icon: "download",
      tag: "操作手冊",
      title: "App 使用說明手冊",
      desc: "景點探索家 App 的功能介紹與操作步驟說明文件（PDF）。",
      version: "v1.0",
      size: "3.2 MB",
      link: "#"
    },
    {
      icon: "download",
      tag: "GIS 工具",
      title: "座標轉換小工具",
      desc: "TWD97 與 WGS84 座標互轉小工具，桌機版（Windows）。",
      version: "v1.0",
      size: "8 MB",
      link: "#"
    }
  ],

  // 關於頁面
  about: {
    // 介紹段落，一個字串 = 一段。要加一段，複製一行貼上即可
    intro: [
      "MINGYING GEO 團隊專注於 GIS、空間資訊與定位技術，結合社區規劃、景點探索與觀光導覽，致力於將地理資訊融入地方生活，透過數位工具呈現社區特色、景點與在地文化，讓更多人認識土地、探索地方。",
    ],
    // 右側資訊小卡
    panel: [
      { label: "服務項目", value: "GIS 空間資訊、社區規劃、景點探索、觀光導覽與在地文化數位應用" },
      { label: "服務對象", value: "服務對象｜一般民眾、親子家庭、旅遊遊客、社區團隊及教育單位，透過數位地圖與互動導覽探索景點、認識地方文化。" },
      { label: "服務地區", value: "全台灣" }
    ]
  },

  // 聯絡資訊／社群連結 — 請把下面替換成正式的公司資料
  contact: {
    address: "澎湖縣....",
    phone: "---------",
    email: "mingyinggeo@gmail.com",
    facebook: "https://www.facebook.com/profile.php?id=61594068444281&locale=zh_TW",
    youtube: ""
  },

  // 頁尾版權年份
  footer: {
    copyrightYear: "2026"
  }
};
