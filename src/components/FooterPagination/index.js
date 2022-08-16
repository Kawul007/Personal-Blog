import React from 'react'
import { Pagination } from 'antd';
import "antd/dist/antd.min.css";

const FooterPagination = () => {
  return (
    <Pagination defaultCurrent={6} total={50} style={{textAlign:"center",marginTop:20}}/>
  )
}

export default FooterPagination