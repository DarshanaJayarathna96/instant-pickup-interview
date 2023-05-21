import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: [
    {
      id: '1',
      image_url: "./images/nova-y70.webp",
      name: "Huawei Nova Y70",
      description: " 6.53 inch Full HD+ display for immersive viewing experience- 48MP AI triple camera system for stunning photos and videos- 4000mAh battery with fast charging support for all-day usage- Octa-core processor and 4GB RAM for smooth multitasking- Sleek and stylish design with a fingerprint sensor for added security",
      amount: "100",
      quantity: 10,
    },
    {
      id: '2',
      image_url: "./images/apple-11.webp",
      name: "Apple Iphone 11",
      description: " 6.53 inch Full HD+ display for immersive viewing experience- 48MP AI triple camera system for stunning photos and videos- 4000mAh battery with fast charging support for all-day usage- Octa-core processor and 4GB RAM for smooth multitasking- Sleek and stylish design with a fingerprint sensor for added security",
      amount: "400",
      quantity: 15,
    },
    {
      id: '3',
      image_url: "./images/huawei-y7p.webp",
      name: "Huawei Y7P",
      description: " 6.53 inch Full HD+ display for immersive viewing experience- 48MP AI triple camera system for stunning photos and videos- 4000mAh battery with fast charging support for all-day usage- Octa-core processor and 4GB RAM for smooth multitasking- Sleek and stylish design with a fingerprint sensor for added security",
      amount: "300",
      quantity: 15,
    },
    {
      id: '4',
      image_url: "./images/nova-y7.webp",
      name: "Huawei Nova Y70",
      description: " 6.53 inch Full HD+ display for immersive viewing experience- 48MP AI triple camera system for stunning photos and videos- 4000mAh battery with fast charging support for all-day usage- Octa-core processor and 4GB RAM for smooth multitasking- Sleek and stylish design with a fingerprint sensor for added security",
      amount: "400",
      quantity: 15,
    },
    {
      id: '5',
      image_url: "./images/nova-y70.webp",
      name: "Huawei Nova Y70",
      description: " 6.53 inch Full HD+ display for immersive viewing experience- 48MP AI triple camera system for stunning photos and videos- 4000mAh battery with fast charging support for all-day usage- Octa-core processor and 4GB RAM for smooth multitasking- Sleek and stylish design with a fingerprint sensor for added security",
      amount: "100",
      quantity: 10,
    },
    {
      id: '6',
      image_url: "./images/apple-11.webp",
      name: "Apple Iphone 11",
      description: " 6.53 inch Full HD+ display for immersive viewing experience- 48MP AI triple camera system for stunning photos and videos- 4000mAh battery with fast charging support for all-day usage- Octa-core processor and 4GB RAM for smooth multitasking- Sleek and stylish design with a fingerprint sensor for added security",
      amount: "400",
      quantity: 15,
    },
    {
      id: '7',
      image_url: "./images/huawei-y7p.webp",
      name: "Huawei Y7P",
      description: " 6.53 inch Full HD+ display for immersive viewing experience- 48MP AI triple camera system for stunning photos and videos- 4000mAh battery with fast charging support for all-day usage- Octa-core processor and 4GB RAM for smooth multitasking- Sleek and stylish design with a fingerprint sensor for added security",
      amount: "300",
      quantity: 15,
    },
    {
      id: '8',
      image_url: "./images/nova-y7.webp",
      name: "Huawei Nova Y70",
      description: " 6.53 inch Full HD+ display for immersive viewing experience- 48MP AI triple camera system for stunning photos and videos- 4000mAh battery with fast charging support for all-day usage- Octa-core processor and 4GB RAM for smooth multitasking- Sleek and stylish design with a fingerprint sensor for added security",
      amount: "400",
      quantity: 15,
    },
    {
      id: '9',
      image_url: "./images/nova-y70.webp",
      name: "Huawei Nova Y70",
      description: " 6.53 inch Full HD+ display for immersive viewing experience- 48MP AI triple camera system for stunning photos and videos- 4000mAh battery with fast charging support for all-day usage- Octa-core processor and 4GB RAM for smooth multitasking- Sleek and stylish design with a fingerprint sensor for added security",
      amount: "100",
      quantity: 10,
    },
    {
      id: '10',
      image_url: "./images/apple-11.webp",
      name: "Apple Iphone 11",
      description: " 6.53 inch Full HD+ display for immersive viewing experience- 48MP AI triple camera system for stunning photos and videos- 4000mAh battery with fast charging support for all-day usage- Octa-core processor and 4GB RAM for smooth multitasking- Sleek and stylish design with a fingerprint sensor for added security",
      amount: "400",
      quantity: 15,
    },
    {
      id: '11',
      image_url: "./images/huawei-y7p.webp",
      name: "Huawei Y7P",
      description: " 6.53 inch Full HD+ display for immersive viewing experience- 48MP AI triple camera system for stunning photos and videos- 4000mAh battery with fast charging support for all-day usage- Octa-core processor and 4GB RAM for smooth multitasking- Sleek and stylish design with a fingerprint sensor for added security",
      amount: "300",
      quantity: 15,
    },
    {
      id: '12',
      image_url: "./images/nova-y7.webp",
      name: "Huawei Nova Y70",
      description: " 6.53 inch Full HD+ display for immersive viewing experience- 48MP AI triple camera system for stunning photos and videos- 4000mAh battery with fast charging support for all-day usage- Octa-core processor and 4GB RAM for smooth multitasking- Sleek and stylish design with a fingerprint sensor for added security",
      amount: "400",
      quantity: 15,
    }
  ],
  product: {}
};

const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    productList: (state, action) => {
      state.productList = action.payload
    },
    getProduct: (state, action) => {
      state.product = state.productList.find(el => +el.id === +action.payload);
    },
  },
});

export const productActions = productSlice.actions;

export default productSlice;
