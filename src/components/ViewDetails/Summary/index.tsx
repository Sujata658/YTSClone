interface SummaryProps {
    summary: string | undefined;
  }
  
  export const Summary = ({ summary }: SummaryProps) => {
    return (
      <>
      <div>

        <div className='text-xl font-bold'>
          Plot Summary
        </div>
        <div>
          {summary}
        </div>
      </div>
      </>
    );
  };
  