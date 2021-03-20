import React, { useEffect } from 'react'
import { Button } from 'antd'
import { get } from '@/utils'

export default function Index() {
  console.log('import.meta.env', import.meta.env)

  useEffect(() => {
    get('/skill').then(res => {
      console.log(res)
    })
  }, [])
  return (
    <div>
      Index
      <Button type="primary">Index</Button>
    </div>
  )
}
