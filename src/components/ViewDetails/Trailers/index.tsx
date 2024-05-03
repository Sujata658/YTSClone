
interface TrailersProps {
  yt: string | undefined;
  screenshots: (string | undefined)[];
}

export const Trailers = ({ yt, screenshots }: TrailersProps) => {
  return (
    <div className='grid gap-1 grid-cols-3 mx-32 my-16'>
      {yt && (
        <iframe
          src={`https://www.youtube.com/embed/${yt}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className='w-full h-full'
        ></iframe>
      )}

      
        {screenshots.map((screenshot, index) => (
          <img key={index} src={screenshot} alt={`Screenshot ${index + 1}`} className='w-full' />
        ))}
    
    </div>
  );
};
