const VideoPlayer = ({ src }) => {
  return (
    <div className='container'>
      <iframe
        width='1000'
        height='500'
        src='https://www.youtube.com/embed/rjf1OmGrDzM?si=0qQh1looNCxxrRg3'
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        referrerpolicy='strict-origin-when-cross-origin'
        allowfullscreen
      ></iframe>
    </div>
  )
}

export default VideoPlayer
