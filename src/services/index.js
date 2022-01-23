import { supabase } from './supabase'

export const getVideos = async () => {
  const { data, error } = await supabase
    .from('videos')
    .select(`*, users:user_id (
        avatar,
        username,
        id
    )
    `)
  if (error) return [error]

  return [error, data]
}
