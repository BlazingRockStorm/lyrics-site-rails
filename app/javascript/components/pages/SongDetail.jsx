import React from 'react'
import axios from 'axios'

function SongDetail() {
  const fetchSong = async () => {
    setLoading(true)
    const res = await axios.get(`/api/songs/${id}`)
    setLoading(false)
    setSong(res.data)
  }

  useEffect(() => {
    fetchSong()
  }, [])

  return (
    <div>
      Hello Rails
    </div>
  )
}

export default SongDetail