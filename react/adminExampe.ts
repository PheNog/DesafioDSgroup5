import React, { FC } from 'react'
import { useQuery } from 'react-apollo'
import analytics from 'vtex.backend-course'

const ProductList: FC = () => {
  const { data } = useQuery(productList)
  return (
        <div>
        <h1>Hello, World!</h1>
        <p>{data?.helloworld}</p>
        </div>
  )
}

export default AdminExample