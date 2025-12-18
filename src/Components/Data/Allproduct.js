let productsData = [
  /* ================= WOMEN (12) ================= */
  {
    id: 1,
    name: "Women's Summer Dress",
    category: "Women",
    img: "https://images.unsplash.com/photo-1609695813802-3c443be34359?w=600",
    newPrice: 1199,
    oldPrice: 1599
  },
  {
    id: 2,
    name: "Women's Formal Top",
    category: "Women",
    img: "https://images.unsplash.com/photo-1520975916090-3105956dac38?w=600",
    newPrice: 799,
    oldPrice: 1099
  },
  {
    id: 3,
    name: "Women's Jeans",
    category: "Women",
    img: "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=600",
    newPrice: 1399,
    oldPrice: 1699
  },
  {
    id: 4,
    name: "Women's Jacket",
    category: "Women",
    img: "https://images.unsplash.com/photo-1602370463198-086436840055?w=600",
    newPrice: 1999,
    oldPrice: 2499
  },
  {
    id: 5,
    name: "Women's Skirt",
    category: "Women",
    img: "https://images.unsplash.com/photo-1618354691438-25bc04584c23?w=600",
    newPrice: 899,
    oldPrice: 1199
  },
  {
    id: 6,
    name: "Women's Cardigan",
    category: "Women",
    img: "https://images.unsplash.com/photo-1616873494464-4cc51793567f?w=600",
    newPrice: 1499,
    oldPrice: 1899
  },
  {
    id: 7,
    name: "Women's Kurti",
    category: "Women",
    img: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600",
    newPrice: 999,
    oldPrice: 1399
  },
  {
    id: 8,
    name: "Women's Hoodie",
    category: "Women",
    img: "https://images.unsplash.com/photo-1520975916090-3105956dac38?w=600",
    newPrice: 1599,
    oldPrice: 1999
  },
  {
    id: 9,
    name: "Women's Saree",
    category: "Women",
    img: "https://images.unsplash.com/photo-1583391733956-6c78276477e4?w=600",
    newPrice: 2499,
    oldPrice: 2999
  },
  {
    id: 10,
    name: "Women's Blazer",
    category: "Women",
    img: "https://images.unsplash.com/photo-1601762603339-fd61e28b698a?w=600",
    newPrice: 2799,
    oldPrice: 3299
  },
  {
    id: 11,
    name: "Women's T-Shirt",
    category: "Women",
    img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=600",
    newPrice: 699,
    oldPrice: 999
  },
  {
    id: 12,
    name: "Women's Shorts",
    category: "Women",
    img: "https://images.unsplash.com/photo-1593032465175-481ac7f401d6?w=600",
    newPrice: 799,
    oldPrice: 1099
  },

  /* ================= MEN (12) ================= */
  {
    id: 13,
    name: "Men's Casual Shirt",
    category: "Men",
    img: "https://images.unsplash.com/photo-1521334884684-d80222895322?w=600",
    newPrice: 999,
    oldPrice: 1399
  },
  {
    id: 14,
    name: "Men's Formal Shirt",
    category: "Men",
    img: "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?w=600",
    newPrice: 1299,
    oldPrice: 1699
  },
  {
    id: 15,
    name: "Men's Jeans",
    category: "Men",
    img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600",
    newPrice: 1499,
    oldPrice: 1899
  },
  {
    id: 16,
    name: "Men's Jacket",
    category: "Men",
    img: "https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?w=600",
    newPrice: 2499,
    oldPrice: 2999
  },
  {
    id: 17,
    name: "Men's Hoodie",
    category: "Men",
    img: "https://images.unsplash.com/photo-1520975916090-3105956dac38?w=600",
    newPrice: 1699,
    oldPrice: 2099
  },
  {
    id: 18,
    name: "Men's T-Shirt",
    category: "Men",
    img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600",
    newPrice: 699,
    oldPrice: 999
  },
  {
    id: 19,
    name: "Men's Kurta",
    category: "Men",
    img: "https://images.unsplash.com/photo-1618354691438-25bc04584c23?w=600",
    newPrice: 1399,
    oldPrice: 1799
  },
  {
    id: 20,
    name: "Men's Blazer",
    category: "Men",
    img: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?w=600",
    newPrice: 3299,
    oldPrice: 3999
  },
  {
    id: 21,
    name: "Men's Shorts",
    category: "Men",
    img: "https://images.unsplash.com/photo-1593032465175-481ac7f401d6?w=600",
    newPrice: 899,
    oldPrice: 1199
  },
  {
    id: 22,
    name: "Men's Track Pants",
    category: "Men",
    img: "https://images.unsplash.com/photo-1542060748-10c28b62716f?w=600",
    newPrice: 1299,
    oldPrice: 1599
  },
  {
    id: 23,
    name: "Men's Denim Jacket",
    category: "Men",
    img: "https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?w=600",
    newPrice: 2799,
    oldPrice: 3299
  },
  {
    id: 24,
    name: "Men's Polo T-Shirt",
    category: "Men",
    img: "https://images.unsplash.com/photo-1620799139834-6b8f844fbe61?w=600",
    newPrice: 899,
    oldPrice: 1199
  },

  /* ================= KIDS (12) ================= */
  {
    id: 25,
    name: "Kids T-Shirt",
    category: "Kids",
    img: "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?w=600",
    newPrice: 499,
    oldPrice: 699
  },
  {
    id: 26,
    name: "Kids Jeans",
    category: "Kids",
    img: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600",
    newPrice: 699,
    oldPrice: 999
  },
  {
    id: 27,
    name: "Kids Hoodie",
    category: "Kids",
    img: "https://images.unsplash.com/photo-1618354691438-25bc04584c23?w=600",
    newPrice: 899,
    oldPrice: 1199
  },
  {
    id: 28,
    name: "Kids Jacket",
    category: "Kids",
    img: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=600",
    newPrice: 1299,
    oldPrice: 1599
  },
  {
    id: 29,
    name: "Kids Dress",
    category: "Kids",
    img: "https://images.unsplash.com/photo-1593032465175-481ac7f401d6?w=600",
    newPrice: 799,
    oldPrice: 1099
  },
  {
    id: 30,
    name: "Kids Shorts",
    category: "Kids",
    img: "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?w=600",
    newPrice: 499,
    oldPrice: 699
  },
  {
    id: 31,
    name: "Kids Night Suit",
    category: "Kids",
    img: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600",
    newPrice: 999,
    oldPrice: 1299
  },
  {
    id: 32,
    name: "Kids Ethnic Wear",
    category: "Kids",
    img: "https://images.unsplash.com/photo-1618354691438-25bc04584c23?w=600",
    newPrice: 1499,
    oldPrice: 1899
  },
  {
    id: 33,
    name: "Kids Casual Shirt",
    category: "Kids",
    img: "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?w=600",
    newPrice: 699,
    oldPrice: 999
  },
  {
    id: 34,
    name: "Kids Sweater",
    category: "Kids",
    img: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=600",
    newPrice: 899,
    oldPrice: 1199
  },
  {
    id: 35,
    name: "Kids Track Pants",
    category: "Kids",
    img: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600",
    newPrice: 799,
    oldPrice: 1099
  },
  {
    id: 36,
    name: "Kids Party Wear",
    category: "Kids",
    img: "https://images.unsplash.com/photo-1593032465175-481ac7f401d6?w=600",
    newPrice: 1799,
    oldPrice: 2199
  }
];

export default productsData;
