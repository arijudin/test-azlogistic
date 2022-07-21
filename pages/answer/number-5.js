import Head from 'next/head'
import Image from 'next/image'
import ButtonBack from '../../components/btnBack'
import Modal from '../../components/modal'
import { Menu } from '@headlessui/react'
import { Float } from '@headlessui-float/react'
import { useEffect, useState } from 'react'
import axios from 'axios'

function NumbeFive() {
  const [movies, setMovies] = useState([])
  const [keyword, setKeyword] = useState('')
  const [page, setPages] = useState(1)
  const [genreId, setGenreId] = useState('')
  const [genreName, setGenreName] = useState('')
  const [genres, setGenres] = useState([])
  const [synopsis, setSynopsis] = useState('')
  const [synopsisModal, setSynopsisModal] = useState(false)
  const [filter, setFilter] = useState(false)
  
  const searchMovie = async (query = keyword) => {
    const res = await axios.get(`${process.env.MOVIE_API}3/search/movie`, {
      params: {
        api_key: process.env.MOVIE_API_KEY,
        query: query,
        language: 'en-US',
        sort_by: 'popularity.desc',
      }
    })

    try {
      const response = res.data
      let result = response.results.slice(0, 10);
      setMovies(result)
      setKeyword(keyword)
    } catch (error) {
      console.log(error);
    }
  }

  const movieData = async (genre_id = genreId, page_number = page) => {
    const res = await axios.get(`${process.env.MOVIE_API}3/discover/movie`, {
      params: {
        api_key: process.env.MOVIE_API_KEY,
        language: 'en-US',
        sort_by: 'popularity.desc',
        with_genres: genre_id,
        page: page_number
      }
    })

    try {
      const response = res.data
      let result = response.results.slice(0, 10);
      setMovies(result)
      setPages(page_number)
    } catch (error) {
      console.log(error);
    }
  }

  const genreData = async () => {
    const res = await axios.get(`${process.env.MOVIE_API}3/genre/movie/list`, {
      params: {
        api_key: process.env.MOVIE_API_KEY
      }
    })

    try {
      const response = res.data
      setGenres(response.genres)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      await movieData()
      await genreData()
    }

    fetchData()
  }, [])

  return (
      <>
      <Modal 
          onClose={ () => setSynopsisModal(false) }
          show={synopsisModal}>
          <div className='text-[#1C1C1C] text-center px-4 mb-10'>
            {synopsis}
          </div>
      </Modal>

      <div className="w-full max-w-7xl mx-auto my-20">
        <Head>
          <title>Azlogistic | Answer 05</title>
        </Head>
        <ButtonBack />
        <div className='mt-10'>
          <span className='inline-block mb-3 text-sm text-gray-400 italic'>Note: answers for numbers 5, 6, 7, 8, & 10</span>
          <div className='bg-gray-50 rounded-md p-5 w-full max-w-3xl'>
            <div className='mb-4'>
              <a className='text-blue-400 hover:text-blue-500 hover:cursor-pointer select-none' onClick={ () => setFilter(!filter) }>
                {`${filter ? 'Sembunyikan' : 'Tampilkan'} Filter`}
              </a>
            </div>
            {
              filter ?
              <div className='flex justify-between mb-4'>
                <input type={'search'}
                  className='p-2 bg-white border border-gray-400 rounded-md w-full max-w-sm text-sm focus-within:outline-none focus-visible:outline-none'
                  placeholder='Search'
                  id='search'
                  onInput={ (e) => {
                    if (e.target.value) {
                      searchMovie(e.target.value)
                    } else {
                      movieData()
                    }
                  }} />
                  
                  <Menu>
                    <Float
                      offset={8}
                      flip
                      shift={6}
                      portal
                      placement="bottom-end"
                      enter="transition duration-100 ease-out"
                      enterFrom="scale-50 opacity-0"
                      enterTo="scale-100 opacity-100"
                      leave="transition duration-75 ease-in"
                      leaveFrom="scale-100 opacity-100"
                      leaveTo="scale-50 opacity-0"
                    >
                      <Menu.Button className="flex justify-center items-center bg-[#868686] text-white py-2 px-7 text-sm">
                        Genre
                      </Menu.Button>

                      <Menu.Items
                        static
                        className="w-48 bg-white border border-gray-200 rounded-md shadow-lg overflow-hidden focus:outline-none"
                      >
                        { 
                          genres.length ? 
                          <>
                            {
                              genres.map((item) => (
                                <Menu.Item key={item.id}>
                                  {({ active }) => (
                                    <button type="button"
                                      className={`block w-full px-4 py-1.5 text-left text-sm ${
                                        active ? 'bg-indigo-500 text-white' : ''
                                      }`}
                                      onClick={ () => {
                                        movieData(item.id)
                                        setGenreName(item.name)
                                      }}>
                                      {item.name}
                                    </button>
                                  )}
                                </Menu.Item>
                              )) }
                          </> : 'wew'
                        }
                      </Menu.Items>
                    </Float>
                  </Menu>
              </div> :
              null
            }
            <div className=''>
              <table className='w-full text-sm'>
                <thead className='bg-gray-200'>
                  <tr>
                    <td className='text-center border border-gray-400 py-2 px-4 w-1'>No</td>
                    <td className='text-center border border-gray-400 py-2 px-4'>Poster</td>
                    <td className='text-center border border-gray-400 py-2 px-4'>Judul Film</td>
                    <td className='text-center border border-gray-400 py-2 px-4'>Sinopsis</td>
                  </tr>
                </thead>
                <tbody>
                  { 
                    movies.length ?
                    <>
                      { movies.map((item, key) => (
                        <tr key={key}>
                          <td className='text-center border border-gray-400 py-2 px-4 w-1'>{key + 1}</td>
                          <td className='text-center border border-gray-400 py-2 px-4'>
                          <Image
                            src={`${process.env.MOVIE_IMAGE_URL}${item.poster_path}`}
                            height={'52px'}
                            width={'52px'}
                            alt='' />
                          </td>
                          <td className='text-left border border-gray-400 py-2 px-4' valign='center'>{item.title}</td>
                          <td className='text-left border border-gray-400 py-2 px-4' valign='center'>
                            <div className='items-center'>
                              <span>{`Sinopsis film ${item.title}`}</span>
                              <a className='relative left-2 top-1 hover:cursor-pointer' onClick={ () => {
                                  setSynopsis(item.overview)
                                  setSynopsisModal(true)
                                }}>
                                <Image
                                  src={'/info.svg'}
                                  height={'16px'}
                                  width={'16px'}
                                  alt='' />
                              </a>
                            </div>
                          </td>
                        </tr>
                      )) }
                    </> :
                    <tr>
                      <td colSpan={4} className='text-center py-4'>Film tidak ditemukan.</td>
                    </tr>
                  }
                </tbody>
              </table>
              <ul className='mt-7 flex items-center gap-2'>
                <li>
                  <a onClick={ () => {
                     movieData(genreId, 1)
                  }}
                  className={`${page == 1 ? 'bg-blue-300 text-white' : 'bg-blue-50'} inline-flex items-center justify-center h-8 w-8 rounded hover:cursor-pointer`}>
                    1
                  </a>
                </li>
                <li>
                  <a onClick={ () => {
                     movieData(genreId, 2)
                  }}
                  className={`${page == 2 ? 'bg-blue-300 text-white' : 'bg-blue-50'} inline-flex items-center justify-center h-8 w-8 rounded hover:cursor-pointer`}>
                    2
                  </a>
                </li>
                <li>
                  <a onClick={ () => {
                     movieData(genreId, 3)
                  }}
                  className={`${page == 3 ? 'bg-blue-300 text-white' : 'bg-blue-50'} inline-flex items-center justify-center h-8 w-8 rounded hover:cursor-pointer`}>
                    3
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </>
  )
}

export default NumbeFive