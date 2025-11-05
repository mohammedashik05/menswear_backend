const products = [
  {
    name: "Watch Model 1",
    price: 1999,
    category: "watch",
    rating: 4.3,
    description:
      "Watch Model 1 combines elegance with precise timekeeping for any occasion.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387873/royalfitz_products/watch/krjkzlxzizburdsvrkgp.jpg",
  },
  {
    name: "Watch Model 2",
    price: 2099,
    category: "watch",
    rating: 4.2,
    description:
      "Watch Model 2 features a sleek design with durable materials for everyday wear.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387875/royalfitz_products/watch/nz4hbum50zk4uwekq2pl.jpg",
  },
  {
    name: "Watch Model 3",
    price: 2199,
    category: "watch",
    rating: 4.1,
    description:
      "Watch Model 3 offers precision and style for both casual and formal looks.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387877/royalfitz_products/watch/dx6ca0oq6mt5tpdbatrx.jpg",
  },
  {
    name: "Watch Model 4",
    price: 2299,
    category: "watch",
    rating: 4.0,
    description:
      "Watch Model 4 is designed with a modern aesthetic and high-quality craftsmanship.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387878/royalfitz_products/watch/mwkmqak660s5pwmlnjvq.jpg",
  },
  {
        name: "Watch Model 5",
    price: 2399,
    category: "watch",
    rating: 4.2,
    description:
      "Watch Model 5 combines a classic look with robust functionality for daily use.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387881/royalfitz_products/watch/zr8kjbigucnl8efjhsaa.jpg",
  },
  {
    
    name: "Watch Model 6",
    price: 2499,
    category: "watch",
    rating: 4.3,
    description:
      "Watch Model 6 features a polished finish and reliable movement for all-day wear.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387883/royalfitz_products/watch/yf677g6upo9omisye8f4.jpg",
  },
  {
  
    name: "Watch Model 7",
    price: 2599,
    category: "watch",
    rating: 4.1,
    description:
      "Watch Model 7 delivers a stylish design with premium materials and comfort.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387885/royalfitz_products/watch/bor88xyb6cxghtf3x5qi.jpg",
  },
  {
    
    name: "Watch Model 8",
    price: 2699,
    category: "watch",
    rating: 4.0,
    description:
      "Watch Model 8 offers a sophisticated look perfect for formal and casual wear.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387886/royalfitz_products/watch/ef79pwbfwmfuqijawaoe.jpg",
  },
  {
    
    name: "Watch Model 9",
    price: 2799,
    category: "watch",
    rating: 4.2,
    description:
      "Watch Model 9 combines precision engineering with a modern aesthetic.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387888/royalfitz_products/watch/psre7ljomvnvpue0irnr.jpg",
  },
  {
    
    name: "Watch Model 10",
    price: 2899,
    category: "watch",
    rating: 4.3,
    description:
      "Watch Model 10 features an elegant design with superior craftsmanship.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387890/royalfitz_products/watch/hgmehag3ftcbdz6r3c9d.jpg",
  },
  {
    
    name: "Watch Model 11",
    price: 2999,
    category: "watch",
    rating: 4.1,
    description:
      "Watch Model 11 ensures both style and durability with its premium design.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387891/royalfitz_products/watch/jfnu9uaecnrprccdgfwh.jpg",
  },
  {
    
    name: "Watch Model 12",
    price: 3099,
    category: "watch",
    rating: 4.2,
    description:
      "Watch Model 12 is perfect for those seeking modern aesthetics and functionality.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387892/royalfitz_products/watch/okziekf6uhkrsumxxqwy.jpg",
  },
  // {
    
  //   name: "Watch Model 13",
  //   price: 3199,
  //   category: "watch",
  //   rating: 4.3,
  //   description:
  //     "Watch Model 13 combines elegance, comfort, and high-quality materials.",
  //   image:
  //     "https://res.cloudinary.com/dwostjayu/image/upload/v1761323881/royalfitz_products/watch/jwsbytis991gjldcpn9nz.jpg",
  // },
  // {
    
  //   name: "Watch Model 14",
  //   price: 3299,
  //   category: "watch",
  //   rating: 4.1,
  //   description:
  //     "Watch Model 14 offers premium quality with a stylish modern look.",
  //   image:
  //     "https://res.cloudinary.com/dwostjayu/image/upload/v1761323882/royalfitz_products/watch/beftvyxfttb7hd5jm8kf4.jpg",
  // },
  // {
    
  //   name: "Watch Model 15",
  //   price: 3399,
  //   category: "watch",
  //   rating: 4.2,
  //   description:
  //     "Watch Model 15 is designed for those who value style and precision.",
  //   image:
  //     "https://res.cloudinary.com/dwostjayu/image/upload/v1761323883/royalfitz_products/watch/nva3ldpl009zislqny5hg.jpg",
  // },

  {
    
    name: "Shoe Model 1",
    price: 1999,
    category: "shoe",
    rating: 4.2,
    description:
      "Shoe Model 1 combines style and comfort, perfect for everyday wear.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387782/royalfitz_products/shoe/y2noya5r64ia1bnpdai8.jpg",
  },
  {
    
    name: "Shoe Model 2",
    price: 2049,
    category: "shoe",
    rating: 4.1,
    description:
      "Shoe Model 2 offers a sleek design with durable material for long-lasting use.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387783/royalfitz_products/shoe/m5qulhgrxkbkpwioypob.jpg",
  },
  {
    
    name: "Shoe Model 3",
    price: 2099,
    category: "shoe",
    rating: 4.3,
    description: "Shoe Model 3 provides ultimate comfort with modern styling.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387785/royalfitz_products/shoe/qeexeiffuaa87wxlbhz3.jpg",
  },
  {
    
    name: "Shoe Model 4",
    price: 2149,
    category: "shoe",
    rating: 4.0,
    description:
      "Shoe Model 4 features premium craftsmanship and a versatile look.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387786/royalfitz_products/shoe/zmumj6sbicnyoq9urvyw.jpg",
  },
  {
    name: "Shoe Model 5",
    price: 2199,
    category: "shoe",
    rating: 4.2,
    description:
      "Shoe Model 5 offers a combination of elegance and durability.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387787/royalfitz_products/shoe/xd5b1emfhlypdtozfiww.jpg",
  },
  {
    name: "Shoe Model 6",
    price: 2249,
    category: "shoe",
    rating: 4.1,
    description:
      "Shoe Model 6 is perfect for casual and semi-formal occasions.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387788/royalfitz_products/shoe/pxj3gfnhausa0yrtfx7v.jpg",
  },
  {
    name: "Shoe Model 7",
    price: 2299,
    category: "shoe",
    rating: 4.3,
    description: "Shoe Model 7 delivers a modern fit with exceptional comfort.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387789/royalfitz_products/shoe/xjgzyjk8p54xoy8stw5g.jpg",
  },
  {
    name: "Shoe Model 8",
    price: 2349,
    category: "shoe",
    rating: 4.2,
    description: "Shoe Model 8 combines sporty style with all-day wearability.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387791/royalfitz_products/shoe/ehccybzg1sfrulzdkn6u.jpg",
  },
  {
    name: "Shoe Model 9",
    price: 2399,
    category: "shoe",
    rating: 4.1,
    description:
      "Shoe Model 9 offers premium grip and style for versatile use.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387792/royalfitz_products/shoe/vb7uz7sgukwmfti96kvr.jpg",
  },
  {
    name: "Shoe Model 10",
    price: 2449,
    category: "shoe",
    rating: 4.3,
    description: "Shoe Model 10 provides a bold design and maximum comfort.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387793/royalfitz_products/shoe/h71rognm6kdn9ktfzzbn.jpg",
  },
  {
    name: "Shoe Model 11",
    price: 2499,
    category: "shoe",
    rating: 4.2,
    description:
      "Shoe Model 11 combines casual elegance with durable materials.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387795/royalfitz_products/shoe/wkim41ht2arudjncdsbw.jpg",
  },
  {
    name: "Shoe Model 12",
    price: 2549,
    category: "shoe",
    rating: 4.1,
    description:
      "Shoe Model 12 offers sleek design and reliable support for long wear.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387796/royalfitz_products/shoe/g933zxbkknhzsi3es7k2.jpg",
  },
  {
    name: "Shoe Model 13",
    price: 2599,
    category: "shoe",
    rating: 4.3,
    description:
      "Shoe Model 13 is designed for trendy styling and all-day comfort.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387797/royalfitz_products/shoe/ljyv28uopezztbvigtt4.jpg",
  },
  {
    name: "Shoe Model 14",
    price: 2649,
    category: "shoe",
    rating: 4.2,
    description:
      "Shoe Model 14 blends sporty and casual design for versatile looks.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387798/royalfitz_products/shoe/ullaoaxqnkvaj5y0mpzv.jpg",
  },
  {
    name: "Shoe Model 15",
    price: 2699,
    category: "shoe",
    rating: 4.1,
    description:
      "Shoe Model 15 is made with high-quality materials for premium feel.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387800/royalfitz_products/shoe/l5qwvdnonu6xcrmyflkc.jpg",
  },
  {
    name: "Shirt Model 1",
    price: 949,
    category: "shirt",
    rating: 4.1,
    description:
      "Shirt Model 1 is crafted with premium fabric for comfort and style.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387762/royalfitz_products/shirt/eb1aly0zavjsikkkbvxf.jpg",
  },
 {
    name: "Shirt Model 2",
    price: 999,
    category: "shirt",
    rating: 4.0,
    description:
      "Shirt Model 2 blends casual and formal wear with a perfect fit.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387763/royalfitz_products/shirt/n9awq4g8lgdypnfji8wk.jpg",
},
{
    name: "Shirt Model 3",
    price: 1049,
    category: "shirt",
    rating: 4.2,
    description:
      "Shirt Model 3 offers elegant design and comfortable fabric for everyday wear.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387764/royalfitz_products/shirt/o0dowia7gvzdn4698mm5.jpg",
},
{
    name: "Shirt Model 4",
    price: 1099,
    category: "shirt",
    rating: 4.3,
    description:
      "Shirt Model 4 is perfect for office and casual outings with stylish appeal.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387765/royalfitz_products/shirt/hoph0ovwkcrilcls91im.jpg",
},
{
    name: "Shirt Model 5",
    price: 1149,
    category: "shirt",
    rating: 4.1,
    description: "Shirt Model 5 combines classic patterns with modern styling.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387767/royalfitz_products/shirt/wjfnrva5jeysfvx1zq38.jpg",
},
{
    name: "Shirt Model 6",
    price: 1199,
    category: "shirt",
    rating: 4.0,
    description:
      "Shirt Model 6 is made from soft, breathable fabric for all-day comfort.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387768/royalfitz_products/shirt/r8oysqroacriq9qliaeb.jpg",
},
{
    name: "Shirt Model 7",
    price: 1249,
    category: "shirt",
    rating: 4.2,
    description:
      "Shirt Model 7 features a sleek design suitable for formal and casual occasions.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387770/royalfitz_products/shirt/kduugju0mlcal3zpvjly.jpg",
},
{
    name: "Shirt Model 8",
    price: 1299,
    category: "shirt",
    rating: 4.3,
    description:
      "Shirt Model 8 is stylish and versatile, perfect for layering or standalone wear.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387771/royalfitz_products/shirt/ggdxvl5f5jk3qbqlffk5.jpg",
},
{
    name: "Shirt Model 9",
    price: 1349,
    category: "shirt",
    rating: 4.1,
    description:
      "Shirt Model 9 offers comfort, elegance, and modern design for all occasions.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387772/royalfitz_products/shirt/cbd2svq1g05razh45wqx.jpg",
},
{
    name: "Shirt Model 10",
    price: 1399,
    category: "shirt",
    rating: 4.2,
    description:
      "Shirt Model 10 is crafted for a perfect fit and premium look.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387773/royalfitz_products/shirt/b2aqlkjutumhlp3zrjgy.jpg",
},
{
    name: "Shirt Model 11",
    price: 1449,
    category: "shirt",
    rating: 4.0,
    description:
      "Shirt Model 11 is designed for a refined look with breathable material.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387774/royalfitz_products/shirt/kdwt8ysdrjf6dfubqrbh.jpg",
},
{
    name: "Shirt Model 12",
    price: 1499,
    category: "shirt",
    rating: 4.3,
    description:
      "Shirt Model 12 features a sharp cut and smooth fabric for premium styling.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387776/royalfitz_products/shirt/zn6sp7bltsbkonwfj8ge.jpg",
},
{
    name: "Shirt Model 13",
    price: 1549,
    category: "shirt",
    rating: 4.2,
    description: "Shirt Model 13 combines classic style with modern comfort.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387777/royalfitz_products/shirt/ibjkcgjo6uftucrkiv9r.jpg",
},
{
    name: "Shirt Model 14",
    price: 1599,
    category: "shirt",
    rating: 4.1,
    description:
      "Shirt Model 14 is made for everyday wear with premium fabric.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387779/royalfitz_products/shirt/gkda2n3biatgvxypmlqu.jpg",
},
{
    name: "Shirt Model 15",
    price: 1649,
    category: "shirt",
    rating: 4.3,
    description:
      "Shirt Model 15 provides a stylish and durable finish for daily use.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387780/royalfitz_products/shirt/c6twrdcoxsuwlgbl7oy1.jpg",
},
{
    name: "Pants Model 1",
    price: 1049,
    category: "pants",
    rating: 3.6,
    description:
      "Pants Model 1 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387740/royalfitz_products/pant/ng47qky1h4koyhlzfc7w.jpg",
},

  {
    name: "Pants Model 2",
    price: 1099,
    category: "pants",
    rating: 3.7,
    description:
      "Pants Model 2 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387741/royalfitz_products/pant/uudb6uphkuco861td5ru.jpg",
},
{
    name: "Pants Model 3",
    price: 1149,
    category: "pants",
    rating: 3.8,
    description:
      "Pants Model 3 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387742/royalfitz_products/pant/oqeg46lrakwv3l3bi7bh.jpg",
},
{
    name: "Pants Model 4",
    price: 1199,
    category: "pants",
    rating: 3.9,
    description:
      "Pants Model 4 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387743/royalfitz_products/pant/qv25yixdwhebok0ml9se.jpg",
},
{
    name: "Pants Model 5",
    price: 1249,
    category: "pants",
    rating: 3.5,
    description:
      "Pants Model 5 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387744/royalfitz_products/pant/wlcq8o41thtczcmi1l7u.jpg",
},
{
    name: "Pants Model 6",
    price: 1299,
    category: "pants",
    rating: 3.6,
    description:
      "Pants Model 6 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387746/royalfitz_products/pant/qen5xqy7cyxtvfmrtgsp.jpg",
},
{
    name: "Pants Model 7",
    price: 1349,
    category: "pants",
    rating: 3.7,
    description:
      "Pants Model 7 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387747/royalfitz_products/pant/ign35q77bj78cctzghsg.jpg",
},
{
    name: "Pants Model 8",
    price: 1399,
    category: "pants",
    rating: 3.8,
    description:
      "Pants Model 8 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387748/royalfitz_products/pant/e6vojrtdlk0cgxkajafu.jpg",
},
{
    name: "Pants Model 9",
    price: 1449,
    category: "pants",
    rating: 3.9,
    description:
      "Pants Model 9 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387749/royalfitz_products/pant/dugt53ty6et3wknw661t.jpg",
},
{
    name: "Pants Model 10",
    price: 1499,
    category: "pants",
    rating: 3.5,
    description:
      "Pants Model 10 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387751/royalfitz_products/pant/uanfjxzbfyvmr3cbkyvn.jpg",
},
{
    name: "Pants Model 11",
    price: 1549,
    category: "pants",
    rating: 3.6,
    description:
      "Pants Model 11 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387752/royalfitz_products/pant/liif9lswg0zawuxykfdh.jpg",
},
{
    name: "Pants Model 12",
    price: 1599,
    category: "pants",
    rating: 3.7,
    description:
      "Pants Model 12 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387753/royalfitz_products/pant/bsstgadambco26wlmtbu.jpg",
},
{
    name: "Pants Model 13",
    price: 1649,
    category: "pants",
    rating: 3.8,
    description:
      "Pants Model 13 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323597/royalfitz_products/pant/a6eym0r1fbdythxyo6ub.jpg",
},
{
    name: "Pants Model 14",
    price: 1699,
    category: "pants",
    rating: 3.9,
    description:
      "Pants Model 14 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387754/royalfitz_products/pant/xqqcc90b6luhpvgpixgy.jpg",
},
{
    name: "Pants Model 15",
    price: 1749,
    category: "pants",
    rating: 3.5,
    description:
      "Pants Model 15 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387755/royalfitz_products/pant/zrmzdmxeohuvw6figkub.jpg",
},
{
    name: "Jumpsuit Model 1",
    price: 1549,
    category: "jumpsuit",
    rating: 4.1,
    description:
      "Jumpsuit Model 1 combines comfort with elegance, perfect for casual and semi-formal occasions.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387721/royalfitz_products/jumpsuits/w9gxcvxwgmekre8mnypv.jpg",
},
{
    name: "Jumpsuit Model 2",
    price: 1599,
    category: "jumpsuit",
    rating: 4.0,
    description:
      "Jumpsuit Model 2 is crafted with breathable fabric and stylish cuts for all-day wear.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387722/royalfitz_products/jumpsuits/dbtw1uvnbavqkv7mkowh.jpg",
},

 {
    name: "Jumpsuit Model 3",
    price: 1649,
    category: "jumpsuit",
    rating: 4.2,
    description:
      "Jumpsuit Model 3 offers a modern fit and versatile look that can be dressed up or down.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387723/royalfitz_products/jumpsuits/ohmncyihx5mtwmgnnu1h.jpg",
},
{
    name: "Jumpsuit Model 4",
    price: 1699,
    category: "jumpsuit",
    rating: 4.3,
    description:
      "Jumpsuit Model 4 features premium stitching and sleek design for a chic look.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387725/royalfitz_products/jumpsuits/tnbzfbrakfxgkmhwzmdh.jpg",
},
{
    name: "Jumpsuit Model 5",
    price: 1749,
    category: "jumpsuit",
    rating: 4.1,
    description:
      "Jumpsuit Model 5 is stylish, durable, and crafted with attention to detail.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387726/royalfitz_products/jumpsuits/bsbfv2wfg80gugcvljf3.jpg",
},
{
    name: "Jumpsuit Model 6",
    price: 1799,
    category: "jumpsuit",
    rating: 4.0,
    description:
      "Jumpsuit Model 6 is made from high-quality materials offering both comfort and flexibility.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387727/royalfitz_products/jumpsuits/pxoyc9kjtr4gvywvnrti.jpg",
},
{
    name: "Jumpsuit Model 7",
    price: 1849,
    category: "jumpsuit",
    rating: 4.2,
    description:
      "Jumpsuit Model 7 gives a flattering fit with a trendy design to suit any outing.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387728/royalfitz_products/jumpsuits/kypzqabnbkenllpvs1ub.jpg",
},
{
    name: "Jumpsuit Model 8",
    price: 1899,
    category: "jumpsuit",
    rating: 4.3,
    description:
      "Jumpsuit Model 8 is perfect for casual wear, blending fashion and ease.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387730/royalfitz_products/jumpsuits/b2u8ppqodjwyfwuu932l.jpg",
},
{
    name: "Jumpsuit Model 9",
    price: 1949,
    category: "jumpsuit",
    rating: 4.1,
    description: "Jumpsuit Model 9 ensures both comfort and modern appeal.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387731/royalfitz_products/jumpsuits/lsrxtkvwlwohngow0pot.jpg",
},
{
    name: "Jumpsuit Model 10",
    price: 1999,
    category: "jumpsuit",
    rating: 4.2,
    description:
      "Jumpsuit Model 10 is sleek and practical, ideal for everyday wear.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387731/royalfitz_products/jumpsuits/lsrxtkvwlwohngow0pot.jpg",
},
{
    name: "Jumpsuit Model 11",
    price: 2049,
    category: "jumpsuit",
    rating: 4.0,
    description:
      "Jumpsuit Model 11 delivers unmatched quality and comfort for long-lasting wear.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387732/royalfitz_products/jumpsuits/evyocvklpz43ns8oiixi.jpg",
},
{
    name: "Jumpsuit Model 12",
    price: 2099,
    category: "jumpsuit",
    rating: 4.3,
    description:
      "Jumpsuit Model 12 is designed for a bold yet sophisticated look.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387734/royalfitz_products/jumpsuits/zzvvk8yvtduxcvlz6xyg.jpg",
},
{
    name: "Jumpsuit Model 13",
    price: 2149,
    category: "jumpsuit",
    rating: 4.2,
    description:
      "Jumpsuit Model 13 provides the perfect combination of elegance and simplicity.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387735/royalfitz_products/jumpsuits/nzamy6hwes1at1vwithk.jpg",
},
{
    name: "Jumpsuit Model 14",
    price: 2199,
    category: "jumpsuit",
    rating: 4.1,
    description:
      "Jumpsuit Model 14 offers durable quality and fashionable design.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387737/royalfitz_products/jumpsuits/dt4sxarlkrcxhsjia61f.jpg",
},
{
    name: "Jumpsuit Model 15",
    price: 2249,
    category: "jumpsuit",
    rating: 4.3,
    description: "Jumpsuit Model 15 is made for ultimate comfort",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387738/royalfitz_products/jumpsuits/dyeket7crwqnsiyniqsq.jpg",
},
{
    name: "Suit Model 1",
    price: 4999,
    category: "suit",
    rating: 4.5,
    description:
      "Suit Model 1 is crafted with premium fabric and a modern cut for elegance.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387830/royalfitz_products/suit/g9fvuea7dxlpolkizjhj.jpg",
},
{
    name: "Suit Model 2",
    price: 5099,
    category: "suit",
    rating: 4.4,
    description:
      "Suit Model 2 combines style and comfort, perfect for formal occasions.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387832/royalfitz_products/suit/imhab6n0sfjxbhuypxka.jpg",
},
{
    name: "Suit Model 3",
    price: 5199,
    category: "suit",
    rating: 4.6,
    description:
      "Suit Model 3 features tailored design and premium quality stitching.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387833/royalfitz_products/suit/b9wapckrgz8f4ebc3nje.jpg",
},
{
    name: "Suit Model 4",
    price: 5299,
    category: "suit",
    rating: 4.5,
    description:
      "Suit Model 4 delivers elegance and comfort with modern tailoring.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387834/royalfitz_products/suit/dhzde6j1pqosk8y4fkkd.jpg",
},
{
    name: "Suit Model 5",
    price: 5399,
    category: "suit",
    rating: 4.4,
    description:
      "Suit Model 5 combines classic design with premium fabric for sophistication.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387835/royalfitz_products/suit/tolpm959qi1s0fuvoscl.jpg",
},
  {
    name: "Suit Model 6",
    price: 5499,
    category: "suit",
    rating: 4.5,
    description:
      "Suit Model 6 offers a modern cut with elegant finishing details.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387836/royalfitz_products/suit/vf2qukkue11k2uajirhb.jpg",
  },
  {
    name: "Suit Model 7",
    price: 5599,
    category: "suit",
    rating: 4.6,
    description:
      "Suit Model 7 is tailored for style, comfort, and high-end occasions.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387837/royalfitz_products/suit/mkuwocyzefmv1bbuhbp6.jpg",
  },
  {
    name: "Suit Model 8",
    price: 5699,
    category: "suit",
    rating: 4.4,
    description:
      "Suit Model 8 features a sleek modern design with premium quality fabric.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387839/royalfitz_products/suit/ccxajwf7bwq0zvze5tkr.jpg",
  },
  {
    name: "Suit Model 9",
    price: 5799,
    category: "suit",
    rating: 4.5,
    description:
      "Suit Model 9 provides elegance and comfort for formal events.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387840/royalfitz_products/suit/fl6dx1valcett2t0jleu.jpg",
  },
  {
    name: "Suit Model 10",
    price: 5899,
    category: "suit",
    rating: 4.6,
    description:
      "Suit Model 10 combines timeless design with contemporary tailoring.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387841/royalfitz_products/suit/qoqlns3urwcamxincvu4.jpg",
  },
  {
    name: "Suit Model 11",
    price: 5999,
    category: "suit",
    rating: 4.5,
    description:
      "Suit Model 11 is designed for a perfect fit and premium styling.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387842/royalfitz_products/suit/wsofm9jbfpuqpqvtwdwu.jpg",
  },
  {
    name: "Suit Model 12",
    price: 6099,
    category: "suit",
    rating: 4.4,
    description:
      "Suit Model 12 offers refined tailoring and high-quality fabric.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387843/royalfitz_products/suit/zspwpilfbcxfvto3wurm.jpg",
  },
  {
    name: "Suit Model 13",
    price: 6199,
    category: "suit",
    rating: 4.5,
    description:
      "Suit Model 13 combines elegant design with comfort and premium fabric.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387844/royalfitz_products/suit/olg6k9aoavrlqnmbayu9.jpg",
  },
  {
    name: "Suit Model 14",
    price: 6299,
    category: "suit",
    rating: 4.6,
    description:
      "Suit Model 14 features modern tailoring with a luxurious finish.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387846/royalfitz_products/suit/dmy5d2qkswbkd7agxtfv.jpg",
  },
  {
    name: "Suit Model 15",
    price: 6399,
    category: "suit",
    rating: 4.5,
    description:
      "Suit Model 15 provides a premium look with classic design elements.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387847/royalfitz_products/suit/wuodufo6y7dtetrpuu52.jpg",
  },
  {
    name: "Shorts Model 1",
    price: 699,
    category: "shorts",
    rating: 3.8,
    description:
      "Shorts Model 1 is crafted for comfort and style, perfect for casual outings.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387811/royalfitz_products/shorts/uomxwp4xvmwuass2ch0j.jpg",
  },
  {
    name: "Shorts Model 2",
    price: 749,
    category: "shorts",
    rating: 3.9,
    description:
      "Shorts Model 2 offers a relaxed fit with a modern design for everyday wear.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387812/royalfitz_products/shorts/cgyzjc1lhhh6ned13vzb.jpg",
  },
  {
    name: "Shorts Model 3",
    price: 799,
    category: "shorts",
    rating: 3.7,
    description:
      "Shorts Model 3 combines lightweight material with a stylish look.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387815/royalfitz_products/shorts/ensmihy8mel3bcw8jxue.jpg",
  },
  {
    name: "Shorts Model 4",
    price: 849,
    category: "shorts",
    rating: 3.8,
    description: "Shorts Model 4 ensures maximum comfort with a trendy design.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387815/royalfitz_products/shorts/ensmihy8mel3bcw8jxue.jpg",
  },
  {
    name: "Shorts Model 5",
    price: 899,
    category: "shorts",
    rating: 3.9,
    description:
      "Shorts Model 5 is designed with attention to detail for a perfect casual look.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387816/royalfitz_products/shorts/tsp6fon4fqupslfnf2k9.jpg",
  },
  {
    name: "Shorts Model 6",
    price: 949,
    category: "shorts",
    rating: 4.0,
    description:
      "Shorts Model 6 combines style and functionality for daily wear.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387817/royalfitz_products/shorts/s6bjwj4tk7isk8jfhlgz.jpg",
  },
  {
    name: "Shorts Model 7",
    price: 999,
    category: "shorts",
    rating: 3.7,
    description:
      "Shorts Model 7 offers a contemporary look with superior comfort.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387819/royalfitz_products/shorts/pmlvlmdwx91tf8qge1sd.jpg",
  },
  {
    name: "Shorts Model 8",
    price: 1049,
    category: "shorts",
    rating: 3.8,
    description:
      "Shorts Model 8 is perfect for summer outings with a breathable fabric.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387820/royalfitz_products/shorts/cvyofzsvfwe9icq9swic.jpg",
  },
  {
    name: "Shorts Model 9",
    price: 1099,
    category: "shorts",
    rating: 3.9,
    description:
      "Shorts Model 9 combines lightweight comfort with modern styling.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387822/royalfitz_products/shorts/yjnmxxsqviavp8y7hef9.jpg",
  },
  {
    name: "Shorts Model 10",
    price: 1149,
    category: "shorts",
    rating: 4.0,
    description:
      "Shorts Model 10 is designed to give you a stylish and comfortable experience.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387823/royalfitz_products/shorts/fxxn1k4df7ymhipyen7w.jpg",
  },
  {
    name: "Shorts Model 11",
    price: 1199,
    category: "shorts",
    rating: 3.8,
    description:
      "Shorts Model 11 features a perfect blend of comfort and style.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387824/royalfitz_products/shorts/bm3cn1szqrmstvkrshkc.jpg",
  },
  {
    name: "Shorts Model 12",
    price: 1249,
    category: "shorts",
    rating: 3.9,
    description: "Shorts Model 12 is ideal for casual and active lifestyles.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761387825/royalfitz_products/shorts/od5bsbxfqn8pfqkmati0.jpg",
  },
  {
  name: "Shorts Model 13",
  price: 1299,
  category: "shorts",
  rating: 4.0,
  description: "Shorts Model 13 offers a trendy look with maximum comfort.",
  image:
    "https://res.cloudinary.com/dwostjayu/image/upload/v1761387827/royalfitz_products/shorts/ft2e9kvv3jt6vcf5hgjp.jpg",
},
{
  name: "Shorts Model 14",
  price: 1349,
  category: "shorts",
  rating: 3.7,
  description:
    "Shorts Model 14 combines modern styling with durable material.",
  image:
    "https://res.cloudinary.com/dwostjayu/image/upload/v1761387828/royalfitz_products/shorts/qs4doavmjp90lxw0kjg5.jpg",
},
{
  name: "Shorts Model 15",
  price: 1399,
  category: "shorts",
  rating: 3.8,
  description:
    "Shorts Model 15 ensures both comfort and style for everyday wear.",
  image:
    "https://res.cloudinary.com/dwostjayu/image/upload/v1761387829/royalfitz_products/shorts/n0b0csk6rtdv5qd9smx9.jpg",
},

{
  name: "Belt Model 1",
  price: 599,
  category: "belt",
  rating: 4.2,
  description:
    "Belt Model 1 is crafted from premium leather, offering durability and a sleek look to elevate your outfit.",
  image:
    "https://res.cloudinary.com/dwostjayu/image/upload/v1761387704/royalfitz_products/belt/qskimjio303mo84tal3d.jpg",
},
{
  name: "Belt Model 2",
  price: 649,
  category: "belt",
  rating: 4.5,
  description:
    "Belt Model 2 combines elegance and strength, perfect for both casual and formal wear.",
  image:
    "https://res.cloudinary.com/dwostjayu/image/upload/v1761387705/royalfitz_products/belt/tsxrwfp3h4lriz0p2cia.jpg",
},
{
  name: "Belt Model 3",
  price: 699,
  category: "belt",
  rating: 4.1,
  description:
    "Belt Model 3 is designed with a modern buckle style and long-lasting comfort.",
  image:
    "https://res.cloudinary.com/dwostjayu/image/upload/v1761387706/royalfitz_products/belt/ufkdtxhoo1uj7dqxvml2.jpg",
},
{
  name: "Belt Model 4",
  price: 749,
  category: "belt",
  rating: 3.9,
  description:
    "Belt Model 4 offers a bold statement with its stylish design and premium material.",
  image:
    "https://res.cloudinary.com/dwostjayu/image/upload/v1761387707/royalfitz_products/belt/kimm0altedbmvainewpe.jpg",
},
{
  name: "Belt Model 5",
  price: 799,
  category: "belt",
  rating: 4.3,
  description:
    "Belt Model 5 features a refined design and strong durability for long-term use.",
  image:
    "https://res.cloudinary.com/dwostjayu/image/upload/v1761387708/royalfitz_products/belt/ngwdzkpwaeqzjpdeup5u.jpg",
},
{
  name: "Belt Model 6",
  price: 849,
  category: "belt",
  rating: 4.4,
  description:
    "Belt Model 6 adds sophistication to any look with its polished finish and versatile design.",
  image:
    "https://res.cloudinary.com/dwostjayu/image/upload/v1761387710/royalfitz_products/belt/cpzkpig1kvd1iytfy3i4.jpg",
},
{
  name: "Belt Model 7",
  price: 899,
  category: "belt",
  rating: 4.0,
  description:
    "Belt Model 7 is lightweight yet durable, making it perfect for everyday wear.",
  image:
    "https://res.cloudinary.com/dwostjayu/image/upload/v1761387711/royalfitz_products/belt/hhahkgmbc4rnlnoltfyk.jpg",
},
{
  name: "Belt Model 8",
  price: 949,
  category: "belt",
  rating: 4.6,
  description:
    "Belt Model 8 blends elegance with strength for both office and party occasions.",
  image:
    "https://res.cloudinary.com/dwostjayu/image/upload/v1761387712/royalfitz_products/belt/opcyonqrqprwp5gbkeem.jpg",
},
{
  name: "Belt Model 9",
  price: 999,
  category: "belt",
  rating: 4.3,
  description:
    "Belt Model 9 is finely detailed with classic aesthetics and robust build quality.",
  image:
    "https://res.cloudinary.com/dwostjayu/image/upload/v1761387713/royalfitz_products/belt/ftde49xyomdl10irk9zz.jpg",
},
{
  name: "Belt Model 10",
  price: 1049,
  category: "belt",
  rating: 3.8,
  description:
    "Belt Model 10 ensures a perfect fit and lasting comfort for daily use.",
  image:
    "https://res.cloudinary.com/dwostjayu/image/upload/v1761387715/royalfitz_products/belt/lx6cz3vl3r8mc43hlpui.jpg",
},
{
  name: "Belt Model 11",
  price: 1099,
  category: "belt",
  rating: 4.2,
  description:
    "Belt Model 11 is designed for durability and effortless style.",
  image:
    "https://res.cloudinary.com/dwostjayu/image/upload/v1761387716/royalfitz_products/belt/nknvic1cb4noyqr7hlfj.jpg",
},
{
  name: "Belt Model 12",
  price: 1149,
  category: "belt",
  rating: 4.5,
  description:
    "Belt Model 12 provides a stylish finish to complete your formal attire.",
  image:
    "https://res.cloudinary.com/dwostjayu/image/upload/v1761387717/royalfitz_products/belt/ojxzntfauj0o3krpksfn.jpg",
},
{
  name: "Belt Model 13",
  price: 1199,
  category: "belt",
  rating: 4.1,
  description:
    "Belt Model 13 is built with strong craftsmanship and modern elegance.",
  image:
    "https://res.cloudinary.com/dwostjayu/image/upload/v1761387718/royalfitz_products/belt/sjd1uxpyvjeelmxxmzpt.jpg",
},

  {
  name: "Belt Model 14",
  price: 1249,
  category: "belt",
  rating: 4.7,
  description:
    "Belt Model 14 is a premium accessory that elevates both casual and formal outfits.",
  image:
    "https://res.cloudinary.com/dwostjayu/image/upload/v1761387719/royalfitz_products/belt/h4iijc5mzflysia71okk.jpg",
},
{
  name: "Belt Model 15",
  price: 1299,
  category: "belt",
  rating: 4.4,
  description:
    "Belt Model 15 delivers comfort, style, and strength for long-lasting performance.",
  image:
    "https://res.cloudinary.com/dwostjayu/image/upload/v1761387720/royalfitz_products/belt/sv2kiu7yklrwsrqco0mx.jpg",
},

{
  name: "T-Shirt Model 1",
  price: 699,
  category: "tshirt",
  rating: 4.0,
  description:
    "T-Shirt Model 1 is made with soft cotton fabric for daily comfort and style.",
  image:
    "https://res.cloudinary.com/dwostjayu/image/upload/v1761387848/royalfitz_products/tshirt/ehuxebuqbl5mnzv9hwou.jpg",
},
{
  name: "T-Shirt Model 2",
  price: 749,
  category: "tshirt",
  rating: 4.1,
  description:
    "T-Shirt Model 2 offers a sleek design suitable for casual wear.",
  image:
    "https://res.cloudinary.com/dwostjayu/image/upload/v1761387849/royalfitz_products/tshirt/ptijrbliiff05zl0sn16.jpg",
},
{
  name: "T-Shirt Model 3",
  price: 799,
  category: "tshirt",
  rating: 4.2,
  description:
    "T-Shirt Model 3 is stylish, breathable, and perfect for everyday use.",
  image:
    "https://res.cloudinary.com/dwostjayu/image/upload/v1761387851/royalfitz_products/tshirt/m0nbhthskswzi4wqpucy.jpg",
},
{
  name: "T-Shirt Model 4",
  price: 849,
  category: "tshirt",
  rating: 4.0,
  description:
    "T-Shirt Model 4 combines comfort and a trendy look for any occasion.",
  image:
    "https://res.cloudinary.com/dwostjayu/image/upload/v1761387851/royalfitz_products/tshirt/m0nbhthskswzi4wqpucy.jpg",
},
{
  name: "T-Shirt Model 5",
  price: 899,
  category: "tshirt",
  rating: 4.1,
  description:
    "T-Shirt Model 5 is made with premium fabric for a stylish casual look.",
  image:
    "https://res.cloudinary.com/dwostjayu/image/upload/v1761387854/royalfitz_products/tshirt/gy96nosv0bedteolij37.jpg",
},
{
  name: "T-Shirt Model 6",
  price: 949,
  category: "tshirt",
  rating: 4.2,
  description:
    "T-Shirt Model 6 offers a modern design with ultimate comfort.",
  image:
    "https://res.cloudinary.com/dwostjayu/image/upload/v1761387855/royalfitz_products/tshirt/tjtmmrh3jswu3upcyuqh.jpg",
},
{
  name: "T-Shirt Model 7",
  price: 999,
  category: "tshirt",
  rating: 4.3,
  description:
    "T-Shirt Model 7 is perfect for casual outings and everyday wear.",
  image:
    "https://res.cloudinary.com/dwostjayu/image/upload/v1761387856/royalfitz_products/tshirt/k7g4i0zzqnjjjjgdbnaj.jpg",
},
{
  name: "T-Shirt Model 8",
  price: 1049,
  category: "tshirt",
  rating: 4.1,
  description:
    "T-Shirt Model 8 combines a modern fit with soft and durable fabric.",
  image:
    "https://res.cloudinary.com/dwostjayu/image/upload/v1761387858/royalfitz_products/tshirt/o7vx0hipgdlcvhv3p4hz.jpg",
},
{
  name: "T-Shirt Model 9",
  price: 1099,
  category: "tshirt",
  rating: 4.2,
  description:
    "T-Shirt Model 9 is stylish and comfortable, ideal for daily wear.",
  image:
    "https://res.cloudinary.com/dwostjayu/image/upload/v1761387859/royalfitz_products/tshirt/ht6dayfxpxniggeo7i10.jpg",
},
{
  name: "T-Shirt Model 10",
  price: 1149,
  category: "tshirt",
  rating: 4.3,
  description:
    "T-Shirt Model 10 features trendy designs with premium cotton fabric.",
  image:
    "https://res.cloudinary.com/dwostjayu/image/upload/v1761387862/royalfitz_products/tshirt/ynncqoniea16m3limcmc.jpg",
},
{
  name: "T-Shirt Model 11",
  price: 1199,
  category: "tshirt",
  rating: 4.1,
  description: "T-Shirt Model 11 ensures comfort and a stylish modern look.",
  image:
    "https://res.cloudinary.com/dwostjayu/image/upload/v1761387863/royalfitz_products/tshirt/ngcc88b1x7x6yvg3qcr3.jpg",
},
{
  name: "T-Shirt Model 12",
  price: 1249,
  category: "tshirt",
  rating: 4.2,
  description:
    "T-Shirt Model 12 is perfect for casual wear with soft breathable fabric.",
  image:
    "https://res.cloudinary.com/dwostjayu/image/upload/v1761387865/royalfitz_products/tshirt/wnida5nzjlijchnnppt7.jpg",
},
{
  name: "T-Shirt Model 13",
  price: 1299,
  category: "tshirt",
  rating: 4.3,
  description:
    "T-Shirt Model 13 combines a modern look with everyday comfort.",
  image:
    "https://res.cloudinary.com/dwostjayu/image/upload/v1761387867/royalfitz_products/tshirt/eerrzutbtvgsnpr4rdhl.jpg",
},
{
  name: "T-Shirt Model 14",
  price: 1349,
  category: "tshirt",
  rating: 4.1,
  description:
    "T-Shirt Model 14 features trendy styling with premium cotton fabric.",
  image:
    "https://res.cloudinary.com/dwostjayu/image/upload/v1761387869/royalfitz_products/tshirt/w6szv28hjfg7et368meh.jpg",
},
{
  name: "T-Shirt Model 15",
  price: 1399,
  category: "tshirt",
  rating: 4.2,
  description:
    "T-Shirt Model 15 provides style and comfort for all-day wear.",
  image:
    "https://res.cloudinary.com/dwostjayu/image/upload/v1761387869/royalfitz_products/tshirt/w6szv28hjfg7et368meh.jpg",
},

];

module.exports = products;