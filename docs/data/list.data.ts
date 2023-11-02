import { defineLoader } from 'vitepress'

export interface Data {
  // data type
  name?: string
}

declare const data: Data[]
export { data }

export default defineLoader({
  async load(): Promise<Data[]> {
    return [
        {
            name: '1'
        },{
            name: '2'
        },{
            name: '3'
        },{
            name: '4'
        },{
            name: '5'
        }
      ]
  }
})
