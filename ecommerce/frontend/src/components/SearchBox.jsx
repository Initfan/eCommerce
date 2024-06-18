import { useState } from "react"
import { Form, Button } from 'react-bootstrap'
import { useParams, useNavigate } from 'react-router-dom'

const SearchBox = () => {
    const navigate = useNavigate()
    const { keyword: urlkeyword } = useParams()
    const [keyword, setKeyword] = useState(urlkeyword || '')

    const submitHandler = (e) => {
        e.preventDefault()
        if (keyword.trim()) {
            setKeyword('')
            return navigate(`/search/${keyword}`)
        }
        navigate('/')
    }

    return (
        <Form onSubmit={submitHandler} className='d-flex '>
            <Form.Control
                type='text'
                name='q'
                onChange={e => setKeyword(e.target.value)}
                value={keyword}
                placeholder='Search Products...'
                className='mr-sm-2 ml-sm-5'
            ></Form.Control>
            <Button
                type='submit'
                variant='outline-light'
                className='py-2 mx-2'
            >Search</Button>
        </Form>
    )
}

export default SearchBox