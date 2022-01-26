import { supabase } from './supabase'

const prefix = import.meta.env.VITE_SUPABASE_STORAGE_URL
export const uploadVideo = async ({ videoFile }) => {
  const filename = window.crypto.randomUUID()

  const { data, error } = await supabase.storage
    .from('videos')
    .upload(`uploads/${filename}.mp4`, videoFile)

  const file = data?.Key ? `${prefix}${data.Key}` : ''

  return [error, file]
}

export const publishVideo = async ({ videoSrc, description }) => {
  const defaultAlbum = 'https://cdn.worldvectorlogo.com/logos/react-1.svg'
  const defaultSong = 'Never gonna give you up'

  const { data, error } = await supabase
    .from('videos')
    .insert([
      {
        user_id: 'b83db538-58b8-4727-b5fe-227218098b31',
        description,
        albumCover: defaultAlbum,
        songTitle: defaultSong,
        src: videoSrc
      }
    ])

  return [error, data]
}

export const getVideos = async () => {
  const { data, error } = await supabase
    .from('videos')
    .select(`*, users:user_id (
        avatar,
        username,
        id
    )
    `)
    .order('created_at', { ascending: false })
  if (error) return [error]

  return [error, data]
}
