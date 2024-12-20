import { Input } from '@nextui-org/react'
import { useUrl } from '../hooks/useUrl'

export default function InputUrl () {
  const { url, setUrl, isInvalid } = useUrl()
  return (
    <Input
      label='Insert your long URL here'
      labelPlacement='outside'
      name='url'
      placeholder='https://example.com/my-long-url'
      color={isInvalid ? 'danger' : 'default'}
      className='w-full'
      errorMessage='Please enter a valid URL'
      isInvalid={isInvalid}
      value={url}
      onValueChange={setUrl}
    />
  )
}
