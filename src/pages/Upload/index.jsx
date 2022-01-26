import styles from './styles.module.css'
import { useDropzone } from 'react-dropzone'
import { useEffect, useState } from 'react'
import clsx from 'clsx'
import { publishVideo, uploadVideo } from '../../services'

export default function Upload () {
  const [uploading, setUploading] = useState(false)
  const [uploaded, sedUploaded] = useState(null)

  const onDrop = async (files) => {
    const [file] = files
    setUploading(true)
    const [error, fileUrl] = await uploadVideo({ videoFile: file })
    if (error) return console.log(error)
    sedUploaded(fileUrl)
  }

  const { isDragAccept, isDragReject, getRootProps, getInputProps } = useDropzone({
    disabled: uploading || uploaded,
    maxFiles: 1,
    accept: 'video/mp4,video/x-m4v,video/*',
    onDrop
  })

  useEffect(() => {
    if (isDragReject) navigator.vibrate(100)
  }, [isDragReject])

  const dndClassNames = clsx(styles.dnd, {
    [styles.dndReject]: isDragReject,
    [styles.dndAccept]: isDragAccept
  })

  const renderDndContent = () => {
    if (uploaded) return <h4>Archivo cargado con exito!</h4>
    if (uploading) return <h4>Subiendo archivo...</h4>
    if (isDragReject) return <h4>Archivo no soportado</h4>
    if (isDragAccept) return <h4>Suelta el archivo para subirlo!</h4>

    return (
      <>
        <h4>Selecciona el video para cargar</h4>
        <h5>O arrastra y suelta un archivo</h5>
        <ul>
          <li>MP4 o WebM</li>
          <li>Resolución de al menos 720x1280</li>
          <li>Hasta 120 segundos</li>
          <li>Menos de 500MB</li>
        </ul>
      </>
    )
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    if (!uploaded) return

    const description = evt.target.description.value
    const [error] = await publishVideo({ videoSrc: uploaded, description })

    if (error) return console.log(error)
    console.log('video publicado!!!')
  }

  return (
    <div className={styles.upload}>
      <div className={styles.maxWidth}>
        <h1>Cargar video</h1>
        <p>Publica un video en tu cuenta</p>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <div className={dndClassNames}>
              <img src='https://lf16-tiktok-common.ttwstatic.com/obj/tiktok-web-common-us/ies/creator_center/svgs/cloud-icon1.ecf0bf2b.svg' />
              {
                renderDndContent()
              }
            </div>
          </div>
          <label>leyenda
            <input name='description' type='text' />
          </label>
          <button className={styles.btnPublic}>Publicar</button>
        </form>
      </div>
    </div>
  )
}
